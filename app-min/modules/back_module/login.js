'use strict';
angular.module('myApp.admLogin', ['ui.router'])


    .controller('AdmLoginCtrl',['$scope','$http','$state','locals',function($scope,$http,$state,locals){
        $scope.user_name="";
        $scope.user_password="";
        var loginErr=angular.element(document.querySelectorAll('#login_err'));
        //提交登录逻辑
  $scope.login=function(){
    $http({url:"http://www.yblog.site:3000/admLogin",
        data:{name:$scope.user_name,password:$scope.user_password},
        method:'POST',
        withCredentials: true
    })
        .then(function(result){
            $scope.userName=result.data.name;
            if(result.data.name==false){
                loginErr.text("*用户名错误!").css({'color':'red'})
            }
            if(result.data.password==false){
                loginErr.text("*密码错误!").css({'color':'red'})
            }
            if(result.data.name==true&&result.data.password==true){
                locals.setObj('manager',result.data);
                $state.go('backHome',{name:$scope.user_name})
            }
        }).catch(function(err){
        console.log(err)
      })
     }
    }])