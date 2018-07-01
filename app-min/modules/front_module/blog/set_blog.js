'use strict';

angular.module('myApp.myHome.mySet.setBlog', ['ui.router',[
        "node_modules/ng-dialog/css/ngDialog.min.css",
        "node_modules/ng-dialog/css/ngDialog-theme-default.min.css",
        "node_modules/ng-dialog/js/ngDialog.min.js"
]])

    .controller('SetBlogCtrl', ['$rootScope','$scope','locals','$stateParams','$http','$cookies','ngDialog',function($rootScope,$scope,locals,$stateParams,$http,$cookies,ngDialog) {
        $scope.needPost=false;
            var blogDes=locals.getObj('blogDes',1000*3600*24);
            $scope.userName=$stateParams.name;
            $scope.blogTitle=blogDes.title;
            $scope.blogDes=blogDes.des;
        var loginName=locals.getObj('lastName',1000*3600*24*7);
        var cName=loginName+'yblog';
        var completeTip = function () {
            ngDialog.open({
                template: 'directives/writeComplete.html',
                className:'ngdialog-theme-default',
                controller:function($scope,$timeout){
                    $scope.show = function(){
                        $scope.closeThisDialog(); //关闭弹窗
                    }
                    var close=$timeout(function(){
                        $scope.show();
                    },1500)
                }
            });
        };
        var saveTip = function () {
            ngDialog.open({
                template: 'directives/setSuccess.html',
                className:'ngdialog-theme-default',
                controller:function($scope,$timeout){
                    $scope.show = function(){
                        $scope.closeThisDialog(); //关闭弹窗
                    }
                    var close=$timeout(function(){
                        $scope.show();
                    },1500)
                }
            });
        };
            var token=$cookies.get(cName);
            console.log('cookie'+token)
            $scope.up_blogDes=function(){
                var title=filterXSS($scope.blogTitle);
                var des=filterXSS($scope.blogDes);
                if(title!=''&&des!=''){
                    locals.setObj('blogDes',{title:title,des:des});
                $http({url: 'http://localhost:3000/up_blogDes',
                    data:{name:$stateParams.name,title:title,des:des,token:token},
                    method:'POST',
                    withCredentials: true
                }).then(function(result){
                    locals.set('upPost',true)
                   saveTip()
                }).catch(function(err){
                    console.log(err)
                })
                }else{
                    completeTip()
                }
            };
        //缓存数据
        var keepData=function(user){
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
        };
        //checkLogin
        var checkLogin=setTimeout(function(){
            $http({url:'http://localhost:3000/checkLogin',
                method:'GET',
                withCredentials: true
            }).then(function(result){
                if(result.data!='undefined'){
                    keepData(result.data);
                }
            }).catch(function(err){
                console.log(err)
            });
        },20);

    }]);