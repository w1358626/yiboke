'use strict';

angular.module('myApp.myHome.myInfo', ['ui.router',[
        "bower_components/xss/dist/xss.min.js",
        "node_modules/ng-dialog/css/ngDialog.min.css",
        "node_modules/ng-dialog/css/ngDialog-theme-default.min.css",
        "node_modules/ng-dialog/js/ngDialog.min.js"
]])


    .controller('MyInfoCtrl', ['$rootScope','$scope','locals','$stateParams','$http','$cookies','ngDialog',function($rootScope,$scope,locals,$stateParams,$http,$cookies,ngDialog) {
        //绑定数据
        if(locals.getObj('myInfo',1000*3600*24)){
            var info=locals.getObj('myInfo',1000*3600*24);
            $scope.userName=$stateParams.name;
            $scope.myName=info.nickName;
            $scope.myRealName=info.realName;
            if(info.male=='true'){
                $scope.male=true;
            }else{
                $scope.male=false;
            }
            if(info.female=='true'){
                $scope.female=true;
            }else{
                $scope.female=false;
            }
            $scope.myBirthday=info.birthday;
            $scope.myBorn=info.born;
            $scope.myLive=info.live;
            $scope.myIntro=info.intro;
            $scope.myStar =info.star;
            $scope.bloodType=info.blood;
            $scope.favourite=info.favourite;
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
        //checkLogin
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
            $scope.upInfo=function(){
                    //alert($scope.myRealName+'RNAME'+ $scope.male+ 'MALE'+$scope.female+'FEMALE'+$scope.myBirthday+ ''+$scope.myBorn+''+ $scope.myLive)
                  var myName=filterXSS($scope.myName);
                  var realName=filterXSS($scope.myRealName);
                  var male=filterXSS($scope.male);
                  var female=filterXSS($scope.female);
                  var birthday=filterXSS($scope.myBorn);
                  var born=filterXSS($scope.myBorn);
                  var live=filterXSS($scope.myLive);
                  var intro=filterXSS($scope.myIntro);
                  var star=filterXSS($scope.myStar);
                  var blood=filterXSS($scope.bloodType);
                  var favourite=filterXSS($scope.favourite);
                if(myName!=''&&realName!=''&&birthday!=''&&born!=''&&live!=''&&intro!=''&&star!=''&&blood!=''&&favourite!=''){
                var loginName=locals.getObj('lastName',1000*3600*24*7);
                var cName=loginName+'yblog';
                var token=$cookies.get(cName);
                //console.log('cookie'+token)
                $http({
                          url:'http://localhost:3000/up_myInfo',
                          data:{name:$stateParams.name,
                              nickName:myName,
                              realName:realName,
                              male:male,
                              female:female,
                              birthday:birthday,
                              born:born,
                              live:live,
                              intro:intro,
                              star:star,
                              blood:blood,
                              favourite:favourite,token:token},
                           method:'POST',
                          withCredentials: true
                  }).then(function(result){
                           saveTip()
                  }).catch(function(err){
                      console.log(err)
                  })
                }else{
                    completeTip()
                }
            }

    }]);