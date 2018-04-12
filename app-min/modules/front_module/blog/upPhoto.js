'use strict';

angular.module('myApp.upPhoto', ['ui.router',[
        "bower_components/angular-file-upload/dist/angular-file-upload.min.js"
    ]])


    .controller('UpPhotoCtrl', ['$rootScope','$scope','locals','$stateParams','$state','$http','FileUploader','$cookies',function($rootScope,$scope,locals,$stateParams,$state,$http,FileUploader,$cookies) {

        $scope.addPhoto_show=true;
        $scope.progress_show=false;
        $scope.notallowUP=true;
        $scope.userName=$stateParams.name;
        var loginName=locals.getObj('lastName',1000*3600*24*7);
        var cName=loginName+'yblog';
        var token=$cookies.get(cName);
        //console.log('cookie'+token)
        //angular-file-uploader初始化
        var uploader = $scope.uploader = new FileUploader({
            url: 'http://www.yblog.site:6000/upload'
        });
        // a sync filter
        uploader.filters.push({
            name: 'syncFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                console.log('syncFilter');
                return this.queue.length < 10;
            }
        });
        // an async filter
        uploader.filters.push({
            name: 'asyncFilter',
            fn: function(item /*{File|FileLikeObject}*/, options, deferred) {
                console.log('asyncFilter');
                setTimeout(deferred.resolve, 1e3);
            }
        });
        var blogInfo=function(){
            //博客描述
            var myTitle=angular.element(document.querySelector('#blogTitle'));
            var myDes=angular.element(document.querySelector('#blogDes'));
            var blogDes=locals.getObj('blogDes',1000*3600*24*7);
            var blogTitle,bDes;
            if(blogDes.title){
                $scope.blogTitle=blogDes.title;
                $scope.blogDes=blogDes.des;
                blogTitle='<span>'+$scope.blogTitle+'</span>';
                bDes='<span>'+$scope.blogDes+'</span>';
                myTitle.append(blogTitle);
                myDes.append(bDes);
            }else{
                $scope.blogTitle=$stateParams.name+'的博客';
                $scope.blogDes='这里是博客描述。';
                blogTitle='<span>'+$scope.blogTitle+'</span>';
                bDes='<span>'+$scope.blogDes+'</span>';
                myTitle.append(blogTitle);
                myDes.append(bDes);
            }
        }
        var start=function(){
            var photo=angular.element(document.querySelectorAll('.photo'));
            var selectBook=angular.element(document.querySelectorAll('#selectBook'));
            var photoList=angular.element(document.querySelectorAll('#photoList'));
            var startUp=angular.element(document.querySelectorAll('#startUp'));
            var myBooks=locals.getObj('photoBooks',1000*3600*24);
            myBooks=JSON.parse(myBooks);
            if(!angular.isArray(myBooks)){
                myBooks=[];
            }
            $scope.selectBook='';
            var myBook;
            //遍历photoBook
            for(var i=0;i<myBooks.length;i++){
                var html='<option value="'+i+'">'+myBooks[i].name+'</option>';
                selectBook.append(html);
            }
            uploader.onBeforeUploadItem = function(item) {
                $scope.addPhoto_show=false;
                $scope.progress_show=true;
            };
            uploader.onAfterAddingAll = function(fileItem) {
                if(fileItem){
                    photoList.empty();
                    $scope.notallowUP=false;
                    startUp.addClass('yellow');
                }
            };
            uploader.onSuccessItem = function(fileItem, response, status, headers) {
                var createMyPhotos=false;
                startUp.removeClass('yellow');
                $scope.progress_show=false;//隐藏进度条
                var photoBooks=locals.getObj('photoBooks',1000*3600*24*7);
                photoBooks=JSON.parse(photoBooks);
                if(!angular.isArray(photoBooks)){
                    photoBooks=[];
                }
                //photoBooks=[];
                console.log(response)
                var photoSrc=response[0].image;
                photoList.append('<img style="width:150px;margin-bottom:20px;margin-left:20px;height:120px;" src="'+photoSrc+'"/>');
                var select=selectBook.val();
                alert(select)
                if(photoBooks.length<1){
                            var date=new Date();
                            var current=date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
                                date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
                            var myBooks1={name:'我的相册',photos:[],time:current};
                            myBooks1.photos.push(photoSrc);
                            photoBooks.push(myBooks1);
                            locals.set('upPost',true)
                            locals.setObj('photoBooks',photoBooks);
                }else{
                        photoBooks[select].photos.push(photoSrc);
                        locals.set('upPost',true)
                        locals.setObj('photoBooks',photoBooks);
                }
                //上传相册photoBooks
                photoBooks=JSON.stringify(photoBooks);
                $http({url:'http://www.yblog.site:3000/upPhoto',
                    data:{name:$stateParams.name,myBooks:photoBooks,token:token},
                    method:'POST',
                    withCredentials: true
                }).then(function(result){
                    locals.set('upPost',true);//数据变动标志
                }).catch(function(err){
                    console.log(err)
                });
            };
            $scope.upPhoto=function(){
                var img=photo.val();
                if(img!=""){
                    appendPhoto();
                }
            }
        };
        window.onunload=function(){//刷新时更新数据
            locals.set('upPost',true);
        };
        var stateName=locals.getObj('stateName',1000*3600*24);
        if(stateName!=$stateParams.name||locals.get('upPost')) {
            $http({
                url: 'http://www.yblog.site:3000/userData',
                data: {name: $stateParams.name},
                method: 'POST',
                withCredentials: true
            }).then(function (result) {
                var user =result.data.user;
                locals.setObj('myInfo', user.myInfo);
                locals.set('postTypes', user.postTypes);
                locals.set('name', user.name);
                locals.set('hostName', user.name);//别人的用户名
                locals.setObj('fans', user.fans);
                locals.setObj('messages', user.messages);
                locals.setObj('focus', user.focus);
                locals.setObj('friend', user.friend);
                locals.setObj('blogDes', user.blogDes);
                locals.setObj('permission', user.permissions);
                locals.set('lastLogin', user.lastLogin);
                locals.set('headImg', user.headImg);
                locals.setObj('photoBooks', user.photoBooks);
                locals.set('upPost', '');//清空文章更新标志
                locals.setObj('stateName', $stateParams.name);
                blogInfo();
                start();
            }).catch(function (err) {
                console.log(err)
            })
        }else{
            start()
        }
    }]);