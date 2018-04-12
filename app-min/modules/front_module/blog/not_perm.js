'use strict';

angular.module('myApp.notPerm', ['ui.router'])


    .controller('NotPermCtrl', ['$rootScope','$scope','locals','$state','$stateParams',function($rootScope,$scope,locals,$state,$stateParams) {
        $scope.needPost=false;
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