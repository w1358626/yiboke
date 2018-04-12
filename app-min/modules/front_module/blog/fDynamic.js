'use strict';

angular.module('myApp.fDynamic', ['ui.router',[
        "node_modules/ng-dialog/css/ngDialog.min.css",
        "node_modules/ng-dialog/css/ngDialog-theme-default.min.css",
        "node_modules/ng-dialog/js/ngDialog.min.js"
    ]])


    .controller('FDynamicCtrl', ['$rootScope','$scope','locals','$http','$stateParams','$compile',function($rootScope,$scope,locals,$http,$stateParams,$compile) {
        $scope.userName = $stateParams.name;
        $scope.no_article = false;
        var friend = locals.getObj('friend', 1000 * 3600 * 24);
        var loginName = locals.getObj('lastName', 1000 * 3600 * 24);
        var articleList = angular.element(document.querySelectorAll('#article_list'));
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
            $scope.fans = locals.getObj('fans', 1000 * 3600 * 24);
            $scope.focus = locals.getObj('focus', 1000 * 3600 * 24);
            $scope.friend = locals.getObj('friend', 1000 * 3600 * 24);
            $scope.focus_on = true;
            $scope.focus_off = false;
            $scope.fans_on = false;
            $scope.fans_off = true;
            $scope.friend_on = false;
            $scope.friend_off = true;
            $scope.friends = locals.getObj('focus', 1000 * 3600 * 24);
            $scope.getFans = function () {
                $scope.friends = locals.getObj('fans', 1000 * 3600 * 24);
                $scope.fans_on = true;
                $scope.fans_off = false;
                $scope.focus_on = false;
                $scope.focus_off = true;
                $scope.friend_on = false;
                $scope.friend_off = true;
            };
            $scope.getFocus = function () {
                $scope.friends = locals.getObj('focus', 1000 * 3600 * 24);
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
                    url: 'http://www.yblog.site:3000/friend_head',
                    data: {friends: friends},
                    method: 'POST',
                    withCredentials: true
                }).then(function (result) {
                    $scope.friends = result.data;
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
            var lastPosts = [];
            var posts = friendPosts;
            var date = new Date();
            var current = date.getTime();
            //遍历发布3天内的文章
            for (var i = 0; i < posts.length; i++) {
                var time = Number(posts[i].postId);
                if ((current - time) < 1000 * 3600 * 24 * 100) {
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
                    + '<div class="pub_time"><span>' + postTime + '</span><span> 阅读（' + count + '）</span><span><a  style="cursor:pointer;"> 评论（' + comments.length + '）</a></span><p  ui-sref="logDetail({postId:&#39;{{id}}&#39;,name:&#39;{{userName}}&#39;})" class="complete"><a  style="cursor:pointer;">阅读全文 》</a></p></div>'
                    + '<div><a  style="cursor:pointer;"><p class="author"  ui-sref="showInfo({name:&#39;{{name}}&#39;})"><span>作者：</span>' + $scope.name + '</p></a></div>'
                    + '</li>';
                html = $compile(html)($scope);
                articleList.append(html);
                var content = angular.element(document.querySelectorAll('#p' + j + ''));
                var h4 = angular.element(document.querySelectorAll('#title' + j + ''));
                if (p.length > 0) {
                    var p_img = p[0].getElementsByTagName('img');
                    p[0].remove(p_img);
                }
                content.append(img[0]);
                content.append(p[0]);
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
        //博友动态
        $scope.posts = [];
        friend = JSON.stringify(friend);
        var stateName = locals.getObj('stateName', 1000 * 3600 * 24);
        if (stateName != $stateParams.name || locals.get('upPost')||locals.getObj('friendPosts',1000*3600*24)==false){
            if (friend.length > 0) {
                $http({
                    url: 'http://www.yblog.site:3000/fPosts',
                    data: {friends: friend, name: $stateParams.name},
                    method: 'POST',
                    withCredentials: true
                }).then(function (result) {
                    var user = result.data.user;
                    var typePosts = result.data.typePosts;
                    var topPosts = result.data.topPosts;
                    var friendPosts = result.data.friendPosts;
                    locals.setObj('currentUser', user);
                    locals.setObj('friendPosts', friendPosts);
                    keepData(user,typePosts,topPosts);
                    permission();
                    friendList();
                    bindData(friendPosts);
                }).catch(function (err) {
                    console.log(err)
                })
             }else{
                $scope.no_article=true;
                $http({url:'http://www.yblog.site:3000/userData',
                    data:{name:$stateParams.name},
                    method:'POST',
                    withCredentials: true
                }).then(function(result){
                    var user=result.data.user;
                    var typePosts=result.data.typePosts;
                    var topPosts=result.data.topPosts;
                    keepData(user,typePosts,topPosts);
                    permission();
                    friendList();
                }).catch(function(err){
                    console.log(err)
                })
               }
            } else {
                var friendPosts = locals.getObj('friendPosts', 1000 * 3600 * 24 * 3);
                permission();
                friendList();
                bindData(friendPosts);
            }

    }]);