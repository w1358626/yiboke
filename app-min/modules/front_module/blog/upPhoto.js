'use strict';

angular.module('myApp.upPhoto', ['ui.router'])


    .controller('UpPhotoCtrl', ['$rootScope','$scope','locals','$stateParams','$state','$http','$cookies','$compile',function($rootScope,$scope,locals,$stateParams,$state,$http,$cookies,$compile) {

        $scope.notallowUP=true;
        $scope.userName=$stateParams.name;
        var loginName=locals.getObj('lastName',1000*3600*24*7);
        var cName=loginName+'yblog';
        var token=$cookies.get(cName);
        //console.log('cookie'+token)
        
         

        // 初始化Web Uploader
        var wuploader = WebUploader.create({

            // 选完文件后，是否自动上传。
            auto: true,

            // swf文件路径
            swf: 'bower_components/webUpload/Uploader.swf',

            // 文件接收服务端。
            server: 'http://localhost:6000/upload',

            // 选择文件的按钮。可选。
            // 内部根据当前运行是创建，可能是input元素，也可能是flash.
            pick: '#upPhoto',

            // 只允许选择图片文件。
            accept: {
                title: 'Images',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/*'
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
            wuploader.on( 'fileQueued', function( file ) {
                if(file){
                    photoList.empty();
                    $scope.notallowUP=false;
                    startUp.addClass('yellow');
                }
            });
            wuploader.on( 'uploadProgress', function( file, percentage ) {
                var percent=angular.element(document.querySelector("#percent"));
                var percentageBar=angular.element(document.querySelectorAll("#percentageBar"));
                if(percentageBar.length==0){
                var html='<div id="percentageBar" class="progress progress-striped active" style="margin-top:30px;width:90%;height:10px;margin-left:auto;margin-right:auto;" >'
                    +'<div id="progressBar" class="progress-bar progress-bar-success" role="progressbar" style="width: 0" ></div>'
                    +'</div>';
                    html=$compile(html)($scope);
                    percent.prepend(html)
                }
                var progressBar=angular.element(document.querySelector("#progressBar"));
                progressBar.css( 'width', percentage * 100 + '%' );
                console.log(percentage*100);
            });
            wuploader.on( 'uploadSuccess', function( file,response ) {
                var createMyPhotos=false;
                var percent=angular.element(document.querySelector("#percent"));
                var percentageBar=angular.element(document.querySelector("#percentageBar"));
                percentageBar.remove();
                var photoBooks=locals.getObj('photoBooks',1000*3600*24);
                photoBooks=JSON.parse(photoBooks);
                if(!angular.isArray(photoBooks)){
                    photoBooks=[];
                }
                //photoBooks=[];
                console.log(response)
                var photoSrc=response[0].image;
                photoList.append('<img style="width:150px;margin-bottom:20px;margin-left:20px;height:120px;" src="'+photoSrc+'"/>');
                var select=selectBook.val();
                if(photoBooks.length<1){
                            var date=new Date();
                            var current=date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
                                date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
                            var myBooks1={name:'我的相册',photos:[],time:current};
                            myBooks1.photos.push(photoSrc);
                            photoBooks.push(myBooks1);
                            locals.set('upPost',true);
                            var books1=JSON.stringify(photoBooks);
                            locals.setObj('photoBooks',books1);
                }else{
                        photoBooks[select].photos.push(photoSrc);
                        locals.set('upPost',true);
                        var books2=JSON.stringify(photoBooks);
                        locals.setObj('photoBooks',books2);
                }
                //上传相册photoBooks
                photoBooks=JSON.stringify(photoBooks);
                $http({url:'http://localhost:3000/upPhoto',
                    data:{name:$stateParams.name,myBooks:photoBooks,token:token},
                    method:'POST',
                    withCredentials: true
                }).then(function(result){
                    locals.set('upPost',true);//数据变动标志
                }).catch(function(err){
                    console.log(err)
                });
            });
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
                url: 'http://localhost:3000/userData',
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
