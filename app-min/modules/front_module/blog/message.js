'use strict';

angular.module('myApp.myHome.messages', ['ui.router'])


    .controller('MessagesCtrl', ['$rootScope','$scope','locals','$stateParams','$state','$compile',function($rootScope,$scope,locals,$stateParams,$state,$compile) {
        $scope.userName=$stateParams.name;

    }])

     .directive('myMessages',function(){
         return{
             scope:{},
             restrict:'AE',
             template:'<div style="padding:30px;"><ul id="messages"></ul>',
             link:function($scope,elem,attr){

             },
             controller:function($scope,$element,$attrs,locals,$compile,$http,$stateParams,$timeout,$cookies){
                     $scope.needPost=false;
                     $scope.allow_show=true;
                     $scope.refuse_show=true;
                     $scope.allowed_show=false;
                     $scope.refused_show=false;
                     var messages_list=$element.find('#messages');
                     var messages=locals.getObj('messages',1000*3600*24*7);
                     $scope.allow=function(event,id){
                         $scope.allow_show=false;
                         $scope.refuse_show=false;
                         $scope.allowed_show=true;

                         var val=$(event.target).find('.allow_val');
                         val=val.val();
                         val=val.split('-');
                         var myName=val[0];
                         var name=val[1];
                         var myFriend=val[2];
                         var myMessages=val[3];
                         if(!myMessages){
                             myMessages=[];
                         }
                         myMessages=JSON.stringify(myMessages);
                         myFriend=myFriend.split(',');
                         myFriend=JSON.stringify(myFriend);
                         var friend=val[4];
                         friend=friend.split(',');
                         friend=JSON.stringify(friend);
                         //alert(friend+' '+myFriend+' '+myMessages)
                         var loginName=locals.getObj('lastName',1000*3600*24*7);
                         var cName=loginName+'yblog';
                         var token=$cookies.get(cName);
                         console.log('cookie'+token)
                         $http({url:'http://localhost:3000/up_friend',
                             data:{myName:myName,name:name,myFriend:myFriend,friend:friend,mes:myMessages,token:token},
                             method:'POST',
                             withCredentials: true
                         }).then(function(result){
                             var mes;
                             for(var i=0;i<messages.length;i++){
                                 if(messages[i].id==id){
                                     messages.splice(i,1);
                                 }
                             }
                             locals.setObj('messages',messages);
                             mes=JSON.stringify(messages);
                             $http({
                                 url:'http://localhost:3000/up_mes',
                                 data:{name:name,messages:mes,token:token},
                                 method:'POST',
                                 withCredentials: true
                             }).then(function(result){
                                 locals.set('upPost',true);
                             }).catch(function(err){
                                 console.log(err)
                             });
                         }).catch(function(err){
                             console.log(err)
                         })
                     };
                     $scope.refuse=function(event,id){
                         $scope.allow_show=false;
                         $scope.refuse_show=false;
                         $scope.refused_show=true;
                         var val=$(event.target).find('.refuse_val');
                         val=val.val();
                         val=val.split('-');
                         var myName=val[0];
                         var name=val[1];
                         var myMessages=val[2];
                         console.log(myMessages)
                         var loginName=locals.getObj('lastName',1000*3600*24*7);
                         var cName=loginName+'yblog';
                         var token=$cookies.get(cName);
                         console.log('cookie'+token)
                         if(angular.isArray(myMessages)){
                             myMessages=JSON.stringify(myMessages);
                         }else{
                             myMessages=[];
                             myMessages=JSON.stringify(myMessages);
                         }
                         $http({url:'http://localhost:3000/refused_friend',
                             params:{myName:myName,name:name,myMessages:myMessages,token:token},
                             method:'GET',
                             withCredentials: true
                         }).then(function(result){
                             var mes;
                             for(var i=0;i<messages.length;i++){
                                 if(messages[i].id==id){
                                     messages.splice(i,1);
                                 }
                             }
                             locals.setObj('messages',messages);
                             mes=JSON.stringify(messages);
                             $http({
                                 url:'http://localhost:3000/up_mes',
                                 data:{name:name,messages:mes,token:token},
                                 method:'POST',
                                 withCredentials: true
                             }).then(function(result){
                                 locals.set('upPost',true);
                             }).catch(function(err){
                                 console.log(err)
                             });
                         }).catch(function(err){
                             console.log(err)
                         })
                     };
                     $scope.delete=function(i){
                         messages=messages.splice(i,1);
                         if(i==0||i=='0'){
                             messages=[];
                         }
                         locals.setObj('messages',messages);
                         var mes=JSON.stringify(messages);
                         var name=$stateParams.name;
                         var loginName=locals.getObj('lastName',1000*3600*24*7);
                         var cName=loginName+'yblog';
                         var token=$cookies.get(cName);
                         console.log(messages)
                         $http({
                             url:'http://localhost:3000/up_mes',
                             data:{name:name,messages:mes,token:token},
                             method:'POST',
                             withCredentials: true
                         }).then(function(result){

                         }).catch(function(err){
                             console.log(err)
                         });
                         $element.find('#mes'+i+'').remove();
                     };
                     if(!messages){
                         messages=[];
                     }

                     for(var i=0;i<messages.length;i++){
                         var message;
                         var html;
                         var item;
                         message='<li id="mes'+i+'" style="border-bottom:1px solid #e7e1e6;font-size:12px;color:#9a9a9a;padding-bottom:20px;width:100%;">' +
                             '<div><p style="display:inline-block;vertical-align:top;font-size:14px;margin-bottom:20px;color:rgba(47, 54, 137, 0.83);">'+messages[i].name+'</p>' +
                             '<span ng-click="delete('+i+')"  style="width:20px;cursor:pointer;font-size:16px;height:20px;color:#c7c7c7;display:inline-block;vertical-align:top;float:right;">×</span>' +
                             '<span style="color:#3f3f3f;font-size:12px;float:right;margin-right:20px;">'+messages[i].time+'</span></div>' +
                             '<p id="message'+i+'"></p></li>';
                         message=$compile(message)($scope);
                         messages_list.append(message);
                         item=$element.find('#message'+i);
                         html=$compile(messages[i].message)($scope);
                         item.append(html);
                         messages[i].read=true;
                     }
                     //所有消息标记为已读
                     for(var j=0;j<messages.length;j++){
                         messages[j].read=true;
                     }
                     locals.setObj('messages',messages);
                         var loginName=locals.getObj('lastName',1000*3600*24*7);
                         var cName=loginName+'yblog';
                         var token=$cookies.get(cName);
                         console.log('cookie'+token)
                         locals.setObj('messages',messages);
                         var mes=JSON.stringify(messages);
                         $http({url:'http://localhost:3000/up_mes',
                             data:{name:$stateParams.name,messages:mes,token:token},
                             method:'POST',
                             withCredentials: true
                         }).then(function(result){
                             locals.set('upPost',true);
                         }).catch(function(err){
                             console.log(err)
                         })
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
                 var checkLogin=$timeout(function(){
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
                 },200);
             }
         }
     })
