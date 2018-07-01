'use strict';

angular.module('myApp.photos.photo', ['ui.router'])


    .controller('PhotoCtrl', ['$rootScope','$scope','locals','$stateParams','$state','$compile','$http','$cookies',function($rootScope,$scope,locals,$stateParams,$state,$compile,$http,$cookies)  {
        $scope.userName=$stateParams.name;
        $scope.photos_show=false;
        var myBook=JSON.parse($stateParams.photoBook);
        console.log(myBook.photos)
        var loginName=locals.getObj('lastName',1000*3600*24*7);
        var cName=loginName+'yblog';
        var token=$cookies.get(cName);
        console.log('cookie'+token)
        var photoList=angular.element(document.querySelectorAll('#photo_list'));
        var booksName=angular.element(document.querySelectorAll('#books_name'));
        var booksLength=angular.element(document.querySelectorAll('#books_length'));
        var delList=angular.element(document.querySelectorAll('#del_list'));
        booksName.text(myBook.name);
        booksLength.text(myBook.photos.length);
        //load canvas加载图片
          var loadcanvas=function(){
                var i=0;
                var $ = window.__dollar || window.jQuery;
                 var imglength = $("#photo_list").find("canvas").length;
            if (imglength > 0) {
                $("#photo_list").find("canvas").each(function () {
                    var imgSrc = myBook.photos[i];
                    var imageObj = new Image();
                    imageObj.canvs = $(this)[0];
                    var cvs = imageObj.canvs.getContext('2d');
                    if (cvs) {
                        imageObj.onload = function () {
                            imageObj.canvs.width = this.width;
                            imageObj.canvs.height = this.height;
                            cvs.drawImage(this, 0, 0);
                            $(imageObj.canvs).css("background-image", "none");
                        }
                        i++;
                        imageObj.src = imgSrc;
                    }
                })
            }
                }
        //删除相片
        $scope.del_show=function(){
            $scope.photos_show=!$scope.photos_show;
        };
        if(myBook.photos){
            $scope.deletePhoto=[];
            for(var j=0;j<myBook.photos.length;j++){
                $scope.deletePhoto[j]=false;
                var html='<li><img src="'+myBook.photos[j]+'"/><div><input ng-model="deletePhoto['+j+']" type="checkbox"/></div></li>';
                html=$compile(html)($scope);
                delList.append(html);
            }
        }
        var upBooks=function(){
                var photoBooks=locals.getObj('photoBooks',1000*3600*24);
                photoBooks=JSON.parse(photoBooks);
                if(!angular.isArray(photoBooks)){
                    photoBooks=[];
                }
                //更新当前相册的值
                for(var k=0;k<photoBooks.length;k++) {
                    if(photoBooks[k].name==myBook.name){
                        photoBooks[k].photos=myBook.photos;
                    }
                }
                photoBooks=JSON.stringify(photoBooks);
                //提交相册数据
                $http({url:'http://localhost:3000/upPhoto',
                    data:{name:$stateParams.name,myBooks:photoBooks,token:token},
                    method:'POST',
                    withCredentials: true
                }).then(function(result){
                       locals.set('upPost',true);
                }).catch(function(err){
                    console.log(err)
                })
        };
        $scope.delPhoto=function(){
            //删除选中的图片
            for(var j=0;j<myBook.photos.length;j++){
               if($scope.deletePhoto[j]==true) {
                   myBook.photos.splice(j,1);
                   var photo=angular.element(document.querySelectorAll('#myPhoto'+j+''));
                   photo.remove();
               }
            }
            upBooks();
            $scope.photos_show=false;
        };


        //遍历相片
        if(myBook.photos){
          for(var i=0;i<myBook.photos.length;i++){
            photoList.append('<li id="myPhoto'+i+'"><canvas ></canvas></li>')
          }
          loadcanvas();
        }
    }]);
