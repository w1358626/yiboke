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
         // 初始化Web Uploader
        var wuploader = WebUploader.create({

            // 选完文件后，是否自动上传。
            auto: true,

            // swf文件路径
            swf: 'bower_components/webUpload/Uploader.swf',

            // 文件接收服务端。
            server: 'http://localhost:6000/upload',

            // 选择文件的按钮。可选。
            // 内部根据当前运行是创建，可能是input元素，也可能是flash.
            pick: '#upHead',

            // 只允许选择图片文件。
            accept: {
                title: 'Images',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/*'
            }
        });
        wuploader.on( 'uploadSuccess', function( file,response ) {
            if(response!="not allowed") {
                console.log(response[0].image);
                $scope.themeImg_show=false;
                $scope.head=response[0].image;
                $http({url:'http://localhost:3000/upHead',
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
        });    
     
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
