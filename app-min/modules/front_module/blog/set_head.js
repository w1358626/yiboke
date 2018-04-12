'use strict';

angular.module('myApp.myHome.mySet.setHead', ['ui.router',[
        "node_modules/ng-dialog/css/ngDialog.min.css",
        "node_modules/ng-dialog/css/ngDialog-theme-default.min.css",
        "node_modules/ng-dialog/js/ngDialog.min.js"
]])


    .controller('SetHeadCtrl', ['$rootScope','$scope','locals','$stateParams','$http','$cookies','ngDialog',function($rootScope,$scope,locals,$stateParams,$http,$cookies,ngDialog) {
        $scope.needPost=false;
        $scope.userName=$stateParams.name;
        $scope.head=locals.get('headImg');
        var loginName=locals.getObj('lastName',1000*3600*24*7);
        var cName=loginName+'yblog';
        var token=$cookies.get(cName);
        //console.log('cookie'+token)
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
            $scope.upTheme=function(){
                $http({
                    url:'http://www.yblog.site:6000/upload',
                    method: 'POST',
                    headers: {
                        'Content-Type': undefined
                    },
                    transformRequest: function() {
                        var formData = new FormData();
                        formData.append('file', $('#file')[0].files[0]);
                        return formData;
                    }
                }).then(function (result) {
                    if(result!="not allowed") {
                        console.log(result.data);
                        $scope.themeImg_show=false;
                        $scope.head=result.data[0].image;
                        $http({url:'http://www.yblog.site:3000/upHead',
                              data:{head:$scope.head,token:token},
                              method: 'POST',
                              withCredentials: true
                        }).then(function(result){
                               saveTip();
                               locals.set('upPost',true)
                        }).catch(function(err){
                            console.log(err)
                        })
                    }
                }).catch(function(data, status) {
                    console.log(data);
                });
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
            $http({url:'http://www.yblog.site:3000/checkLogin',
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
