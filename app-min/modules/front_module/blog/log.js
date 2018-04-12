'use strict';

angular.module('myApp.log', ['ui.router','ngCookies',[
        "node_modules/ng-dialog/css/ngDialog.min.css",
        "node_modules/ng-dialog/css/ngDialog-theme-default.min.css",
        "node_modules/ng-dialog/js/ngDialog.min.js",
        "bower_components/angular-file-upload/dist/angular-file-upload.min.js"
    ]])


    .controller('LogCtrl', ['$scope','$rootScope','locals','$stateParams','$compile','$http','$state','FileUploader','ngDialog','$cookies',function($scope,$rootScope,locals,$stateParams,$compile,$http,$state,FileUploader,ngDialog,$cookies) {

        $scope.upVideo_show=false;
        $scope.userName=$stateParams.name;
        $scope.showUpVideo=function(){
            $scope.upVideo_show=!$scope.upVideo_show;
        };
        $scope.videoDes='';
        var labels=[];
        $scope.host_show=false;
        $scope.videoDiv_show=true;
        $scope.screenImg_show=false;
        $scope.screenImg='images/head.jpg';
        $scope.label_culture=false;$scope.label_art=false;$scope.label_car=false;$scope.label_science=false;
        $scope.label_entertainment=false;$scope.label_finance=false;$scope.label_current=false;$scope.label_video=false;
        $scope.label_health=false;$scope.label_travel=false;$scope.label_sports=false;$scope.label_life=false;$scope.label_fashion=false;
        var articleList=angular.element(document.querySelectorAll('#article_list'));
        if(locals.get('isHost')){
            $scope.host_show=true;
        }
        //angular-file-uploader初始化
        var uploader = $scope.uploader = new FileUploader({
            url: 'http://www.yblog.site:6000/upload'
        });
        // a sync filter
        uploader.filters.push({
            name: 'syncFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                console.log('syncFilter');
                return this.queue.length < 10;
            }
        });
        // an async filter
        uploader.filters.push({
            name: 'asyncFilter',
            fn: function(item /*{File|FileLikeObject}*/, options, deferred) {
                console.log('asyncFilter');
                setTimeout(deferred.resolve, 1e3);
            }
        });
        //ngDialog初始化
        $scope.upVideoTip = function () {
            ngDialog.open({
                template: 'directives/upVideoTip.html',
                className:'ngdialog-theme-default',
                controller:function($scope){
                    $scope.show = function(){
                        $scope.closeThisDialog(); //关闭弹窗
                    }
                    var close=setTimeout(function(){
                        $scope.show();
                    },1500)
                }
            });
        };
        $scope.upVideo=function(){
            var labelChange=function(){
                labels=[];
                if($scope.label_zixun){labels.push("资讯");}
                if($scope.label_yule){labels.push("娱乐");}
                if($scope.label_car){labels.push("汽车");}
                if($scope.label_sports){labels.push("体育");}
                if($scope.label_live){labels.push("生活");}
                if($scope.label_health){labels.push("健康");}
                if($scope.label_art){labels.push("艺术");}
                if($scope.label_video){labels.push("短视频");}
                console.log(labels)
            };
            labelChange();
            if($scope.videoDes!='' && labels.length!=[]){
                uploader.uploadAll();

            }else{
               $scope.upVideoTip()
            }
        };
        //进度条显示
        uploader.onBeforeUploadItem = function(item) {
            $scope.progress_show=true;
        };
        //视频上传结果处理
        uploader.onSuccessItem = function(fileItem, response, status, headers) {
            console.log(response)
            $scope.progress_show=false;//隐藏进度条
            var type = '';
            var videoUrl = '';
            if (response != "not allowed") {
                $scope.videoDiv_show = false;
                $scope.screenImg_show = true;
                $scope.screenImg = response[0].image;
                videoUrl = response[0].video;
                type = response[0].type;
                var video = {
                    name: $stateParams.name,
                    des: $scope.videoDes,
                    url: videoUrl,
                    label1: labels[0],
                    label2: labels[1],
                    label3: labels[2],
                    type: type,
                    image: response[0].image
                };
                $scope.videoType = video.type;
                $scope.videoUrl = video.url.split('/');
                $scope.videoUrl = $scope.videoUrl[$scope.videoUrl.length - 1];
                var videoImg = angular.element(document.querySelectorAll('#videoImg'));
                var screenImg = angular.element(document.querySelectorAll('#screenImg'));
                if (videoImg.length == 0) {
                    var img = '<img id="videoImg" ui-sref="myVideo({name:&#39;{{userName}}&#39;,videoUrl:&#39;{{videoUrl}}&#39;,videoType:&#39;{{videoType}}&#39;,title:&#39;' + video.des + '&#39;})" style="width:220px;height:120px;" ng-show="screenImg_show"  src="{{screenImg}}"/>'
                    img = $compile(img)($scope);
                    screenImg.append(img);
                }
                console.log($scope.videoUrl)
                video = JSON.stringify(video);
                var loginName=locals.getObj('lastName',1000*3600*24*7);
                var cName=loginName+'yblog';
                var token=$cookies.get(cName);
                console.log('cookie'+token)
                $http({
                    url: 'http://www.yblog.site:3000/upVideo',//更新此用户videos字段
                    method: 'POST',
                    data: {video: video,token:token},
                    withCredentials: true
                }).then(function (result) {

                }).catch(function (err) {
                    console.log(err)
                });
            }
        };
        var cName=$stateParams.name+'yblog';
        var token=$cookies.get(cName);
        console.log('cookie'+token)

        var permission=function(){
            //权限管理
            var permission=locals.getObj('permission',1000*3600*24);
            var loginName=locals.getObj('lastName',1000*3600*24);
            if(loginName==(null||undefined||'')&&permission.logs!='all'){
                $state.go('notLogin',{name:$stateParams.name})
            }
            var isFans=false,isFriend=false;
            if(loginName!=$stateParams.name){//不是博主就判断访问权限
                if(permission.logs=='fans'){
                    var fans=locals.getObj('fans',1000*3600*24);
                    if(!fans){
                        fans=[];
                    }else{
                        for(var i=0;i<fans.length;i++){
                            if(fans[i].name==loginName){
                                isFans=true;
                            }
                        }
                    }
                    if(!isFans){
                        $state.go('notPerm',{name:$stateParams.name})
                    }
                }
                if(permission.logs=='friend'){
                    var friend=locals.getObj('friend',1000*3600*24);
                    if(!friend){
                        friend=[];
                    }else{
                        for(var j=0;j<friend.length;j++){
                            if(friend[j]==loginName){
                                isFriend=true;
                            }
                        }
                    }
                    if(!isFriend){
                        $state.go('notPerm',{name:$stateParams.name})
                    }
                }
                if(permission.logs=='private'){
                    $state.go('notPerm',{name:$stateParams.name})
                }
            }
        };

        //主要交互逻辑
        var bindData=function(myPosts){
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
            var lastPosts=[];
            var posts=myPosts;
            if(posts.length>0) {
                var date = new Date();
                var current = date.getTime();
                //遍历发布3天内的文章
                for (var i = 0; i < posts.length; i++) {
                    var time = Number(posts[i].postId);
                    if ((current - time) < 1000 * 3600 * 24 * 100) {
                        lastPosts.push(posts[i]);
                    }
                }
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
                        + '<div class="pub_time"><span>' + postTime + '</span><span> 阅读（' + count + '）</span><span><a  style="cursor:pointer;"> 评论（' + comments.length + '）</a></span><p  ui-sref="logDetail({postId:&#39;{{id}}&#39;,name:&#39;{{name}}&#39;})" class="complete"><a  style="cursor:pointer;">阅读全文 》</a></p></div>'
                        + '<div><a  style="cursor:pointer;"><p class="author"  ui-sref="showInfo({name:&#39;{{name}}&#39;})"><span>作者：</span>' + $scope.name + '</p></a></div>'
                        + '</li>';
                    html = $compile(html)($scope);
                    articleList.append(html);
                    var content = angular.element(document.querySelectorAll('#p' + j + ''));
                    var h4 = angular.element(document.querySelectorAll('#title' + j + ''));
                    if (p.length>0) {
                        var p_img = p[0].getElementsByTagName('img');
                        if(p_img.length>0){
                            p[0].remove(p_img);
                        }
                    }
                    for(var c=0;c< p.length;c++){
                        var text=p[c]+'';
                        if(text=='<p>&nbsp;</p>'){
                            text=''
                        }else{
                            content.append(p[c]);
                            break;
                        }
                    }
                    content.append(img[0]);
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
            }else{
                $scope.no_article=true;
            }
        };
        window.onunload=function(){//刷新时更新数据
            locals.set('upPost',true);
        };
        var newData=function(){
            $http({url:'http://www.yblog.site:3000/fPosts',
                data:{name:$stateParams.name,friends:myself},
                method:'POST',
                withCredentials: true
            }).then(function(result){
                var user=result.data.user;
                var myPosts=result.data.friendPosts;
                var typePosts=result.data.typePosts;
                var topPosts=result.data.topPosts;
                locals.setObj('myPosts',myPosts);
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
                locals.set('countPosts',typePosts.length);
                locals.setObj('typePosts',typePosts);
                locals.setObj('topPosts',topPosts);
                permission();
                bindData(myPosts);
            }).catch(function(err){
                console.log(err)
            });
        };
        //获取数据
        var myself=[$stateParams.name];
        myself=JSON.stringify(myself);
        var stateName=locals.getObj('stateName',1000*3600*24);
        if(stateName!=$stateParams.name||locals.get('upPost')||locals.getObj('myPosts',1000*3600)==false){
                newData();
           }else{
                var myPosts=locals.getObj('myPosts',1000*3600*24*3);
                permission();
                if(myPosts[0].name==$stateParams.name){
                    bindData(myPosts);
                }else{
                   newData()
            }
            }

    }])
