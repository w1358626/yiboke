'use strict';

angular.module('myApp.showInfo', ['ui.router',[
        "node_modules/ng-dialog/css/ngDialog.min.css",
        "node_modules/ng-dialog/css/ngDialog-theme-default.min.css",
        "node_modules/ng-dialog/js/ngDialog.min.js"
    ]])


    .controller('ShowInfoCtrl', ['$rootScope','$scope','locals','$state','$stateParams','$http',function($rootScope,$scope,locals,$state,$stateParams,$http) {
        $scope.needPost=true;
        $scope.loadedData=false;
        $scope.userName=$stateParams.name;
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
        $http({url:'http://localhost:3000/userData',
            data:{name:$stateParams.name},
            method:'POST',
            withCredentials: true
        }).then(function(result) {
            var user=result.data.user;
            locals.setObj('myInfo',user.myInfo);
            locals.set('postTypes', user.postTypes);
            locals.set('name', user.name);
            locals.set('hostName', user.name);//别人的用户名
            locals.setObj('fans', user.fans);
            locals.setObj('messages',user.messages);
            locals.setObj('focus', user.focus);
            locals.setObj('friend',user.friend);
            locals.setObj('blogDes',user.blogDes);
            locals.setObj('permission',user.permissions);
            locals.set('lastLogin', user.lastLogin);
            locals.set('headImg', user.headImg);
            locals.setObj('photoBooks',user.photoBooks);
            locals.set('upPost','');//清空文章更新标志
            locals.setObj('stateName',$stateParams.name);
            //本地缓存文章type_posts  top posts
                var typePosts=result.data.typePosts;
                var topPosts=result.data.topPosts;
                locals.set('countPosts',typePosts.length);
                locals.setObj('typePosts',typePosts);
                locals.setObj('topPosts',topPosts);
            blogInfo();
            var myInfo = locals.getObj('myInfo', 1000 * 3600 * 24);
            if (myInfo) {
                $scope.nickName = myInfo.nickName;
                $scope.realName = myInfo.realName;
                var male = myInfo.male;
                var female = myInfo.female;
                if (male == 'true') {
                    $scope.gender = '男';
                } else {
                    if (female == 'true') {
                        $scope.gender = '女';
                    }
                }
                var myhead=angular.element(document.querySelector('#myheadImg'));                
                $scope.myheadImg=locals.get('headImg');
                myhead.attr('src',$scope.myheadImg);
                $scope.born = myInfo.born;
                $scope.live = myInfo.live;
                $scope.birthday = myInfo.birthday;
                $scope.star = myInfo.star;
                $scope.blood = myInfo.blood;
                $scope.intro = myInfo.intro;
                $scope.favourite = myInfo.favourite;
            }
            $scope.loadedData=true;
        }).catch(function(err){
            console.log(err)
        })
    }]);
