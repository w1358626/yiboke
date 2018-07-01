'use strict';

angular.module('myApp.logDetail',['ui.router',[
        "node_modules/ng-dialog/css/ngDialog.min.css",
        "node_modules/ng-dialog/css/ngDialog-theme-default.min.css",
        "node_modules/ng-dialog/js/ngDialog.min.js"
    ]])

   .controller('LogDetailCtrl',['$scope','locals','$stateParams','$http',function($scope,locals,$stateParams,$http){

       $scope.userName=$stateParams.name;


   }])
    .directive('myComments',function(){
        return{
            restrict:'AE',
            templateUrl:'directives/comments.html',
            link:function($scope,elm,attr){

            },
            controller:function($scope,$element,$attrs,locals,$http,$compile,$stateParams,$timeout,$cookies,ngDialog,$state) {

                //文章部分
                $scope.title = '';
                $scope.cancassrc=[];
                $scope.needPost = true;
                $scope.postTime = '';
                var article_html;
                $scope.countClick = '';
                $scope.mComments = [];
                var name=$stateParams.name;
                var postId = $stateParams.postId;
                var comments_ul = $element.find('#comment_ul');
                var article = $element.find('.article_content');
                var title=$element.find('#article_title');
                //ngDialog初始化
                var commentTip = function () {
                    ngDialog.open({
                        template: 'directives/commentTip.html',
                        className:'ngdialog-theme-default',
                        //closeByEscape: true,
                        //closeByDocument:true,
                        controller:function($scope,$timeout){
                            $scope.show = function(){
                                $scope.closeThisDialog(); //关闭弹窗
                                locals.set('name','');//清空用户名，重新加载
                                $state.go('home.headline')                            }
                            var close=$timeout(function(){
                                $scope.show();
                            },1500)
                        }
                    });
                };

                  var loadcanvas=function(){
                    console.log('loadcanvas')
                    var i=0;
                var $ = window.__dollar || window.jQuery;
                 var imglength = $(".article_content").find("canvas").length;
            if (imglength > 0) {
                         console.log('canvas'+i)
                $(".article_content").find("canvas").each(function () {
                    var imgSrc = $scope.cancassrc[i];
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

                $scope.loadedData=false;
                var bindData=function(){
                    //博客描述
                    var myTitle=angular.element(document.querySelector('#blogTitle'));
                    var myDes=angular.element(document.querySelector('#blogDes'));
                    var blogDes=locals.getObj('blogDes',1000*3600*24*7);
                    var blogTitle,bDes;
                    if(blogDes.title){
                        $scope.blogTitle=blogDes.title;
                        $scope.blogDes=blogDes.des;
                        blogTitle='<span>'+$scope.blogTitle+'</span>';
                        bDes='<span>'+$scope.blogDes+'</span>';
                        myTitle.append(blogTitle);
                        myDes.append(bDes);
                    }else{
                        $scope.blogTitle=$stateParams.name+'的博客';
                        $scope.blogDes='这里是博客描述。';
                        blogTitle='<span>'+$scope.blogTitle+'</span>';
                        bDes='<span>'+$scope.blogDes+'</span>';
                        myTitle.append(blogTitle);
                        myDes.append(bDes);
                    }
                };
                console.log(postId)
                locals.set('upPost',true);
                $http({
                    url: "http://localhost:3000/post_Id",
                    params: {id: postId,name:name},
                    method: 'GET',
                    withCredentials: true
                }).then(function (result) {
                    $scope.topPosts=result.data.topPosts;
                    $scope.typePosts=result.data.posts;
                    var user=result.data.user;
                    locals.setObj('myInfo',user.myInfo);
                    locals.set('postTypes', user.postTypes);
                    locals.set('name', user.name);
                    locals.set('hostName', user.name);//别人的用户名
                    locals.setObj('fans', user.fans);
                    locals.setObj('messages',user.messages);
                    locals.setObj('focus', user.focus);
                    locals.setObj('friend',user.friend);
                    locals.setObj('blogDes',user.blogDes);
                    locals.setObj('permission',user.permissions);
                    locals.set('lastLogin', user.lastLogin);
                    locals.set('headImg', user.headImg);
                    locals.setObj('photoBooks',user.photoBooks);
                    locals.set('upPost','');//清空文章更新标志
                    locals.setObj('stateName',$stateParams.name);
                    //本地缓存文章type_posts  top posts
                        var type_posts=$scope.typePosts;
                        locals.set('countPosts',type_posts.length);
                        locals.setObj('typePosts',type_posts);
                        locals.setObj('topPosts',$scope.topPosts);
                     $(window).scroll(function(){
            var blogRight=angular.element(document.querySelector('#logDtail_right'));
            if($(window).scrollTop()>=800){
                blogRight.css({'position':'fixed','top':'-550px'});
            }else{
                blogRight.css({'position':'relative','top':'0'});
            }
        });

                    var post = result.data.post;
                    locals.setObj('currentUser',result.data.user);
                    $scope.title = post.title;
                    var num = 0;
                    $scope.loadedData=true;
                    var reg = /[a-zA-Z0-9-_^~%&'.,;=?$\x22\s]/;
                    for (var k = 0; k < $scope.title.length; k++) {
                        if (reg.test($scope.title[k])) {
                            num++;
                        }
                    }
                    var titleWidth = 17 * ($scope.title.length - num) + num * 9;
                    title.css({'width': titleWidth + 'px', 'margin': '20px auto'});
                    $scope.postTime = post.time;
                    article_html = post.article;
                    article_html=article_html.replace(/<p><br><\/p>/g,'');
                    var imgs=article_html.match(/<img\b[^>]*>/g);
                     console.log('logdetail images')
                  console.log(imgs);
                    for(var i=0;i<imgs.length;i++){
                        var divcanvas=document.createElement('div');
                        divcanvas.innerHTML=imgs[i];
                        var imgs=article_html.match(/<img\b[^>]*>/g);
                        var imgold=divcanvas.getElementsByTagName('img');
                        console.log(imgold)
                        $scope.cancassrc[i]=imgold[0].getAttribute('src');     
                    }
console.log($scope.cancassrc)
                    console.log(article_html);
                    article_html=article_html.replace(/<img\b[^>]*>/g,'<canvas data-src=""></canvas>');
                    
               
                    article.append(article_html);
                    $scope.countClick = post.countClick;
                    $scope.mComments = post.comments;
                    for (var i = 0; i < $scope.mComments.length; i++) {
                        if ($scope.mComments[i] != undefined) {
                            var html = '<li><div ui-sref="showInfo({name:&#39;'+$scope.mComments[i].name+'&#39;})><a  style="cursor:pointer;"><img style="width:20px;height:20px;border-radius:10px;" src="{{comments[' + i + '].head}}"/><p class="author" ng-bind="comments[' + i + '].name"></p></a></div><p class="comment_body" ng-bind="comments[' + i + '].content"></p></li>';
                            html = $compile(html)($scope);
                            comments_ul.append(html);
                        }
                    }
                    console.log(post)
                    bindData();
                    loadcanvas();
                });

                    //评论部分
                $scope.commentname=locals.getObj('lastName',1000*3600*24);
                $scope.commenthead=locals.get('myHead');
                $scope.myComment='我来说两句……';
                if($scope.commentname==''){
                    $scope.commentname='尚未登录…';
                    $scope.commenthead='images/noHead.png';
                }
                    $scope.postComment=function(){
                        $scope.commentname=locals.getObj('lastName',1000*3600*24);
                        $scope.commenthead=locals.get('myHead');
                        if($scope.commentname){
                        var html='<li><div ui-sref="showInfo({name:&#39;'+$scope.commentname+'&#39;})"><a  style="cursor:pointer;"><img style="width:20px;height:20px;border-radius:10px;" src="{{commenthead}}"/><p class="author" ng-bind="commentname"></p></a></div><p class="comment_body">'+$scope.myComment+'</p></li>';
                        html=$compile(html)($scope);
                        comments_ul.append(html);
                        var myComment={name:$scope.commentname,head:$scope.commenthead,content:$scope.myComment};
                        $scope.mComments.splice(0,0,myComment);
                        var comments=JSON.stringify($scope.mComments);
                        $scope.myComment="";
                        var loginName=locals.getObj('lastName',1000*3600*24*7);
                        var cName=loginName+'yblog';
                        var token=$cookies.get(cName);
                        //console.log('cookie'+token)
                        $http({
                            url:'http://localhost:3000/upComment',
                            data:{id:postId,comments:comments,token:token},
                            method:'POST',
                            withCredentials: true
                        }).then(function(result){

                        }).catch(function(err){
                            console.log(err)
                        })
                        }else{
                            commentTip()
                        }
                    };

            }
        }
    })
