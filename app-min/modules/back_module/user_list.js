'use strict';

angular.module('myApp.userList', ['ui.router',[
        "bower_components/angular-bootstrap/ui-bootstrap-csp.css",
        "bower_components/bootstrap.js",
        "bower_components/angular-bootstrap/ui-bootstrap.min.js"
]])


    .controller('UserListCtrl', ['$rootScope','$scope','locals','$stateParams','$state','$compile','$http',function($rootScope,$scope,locals,$stateParams,$state,$compile,$http) {
        if(locals.getObj('manager',1000*3600*24)){
        $scope.userName=$stateParams.name;
        $scope.allUsers=[];
        $scope.newManager_show=false;
        $scope.managerName='';
        $scope.managerPwd='';
        $scope.managerPwd1='';
        $scope.managerEmail='';
        $scope.managerRole='';
        $scope.newManager_tip='';
        $scope.lock_btn='锁定';
        $scope.del_btn='删除';
            var cName=$stateParams.name+'ymanager';
            var token=$cookies.get(cName);
            console.log('cookie'+token)
        $http({url:'http://www.yblog.site:3000/user_all',
              method:'POST',
              data:{token:token},
              withCredentials: true
        }).then(function(result){
            $scope.allUsers=result.data;
        }).catch(function(err){
            console.log(err)
        });
        $scope.userList=function(){
            var userList=angular.element(document.querySelectorAll('#userList'));
            var managerList=angular.element(document.querySelectorAll('#managerList'));
            userList.addClass('active');
            managerList.removeClass('active');
            $http({url:'http://www.yblog.site:3000/user_all',
                data:{token:token},
                method:'POST',
                withCredentials: true
            }).then(function(result){
                $scope.allUsers=result.data;
            }).catch(function(err){
                console.log(err)
            });
        };
        $scope.managerList=function(){
            if(locals.getObj('manager').role=='boss'){
            $scope.newManager_show=true;
            }
            var userList=angular.element(document.querySelectorAll('#userList'));
            var managerList=angular.element(document.querySelectorAll('#managerList'));
            userList.removeClass('active');
            managerList.addClass('active');
            $http({url:'http://www.yblog.site:3000/allManager',
                  method:'POST',
                  data:{token:token},
                  withCredentials: true
            }).then(function(result){
                console.log(result.data)
                if(angular.isArray(result.data)){
                    $scope.allUsers=result.data;
                }else{
                $scope.allUsers=[];
                $scope.allUsers.push(result.data);
                }
            }).catch(function(err){
                console.log(err)
            });
        };
        $scope.newManager=function(){
            if($scope.managerName==''&&$scope.managerPwd==''&&$scope.managerPwd1==''&&$scope.managerEmail==''&& $scope.managerEmail==''){
                $scope.newManager_tip='填写信息不完整！';
            }else{
                if(!$scope.managerPwd==$scope.managerPwd1){
                    $scope.newManager_tip='两次密码不一致！';
                }else{
                    $http({url:'http://www.yblog.site:3000/newManager',
                          data: {name:$scope.managerName,password:$scope.managerPwd,email:$scope.managerEmail,role:$scope.managerRole,token:token},
                          method:'POST',
                          withCredentials: true
                    }).then(function(result){
                        if(result.data=='success'){
                            alert('添加成功！')
                        }
                    }).catch(function(err){
                        console.log(err)
                    })
                }
            }
        };

        $scope.del_user=function(name,role){
            if(role==undefined) {
            $scope.del_btn='已删除';
            $http({url:'http://www.yblog.site:3000/del_user',
                 data: {name:name,token:token},
                 method:'POST',
                 withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
            }else{
                if(role=='boss') {
                    $scope.del_btn = '已删除';
                    $http({
                        url: 'http://www.yblog.site:3000/del_manager',
                        data: {name: name},
                        method: 'POST',
                        withCredentials: true
                    }).then(function (result) {

                    }).catch(function (err) {
                        console.log(err)
                    })
                }else{
                    alert('del没有权限！')
                }
            }
        };
        $scope.lock_user=function(name,role){
            alert(name+role)
            if( $scope.lock_btn =='锁定'){
                if(role==undefined) {
                    $scope.lock_btn = '解锁';
                    $http({
                        url: 'http://www.yblog.site:3000/upUser_field',
                        data: {name: name, field: {lock: true},token:token},
                        method: 'POST',
                        withCredentials: true
                    }).then(function (result) {

                    }).catch(function (err) {
                        console.log(err)
                    })
                }else{
                    if(role=='boss'){
                    $scope.lock_btn = '解锁';
                    $http({
                        url: 'http://www.yblog.site:3000/upManager_field',
                        data: {name: name, field: {lock: true},token:token},
                        method: 'POST',
                        withCredentials: true
                    }).then(function (result) {

                    }).catch(function (err) {
                        console.log(err)
                    })
                    }else{
                        alert('lock没有权限！')
                    }
                }
            }else{
                if(role==undefined) {
                    $scope.lock_btn = '锁定';
                    $http({
                        url: 'http://www.yblog.site:3000/upUser_field',
                        data: {name: name, field: {lock: false},token:token},
                        method: 'POST',
                        withCredentials: true
                    }).then(function (result) {

                    }).catch(function (err) {
                        console.log(err)
                    })
                }else{
                    if(role=='boss'){
                    $scope.lock_btn = '锁定';
                    $http({
                        url: 'http://www.yblog.site:3000/upManager_field',
                        data: {name: name, field: {lock: false},token:token},
                        method: 'POST',
                        withCredentials: true
                    }).then(function (result) {

                    }).catch(function (err) {
                        console.log(err)
                    })
                    }else{
                        alert('没有权限！')}
                }
            }
        }
        }else{
            $state.go('admLogin');
        }

    }])