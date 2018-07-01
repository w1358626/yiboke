'use strict';

angular.module('myApp.fDynamic', ['ui.router',[
        "../node_modules/ng-dialog/css/ngDialog.min.css",
        "../node_modules/ng-dialog/css/ngDialog-theme-default.min.css",
        "../node_modules/ng-dialog/js/ngDialog.min.js"
    ]])


    .controller('FDynamicCtrl', ['$rootScope','$scope','$location','$anchorScroll','locals','$http','$stateParams','$compile',function($rootScope,$scope,$location,$anchorScroll,locals,$http,$stateParams,$compile) {
        $scope.userName = $stateParams.name;
        $scope.no_article = false;
        $scope.loadedData=false;
        var friend = locals.getObj('friend', 1000 * 3600 * 24);
        var loginName = locals.getObj('lastName', 1000 * 3600 * 24);
        var articleList = angular.element(document.querySelectorAll('#article_list'));
        if(!angular.isArray(friend)){
            friend=[];
        }
    
          var loadcanvas=function(){
                var $ = window.__dollar || window.jQuery;
                 var imglength = $(".article_content").find("canvas").length;
            if (imglength > 0) {
                $(".article_content").find("canvas").each(function () {
                    var imgSrc = $(this).data("src");
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
                        imageObj.src = imgSrc;
                    }
                })
            }
                }

        var permission=function(){
            //权限管理
            var permission = locals.getObj('permission', 1000 * 3600 * 24);
            if (loginName == (null || undefined || '') && permission.dynamic != 'all') {
                $state.go('notLogin', {name: $stateParams.name})
            }
            var isFans = false, isFriend = false;
            if (loginName != $stateParams.name) {//不是博主就判断访问权限
                if (permission.dynamic == 'fans') {
                    var fans = locals.getObj('fans', 1000 * 3600 * 24);
                    if (!fans) {
                        fans = [];
                    } else {
                        for (var i = 0; i < fans.length; i++) {
                            if (fans[i].name == loginName) {
                                isFans = true;
                            }
                        }
                    }
                    if (!isFans) {
                        $state.go('notPerm', {name: $stateParams.name})
                    }
                }
                if (permission.dynamic == 'friend') {
                    if (!friend) {
                        friend = [];
                    } else {
                        for (var j = 0; j < friend.length; j++) {
                            if (friend[j] == loginName) {
                                isFriend = true;
                            }
                        }
                    }
                    if (!isFriend) {
                        $state.go('notPerm', {name: $stateParams.name})
                    }
                }
                if (permission.dynamic == 'private') {
                    $state.go('notPerm', {name: $stateParams.name})
                }
            }
        };
        //主要交互逻辑
        var friendList=function(){
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
            //好友列表
            $scope.ffans = locals.getObj('fans', 1000 * 3600 * 24);
            $scope.ffocus = locals.getObj('focus', 1000 * 3600 * 24);
            $scope.ffriend = locals.getObj('friend', 1000 * 3600 * 24);
            $scope.focus_on = true;
            $scope.focus_off = false;
            $scope.fans_on = false;
            $scope.fans_off = true;
            $scope.friend_on = false;
            $scope.friend_off = true;
            $scope.myFriends = locals.getObj('focus', 1000 * 3600 * 24);
            $scope.getFans = function () {
                $scope.myFriends = locals.getObj('fans', 1000 * 3600 * 24);
                $scope.fans_on = true;
                $scope.fans_off = false;
                $scope.focus_on = false;
                $scope.focus_off = true;
                $scope.friend_on = false;
                $scope.friend_off = true;
            };
            $scope.getFocus = function () {
                $scope.myFriends = locals.getObj('focus', 1000 * 3600 * 24);
                $scope.focus_on = true;
                $scope.focus_off = false;
                $scope.fans_on = false;
                $scope.fans_off = true;
                $scope.friend_on = false;
                $scope.friend_off = true;
            };
            $scope.getFriend = function () {
                var friends = locals.getObj('friend', 1000 * 3600 * 24);
                friends = JSON.stringify(friends);
                $http({
                    url: 'http://localhost:3000/friend_head',
                    data: {friends: friends},
                    method: 'POST',
                    withCredentials: true
                }).then(function (result) {
                    $scope.myFriends = result.data;
                    console.log(result.data)
                    $scope.focus_on = false;
                    $scope.focus_off = true;
                    $scope.fans_on = false;
                    $scope.fans_off = true;
                    $scope.friend_on = true;
                    $scope.friend_off = false;
                }).catch(function (err) {
                    console.log(err)
                });
            };
        };
        //数据绑定
        var bindData = function (friendPosts) {
              $(window).scroll(function(){
            var blogRight=angular.element(document.querySelector('#fDynamic_right'));
            if($(window).scrollTop()>=800){
                blogRight.css({'position':'fixed','top':'-550px'});
            }else{
                blogRight.css({'position':'relative','top':'0'});
            }
        });

            var lastPosts = [];
            var posts = friendPosts;
            var date = new Date();
            var current = date.getTime();
            //遍历发布3天内的文章
            for (var i = 0; i < posts.length; i++) {
                var time = Number(posts[i].postId);
                if ((current - time) < 1000 * 3600 * 24 * 10000) {
                    lastPosts.push(posts[i]);
                }
            }
            console.log(lastPosts)
            //获取文章列表需要的信息
            for (var j = 0; j < lastPosts.length; j++) {
                var div = document.createElement('div');
                div.innerHTML = lastPosts[j].article;
                var p = div.getElementsByTagName('p');
                var img = div.getElementsByTagName('img');
                $scope.name = lastPosts[j].name;
                var postTime = lastPosts[j].time;
                var count = lastPosts[j].countClick;
                $scope.id = lastPosts[j].postId;
                var comments = lastPosts[j].comments;
                var title = lastPosts[j].title;
                var html = '<li class="article">'
                    + '<a  style="cursor:pointer;"><div class="article_title" ><h4  id="title' + j + '" >' + title + '</h4></div>'
                    + '<div id="p' + j + '" class="article_content"></div>'
                    + '<p class="ellipsis">…</p>'
                    + '</a>'
                    + '<div class="pub_time"><span>' + postTime + '</span><span> 阅读（' + count + '）</span><span><a  style="cursor:pointer;"> 评论（' + comments.length + '）</a></span><p  ui-sref="logDetail({postId:&#39;{{id}}&#39;,name:&#39;' + $scope.name + '&#39;})" class="complete"><a  style="cursor:pointer;">阅读全文 》</a></p></div>'
                    + '<div><a  style="cursor:pointer;"><p class="author"  ui-sref="showInfo({name:&#39;{{name}}&#39;})"><span>作者：</span>' + $scope.name + '</p></a></div>'
                    + '</li>';
                html = $compile(html)($scope);
                articleList.append(html);
                var content = angular.element(document.querySelectorAll('#p' + j + ''));
                var h4 = angular.element(document.querySelectorAll('#title' + j + ''));
                if (p.length > 0) {
                    var p_img = p[0].getElementsByTagName('img');
                    if(p_img.length>0){
                        p[0].remove(p_img);
                    }
                }
                if(img.length>0){
                 var datasrc=img[0].getAttribute('src');
                 content.append('<canvas data-src="'+datasrc+'"></canvas>');
                }
                      var countp='';
                for(var i=0;i<p.length;i++){
                  countp+=p[i];
                  if(countp.length<200){
                      if(p[i].innerHTML.match('<br>')){
                      continue;
                      }else{
                      content.append(p[i]);
                      }
                    }
                

                }

                var num = 0;
                var reg = /[a-zA-Z0-9-_^~%&'.,;=?$\x22\s]/;
                for (var k = 0; k < title.length; k++) {
                    if (reg.test(title[k])) {
                        num++;
                    }
                }
                var titleWidth = 17 * (title.length - num) + num * 9;
                h4.css({'width': titleWidth + 'px', 'margin': '20px auto'});
            }
            loadcanvas();
        };
        //分页功能
        var page=1;
        $scope.noMore_show=false;
        $scope.pageShow=false;
        $scope.nextPage=function(){
            var myFriend=JSON.stringify(friend);
            page++;
            $http({url:'http://localhost:3000/wantPosts',
                method:'GET',
                params: {friend:myFriend,page:page}
            }).then(function(result){
                if(result.data.length<1){
                    $scope.pageShow=false;
                    $scope.noMore_show=true;
                }else{
                      $location.hash('article_list');
                $anchorScroll();
                    articleList.empty();
                    bindData(result.data)
                }
            }).catch(function(err){
                console.log(err)
            })
        };
        $scope.prePage=function(){
            var myFriend=JSON.stringify(friend);
            page--;
            $http({url:'http://localhost:3000/wantPosts',
                params: {friend:myFriend,page:page},
                method:'GET'
            }).then(function(result){
                  $location.hash('article_list');
                $anchorScroll();
                articleList.empty();
                bindData(result.data)
            }).catch(function(err){
                console.log(err)
            })
        };
        //缓存数据
        var keepData=function(user,typePosts,topPosts){
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
            //本地缓存文章type_posts  top posts
            locals.set('countPosts', typePosts.length);
            locals.setObj('typePosts', typePosts);
            locals.setObj('topPosts', topPosts);
        };
        var newData=function(){
                $http({ url: 'http://localhost:3000/fPosts',
                    data: {type: 'friend', name: $stateParams.name},
                    method: 'POST',
                    withCredentials: true
                }).then(function (result) {
                    var user = result.data.user;
                    var typePosts = result.data.typePosts;
                    var topPosts = result.data.topPosts;
                    var friendPosts ={name:$stateParams.name,posts:result.data.friendPosts};
                    locals.setObj('currentUser', user);
                    locals.setObj('friendPosts', friendPosts);
                    keepData(user,typePosts,topPosts);
                    $scope.loadedData=true;
                    permission();
                    friendList();
                    if(friendPosts.posts.length<1){
                      $scope.no_article=true;
                    }else{
                      bindData(friendPosts.posts);
                    }
                    if(friendPosts.posts.length==3){
                        $scope.pageShow=true;
                    }
                }).catch(function (err) {
                    console.log(err)
                })
            }
        //博友动态
        $scope.posts = [];
        var stateName = locals.getObj('stateName', 1000 * 3600 * 24);
        if (stateName != $stateParams.name || locals.get('upPost')||locals.getObj('friendPosts',1000*3600*24)==false){

                        newData();

            } else {
               if(friend.length<1){
                   $scope.no_article=true;
                   console.log('no article')
                   permission();
                   friendList();
                   $scope.loadedData=true;
               }else {
                   var friendPosts = locals.getObj('friendPosts', 1000 * 3600 * 24 * 3);
                   if (friendPosts.posts.length == 3) {
                       $scope.pageShow = true;
                   }
                   permission();
                   $scope.loadedData=true;
                   if (friendPosts.name == $stateParams.name) {
                       bindData(friendPosts.posts);
                       $scope.loadedData=true;
                       friendList();
                   } else {
                       newData()
                   }
               }
            }

    }]);
