'use strict';

angular.module('myApp.myHome.mySet.setPassword', ['ui.router',[
        "node_modules/ng-dialog/css/ngDialog.min.css",
        "node_modules/ng-dialog/css/ngDialog-theme-default.min.css",
        "node_modules/ng-dialog/js/ngDialog.min.js"
]])


    .controller('SetPasswordCtrl', ['$rootScope','$scope','locals','$stateParams','$http','$cookies','ngDialog',function($rootScope,$scope,locals,$stateParams,$http,$cookies,ngDialog) {
        $scope.needPost=false;
        $scope.userName=$stateParams.name;
        $scope.name=[];
        $scope.password=[];
        $scope.newPwd=[];
        $scope.re_newPwd=[];
        $scope.tip='';
        $scope.success='';
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
        $scope.reg_pwd=function(){
            var reg = /[a-zA-Z0-9_-]{6,16}/;
            if(!reg.test($scope.newPwd)){
                $scope.tip='新密码应为6-16个字符！';
            }else{
                $scope.tip='';
            }
        };
        $scope.rePassword=function(){
            if($scope.name!=$stateParams.name){
                $scope.tip='用户名填写不正确！'
                $scope.success='';
            }else{
              if($scope.newPwd==$scope.re_newPwd){
                  var pwd=filterXSS($scope.password);
                  var newPwd=filterXSS($scope.newPwd);
                $http({url:'http://www.yblog.site:3000/rePassword',
                     data:{name:$stateParams.name,pwd:pwd,newPwd:newPwd,token:token} ,
                     method:'POST',
                     withCredentials: true
                }).then(function(result){
                    if(result.data=='userName not exist'){
                        $scope.tip='用户名不存在！'
                        $scope.success='';
                    }
                    if(result.data=='pwd error'){
                        $scope.tip='密码错误！'
                        $scope.success='';
                    }
                    if(result.data=='success'){
                        $scope.success='修改成功！';
                        saveTip()
                    }
                }).catch(function(err){
                    console.log(err)
                })
            }else{
                   $scope.tip='新密码两次输入不一致！'
                  $scope.success='';
                     }
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