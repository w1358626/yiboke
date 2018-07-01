'use strict';

angular.module('myApp.myHome.myPower', ['ui.router',[
        "node_modules/ng-dialog/css/ngDialog.min.css",
        "node_modules/ng-dialog/css/ngDialog-theme-default.min.css",
        "node_modules/ng-dialog/js/ngDialog.min.js"
]])


    .controller('MyPowerCtrl', ['$rootScope','$scope','locals','$stateParams','$http','$cookies','ngDialog',function($rootScope,$scope,locals,$stateParams,$http,$cookies,ngDialog) {
        $scope.userName=$stateParams.name;
        $scope.permText=['所有人','仅粉丝','仅博友','私有'];
        var permissions=['all','fans','friend','private'];
        var permission=locals.getObj('permission',1000*3600*24);
        console.log(permission)
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
        if(permission.logs){
            var perm1=permission.logs;
            switch(perm1){
                case 'all': $scope.logs_permission='0';
                    break;
                case 'fans': $scope.logs_permission='1';
                    break;
                case 'friend': $scope.logs_permission='2';
                    break;
                case 'private': $scope.logs_permission='3';
                    break;
            }
           // alert($scope.logs_permission)
        }
        if(permission.photos){
            var perm2=permission.photos;
            switch(perm2){
                case 'all': $scope.photos_permission='0';
                    break;
                case 'fans': $scope.photos_permission='1';
                    break;
                case 'friend': $scope.photos_permission='2';
                    break;
                case 'private': $scope.photos_permission='3';
                    break;
            }
            //alert($scope.photos_permission)
        }
        if(permission.dynamic){
            var perm3=permission.dynamic;
            switch(perm3){
                case 'all': $scope.dynamic_permission='0';
                    break;
                case 'fans': $scope.dynamic_permission='1';
                    break;
                case 'friend': $scope.dynamic_permission='2';
                    break;
                case 'private': $scope.dynamic_permission='3';
                    break;
            }
           // alert($scope.dynamic_permission)
        }
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
            $http({url:'http://localhsot:3000/checkLogin',
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
        $scope.upPermission=function(){
            var logsPerm=permissions[$scope.logs_permission];
            var photosPerm=permissions[$scope.photos_permission];
            var dynamicPerm=permissions[$scope.dynamic_permission];
            var loginName=locals.getObj('lastName',1000*3600*24*7);
            var cName=loginName+'yblog';
            var token=$cookies.get(cName);
            console.log('cookie'+token)
            $http({url:'http://localhsot:3000/up_permissions',
                data:{name:$stateParams.name,logsPerm:logsPerm,photosPerm:photosPerm,dynamicPerm:dynamicPerm,token:token},
                method:'POST',
                withCredentials: true
            }).then(function(result){
                saveTip()
            }).catch(function(err){
                console.log(err)
            })
        }
    }]);