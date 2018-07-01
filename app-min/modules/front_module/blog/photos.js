'use strict';

angular.module('myApp.photos', ['ui.router',[
        "node_modules/ng-dialog/css/ngDialog.min.css",
        "node_modules/ng-dialog/css/ngDialog-theme-default.min.css",
        "node_modules/ng-dialog/js/ngDialog.min.js"
    ]])


    .controller('PhotosCtrl', ['$rootScope','$scope','locals','$stateParams','$state','$compile','$http','$cookies','$location','$anchorScroll',function($rootScope,$scope,locals,$stateParams,$state,$compile,$http,$cookies,$location,$anchorScroll){
        $scope.userName=$stateParams.name;
        $scope.loadedData=false;
        var loginName=locals.getObj('lastName',1000*3600*24*7);
        var cName=loginName+'yblog';
        var token=$cookies.get(cName);
        $scope.managephotos_show=false;
        console.log('cookie'+token)
        $scope.toPhotoDetail=function(){setTimeout(function(){
            $location.hash('photoDetail');
            $anchorScroll()
        },80)};
        var start=function(){
            //权限管理
            var permission=locals.getObj('permission',1000*3600*24);
            var loginName=locals.getObj('lastName',1000*3600*24);

            var stateName=locals.getObj('stateName',1000*3600*24);
            if(stateName!=$stateParams.name||locals.get('upPost')){//访问的博客路径name改变时，需延迟加载给headBar提供请求时间
                var empty='';
            }else{$scope.photoBooks=locals.getObj('photoBooks',1000*3600*24);
                $scope.photoBooks=JSON.parse($scope.photoBooks);
            }
            if(loginName==(null||undefined||'')&&permission.photos!='all'){
                $state.go('notLogin',{name:$stateParams.name})
            }
            var isFans=false,isFriend=false;
            if(loginName!=$stateParams.name){//不是博主就判断访问权限
                if(permission.photos=='fans'){
                    var fans=locals.getObj('fans',1000*3600*24);
                    if(!fans){
                        fans=[];
                    }else{
                        for(var k=0;k<fans.length;k++){
                            if(fans[k].name==loginName){
                                isFans=true;
                            }
                        }
                    }
                    if(!isFans){
                        $state.go('notPerm',{name:$stateParams.name})
                    }
                }
                if(permission.photos=='friend'){
                    var friend=locals.getObj('friend',1000*3600*24);
                    if(!friend){
                        friend=[];
                    }else{
                        for(var l=0;l<friend.length;l++){
                            if(friend[l]==loginName){
                                isFriend=true;
                            }
                        }
                    }
                    if(!isFriend){
                        $state.go('notPerm',{name:$stateParams.name})
                    }
                }
                if(permission.photos=='private'){
                    $state.go('notPerm',{name:$stateParams.name})
                }
            }
            //主要交互逻辑
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
            $scope.userName=$stateParams.name;
            $scope.triangle='相册';
            $scope.border='';
            $scope.photoBooks=locals.getObj('photoBooks',1000*3600*24);
            $scope.photoBooks=JSON.parse($scope.photoBooks);
            $scope.countPhotos=0;
            for(var i=0;i<$scope.photoBooks.length;i++){
                $scope.countPhotos+=$scope.photoBooks[i].photos.length;
            }
            if(!angular.isArray($scope.photoBooks)){
                $scope.photoBooks=[];
            }
            $scope.newBook=function(){
                var newBookName=prompt('新相册名称：');
                if(newBookName!=""&&newBookName!=null){
                    var date=new Date();
                    var current=date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
                        date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
                    var newBook={name:newBookName,photos:[],time:current};
                    $scope.photoBooks.push(newBook);
                    var photoBooks=JSON.stringify($scope.photoBooks);
                    $http({url:'http://localhost:3000/upPhoto',
                        data:{name:$stateParams.name,myBooks:photoBooks,token:token},
                        method:'POST',
                        withCredentials: true
                    }).then(function(result){
                        locals.set('upPost',true);//数据变动标志
                    }).catch(function(err){
                        console.log(err)
                    })

                }
            }
            //删除相册
            $scope.del_show=function(){
                $scope.books_show=!$scope.books_show;
            };
            $scope.deleteBook=function(){
                locals.set('upPost',true);//数据变动标志
                var select=del_select.val();
                var selectBook;
                if(!Number(select)&&Number(select)!=0){
                    alert("进入")
                    selectBook=0;
                }else{
                    selectBook=Number(select);
                }
                alert(selectBook)
                var del_book=angular.element(document.querySelectorAll('#books'+selectBook+''));
                del_book.remove();
                myBooks.splice(selectBook,1);
                var photoBooks=JSON.stringify(myBooks);
                $http({url:'http://localhost:3000/upPhoto',
                    data:{name:$stateParams.name,myBooks:photoBooks,token:token},
                    method:'POST',
                    withCredentials: true
                }).then(function(result){

                }).catch(function(err){
                    console.log(err)
                })
            };
           $scope.loadedData=true;
            //遍历del_select
            var del_select=angular.element(document.querySelectorAll('#del_select'));
            for(var j=0;j<$scope.photoBooks.length;j++){
                del_select.append('<option value="'+j+'">'+$scope.photoBooks[j].name+'</option>')
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
                $scope.currentUser = result.data.user;
                $scope.typePosts = result.data.typePosts;
                $scope.topPosts = result.data.topPosts;
                var user = $scope.currentUser;
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
                start();
            }).catch(function (err){
                console.log(err)
            });
        }else{
            start()
        }

    }]);
