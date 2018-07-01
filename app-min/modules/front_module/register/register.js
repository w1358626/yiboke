'use strict';
angular.module('myApp.register', ['ui.router',[
        "bower_components/xss/dist/xss.min.js"
]])


    .controller('RegisterCtrl',['$scope','$http','$state','locals',function($scope,$http,$state,locals){
        /*初始化*/
        var code="";
        $scope.successFlag=true;
        $scope.code_true=false;
        $scope.code_false=false;
        $scope.name_true=false;
        $scope.email_true=false;
        $scope.pwd_true=false;
        $scope.repwd_true=false;
        $scope.term=false;

        var nameFlag=false,pwdFlag=false,rePwdFlag=false,validCodeFlag=false,termFlag=false,emailFlag=false;
        var name=angular.element(document.querySelectorAll("#user_name"));
        var email=angular.element(document.querySelectorAll("#user_email"));
        var email_tip=angular.element(document.querySelectorAll("#email_tip"));
        var name_tip=angular.element(document.querySelectorAll("#name_tip"));
        var pwd=angular.element(document.querySelectorAll("#pwd"));
        var pwd_tip=angular.element(document.querySelectorAll("#pwd_tip"));
        var pwd_re=angular.element(document.querySelectorAll("#re_pwd"));
        var rePwdTip=angular.element(document.querySelectorAll("#repwd_tip"));
        var valid_code=angular.element(document.querySelectorAll("#valid_code"));
        var validImg=angular.element(document.querySelectorAll("#validImg"));
        var term=angular.element(document.querySelectorAll("#term"));
        var reg_btn=angular.element(document.querySelectorAll("#reg_btn"));
       var getValidCode=setTimeout(function(){
             $http.get("http://localhost:3000/ValidCode_value")
            .then(function (result) {  //正确请求成功时处理
                code=result.data.code.validCode;
                $scope.loginUser=result.data.user;
            }).catch(function (err) { //捕捉错误处理
            alert("获取验证码出错"+err)
        })
        },50);

        /*验证码点击刷新事件*/
        $scope.codeChange=function(){
        var date=new Date();
        var time=date.getTime();
        var src="http://localhost:3000/reg/validCode/"+time;
        validImg.attr("src",src);
            $http({url:"http://localhost:3000/ValidCode_value",
                method:'GET',
                withCredentials: true
            }).then(function (result) {  //正确请求成功时处理
                code=result.data.validCode;
            }).catch(function (err) { //捕捉错误处理
                alert("获取验证码出错"+err)
            });
              if(valid_code.val()!=""){
                 if(valid_code.val().toUpperCase()==code){
                     $scope.code_true=true;
                     $scope.code_false=false;
                     validCodeFlag=true;
                     if(nameFlag==true && pwdFlag==true && rePwdFlag==true && termFlag==true && validCodeFlag==true && emailFlag==true){
                         $scope.successFlag=false;
                         reg_btn.css({'background':'rgba(78, 170, 57, 0.99)'});
                     }
                 }else{
                     $scope.code_true=false;
                     $scope.code_false=true;
                     validCodeFlag=false;
                     $scope.successFlag=true;

                     reg_btn.css({'background':'rgba(78, 170, 57, 0.55)'});
                 }
              }
    };


        /*查找用户邮箱*/
    var findEmail=function() {
        $scope.email = email.val();
        $http({url:"http://localhost:3000/reg/validEmail",
            data:{email:$scope.email},
            method:'POST',
            withCredentials: true
    })
            .then(function (user) {  //正确请求成功时处理
                var  isuser=user.data;

                if(isuser.email==$scope.email){
                    emailFlag=false;
                    $scope.email_true=false;
                    email_tip.text("*此邮箱已被注册！").css({'color':'red'});
                    $scope.successFlag=true;

                    reg_btn.css({'background':'rgba(78, 170, 57, 0.55)'});
                }else{
                    emailFlag=true;
                    $scope.email_true=true;
                    if(nameFlag==true && pwdFlag==true && rePwdFlag==true && termFlag==true && validCodeFlag==true){
                        $scope.successFlag=false;

                        reg_btn.css({'background':'rgba(78, 170, 57, 0.99)'});
                    }
                    email_tip.text("可以填写QQ邮箱，网易邮箱，新浪邮箱").css({'color': '#ccc'});
                }
            }).catch(function (err) { //捕捉错误处理
            console.info(err);
            alert("错误"+err);
        })};
        /*查找用户*/
        var findUser=function() {
            $scope.user = name.val();
            $http({url:"http://localhost:3000/reg/validName",
                data:{name:$scope.user},
                method:'POST',
                withCredentials: true
            })
                .then(function (user) {  //正确请求成功时处理
                    var  isuser=user.data;
                    if(isuser.name==$scope.user){
                        nameFlag=false;
                        $scope.name_true=false;
                        name_tip.text("*此用户名已被注册！").css({'color':'red'});
                        $scope.successFlag=true;

                        reg_btn.css({'background':'rgba(78, 170, 57, 0.55)'});
                    }else{
                        nameFlag=true;
                        $scope.name_true=true;
                        if(nameFlag==true && pwdFlag==true && rePwdFlag==true && termFlag==true && validCodeFlag==true && emailFlag==true){
                            $scope.successFlag=false;

                            reg_btn.css({'background':'rgba(78, 170, 57, 0.99)'});
                        }
                        name_tip.text("6~18个字符，可使用字母、数字、下划线，需以字母开头").css({'color': '#ccc'});
                    }
                }).catch(function (err) { //捕捉错误处理
                console.info(err);
                alert("错误"+err);
            })};

    /*验证用户名*/
    $scope.validName=function() {
        var reg = /^[a-zA-Z]{1,}[a-zA-Z0-9_-]{5,}$/;
        if (reg.test(name.val())) {
            findUser();
        } else {
            nameFlag=false;
            $scope.name_true=false;
            if(name.val()){name_tip.text("用户名应由6~18个字符组成，可使用字母、数字、下划线，需以字母开头！").css({'color': 'red'});}
            else{name_tip.text("6~18个字符，可使用字母、数字、下划线，需以字母开头").css({'color': '#ccc'});}
            $scope.successFlag=true;

            reg_btn.css({'background':'rgba(78, 170, 57, 0.55)'});
        }
    };
        /*验证用户邮箱*/
        $scope.validEmail=function() {
            var reg = /([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})/;
            if (reg.test(email.val())) {
                findEmail();
            } else {
                emailFlag=false;
                $scope.email_true=false;
                if(email.val()){email_tip.text("邮箱不正确！").css({'color': 'red'});}
                else{email_tip.text("可以填写QQ邮箱，网易邮箱，新浪邮箱").css({'color': '#ccc'});}
                $scope.successFlag=true;

                reg_btn.css({'background':'rgba(78, 170, 57, 0.55)'});
            }
        };
        /*验证用户密码*/
        $scope.validPWD=function(){
            if(pwd.val()==""){
                pwdFlag = false;
                $scope.pwd_true=false;
                pwd_tip.text("密码由6~16个字符组成，区分大小写").css({'color': '#ccc'});
                $scope.successFlag = true;
                reg_btn.css({'background': 'rgba(78, 170, 57, 0.55)'});
             }
            else {
                if(pwd_re.val()!="") {
                    if (pwd.val() != pwd_re.val()) {
                        rePwdFlag = false;
                        $scope.repwd_true=false;
                        rePwdTip.text("两次密码输入不一致，请重新填写！").css({'color': 'red'});
                        $scope.successFlag = true;

                        reg_btn.css({'background': 'rgba(78, 170, 57, 0.55)'});
                    } else {
                        rePwdFlag = true;
                        $scope.repwd_true=true;
                        if (nameFlag == true && pwdFlag == true && rePwdFlag == true && termFlag == true && validCodeFlag == true && emailFlag==true) {
                            $scope.successFlag = false;

                            reg_btn.css({'background': 'rgba(78, 170, 57, 0.99)'});
                        }
                        rePwdTip.text("请再次填写密码").css({'color':'#ccc'});
                    }
                }
                var reg = /[a-zA-Z0-9_-]{6,16}/;
                if (!reg.test(pwd.val()))
                {
                    pwdFlag = false;
                    $scope.pwd_true=false;
                    if(pwd.val()!=""){
                        pwd_tip.text("密码由6~16个字符组成，区分大小写").css({'color': 'red'});
                    } else{
                        pwd_tip.text("密码由6~16个字符组成，区分大小写").css({'color': '#ccc'});
                    }
                    $scope.successFlag = true;
                    reg_btn.css({'background': 'rgba(78, 170, 57, 0.55)'});
                }
                else
                {
                    pwdFlag = true;
                    $scope.pwd_true=true;
                    if (nameFlag == true && pwdFlag == true && rePwdFlag == true && termFlag == true && validCodeFlag == true && emailFlag==true) {
                        $scope.successFlag = false;

                        reg_btn.css({'background': 'rgba(78, 170, 57, 0.99)'});
                    }
                    pwd_tip.text("6~16个字符，区分大小写").css({'color': '#ccc'})
                }
            }
        };
        /*验证两次输入密码一致*/
        $scope.validPWDRE=function(){
          if(pwd_re.val()!="") {

          if(pwd.val()!=pwd_re.val()){
            rePwdFlag=false;
            $scope.repwd_true=false;
            rePwdTip.text("两次密码输入不一致，请重新填写！").css({'color':'red'});
            $scope.successFlag=true;

            reg_btn.css({'background':'rgba(78, 170, 57, 0.55)'});
        }else{      rePwdFlag=true;
            $scope.repwd_true=true;
            if(nameFlag==true && pwdFlag==true && rePwdFlag==true && termFlag==true && validCodeFlag==true && emailFlag==true){
                $scope.successFlag=false;

                reg_btn.css({'background':'rgba(78, 170, 57, 0.99)'});
            }
            rePwdTip.text("请再次填写密码").css({'color':'#ccc'})}
    }
        };

        /*验证码是否正确*/
        $scope.valid_Code= function(){
          if(valid_code.val()!=""){
            if(valid_code.val().toUpperCase()==code){
                $scope.code_true=true;
                $scope.code_false=false;
                validCodeFlag=true;
                if(nameFlag==true && pwdFlag==true && rePwdFlag==true && termFlag==true && validCodeFlag==true && emailFlag==true){
                    $scope.successFlag=false;

                    reg_btn.css({'background':'rgba(78, 170, 57, 0.99)'});
                }
            }else{
                $scope.code_true=false;
                $scope.code_false=true;
                validCodeFlag=false;
                $scope.successFlag=true;

                reg_btn.css({'background':'rgba(78, 170, 57, 0.55)'});
            }}
        };

        /*验证用户是否同意条款*/
        term.on('change', function(){
            if($scope.term== true){
                termFlag=true;
                //alert(nameFlag+" "+pwdFlag+" "+rePwdFlag+" "+termFlag+" "+validCodeFlag+" "+emailFlag);
                if(nameFlag==true && pwdFlag==true && rePwdFlag==true && termFlag==true && validCodeFlag==true && emailFlag==true) {
                    $scope.successFlag=false;

                    reg_btn.css({'background':'rgba(78, 170, 57, 0.99)'});
                }
            }else{
                termFlag=false;
                $scope.successFlag=true;

                reg_btn.css({'background':'rgba(78, 170, 57, 0.55)'});
            }
        });

        /*注册提交处理*/
        $scope.reg_submit=function(){
            var newName=name.val();
            newName=filterXSS(newName);
            var newPwd=pwd.val();
            newPwd=filterXSS(newPwd);
            var newEmail=email.val();
            newEmail=filterXSS(newEmail);
            $http({url:"http://localhost:3000/reg",
                data:{name:newName,password:newPwd,email:newEmail},
                method:'POST',
                withCredentials: true
            })
                .then(function (user) {  //正确请求成功时处理
                    console.log(user.data)
                    $state.go("reg_success");
                }).catch(function (err) { //捕捉错误处理
                console.info(err);
                alert("错误"+err);
            })
        }

}]);
