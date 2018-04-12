'use strict';

angular.module('myApp.myVideo', ['ui.router',[
        "node_modules/ng-dialog/css/ngDialog.min.css",
        "node_modules/ng-dialog/css/ngDialog-theme-default.min.css",
        "node_modules/ng-dialog/js/ngDialog.min.js",
        "bower_components/angular-file-upload/dist/angular-file-upload.min.js",
        "node_modules/flv.js/dist/flv.min.js"
    ]])


    .controller('MyVideoCtrl', ['$rootScope','$scope','locals','$state','$stateParams','$http','$compile','FileUploader','ngDialog','$cookies',function($rootScope,$scope,locals,$state,$stateParams,$http,$compile,FileUploader,ngDialog,$cookies) {
        $scope.userName=$stateParams.name;
        $scope.videos=[];
        var loginName=locals.getObj('lastName',1000*3600*24*7);
        var cName=loginName+'yblog';
        var token=$cookies.get(cName);
        console.log('cookie'+token)
        //加载延迟设定
        var waitTime=5;
        $scope.host_show=false;
        var stateName=locals.getObj('stateName',1000*3600*24);
        if(locals.get('isHost')){
            $scope.host_show=true;
        }
        if(stateName!=$stateParams.name||locals.get('upPost')){//访问的博客路径name改变时，需延迟加载给headBar提供请求时间
            waitTime=1000;
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
        var blogInfo=function(){
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
        }
        var start=function(){
            var type, url;
            $scope.videoDes='';
            var labels=[];
            $scope.videoDiv_show=true;
            $scope.screenImg_show=false;
            $scope.screenImg='images/head.jpg';
            $scope.label_culture=false;$scope.label_art=false;$scope.label_car=false;$scope.label_science=false;
            $scope.label_entertainment=false;$scope.label_finance=false;$scope.label_current=false;$scope.label_video=false;
            $scope.label_health=false;$scope.label_travel=false;$scope.label_sports=false;$scope.label_life=false;$scope.label_fashion=false;
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
                if($scope.videoDes!='' && labels!=[]){
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
            }

            var videoUl=angular.element(document.querySelectorAll('#videos_ul'));
            //获取视频数据
            $http({
                url: 'http://www.yblog.site:3000/videos',
                params: {name: $stateParams.name},
                method: 'GET',
                withCredentials: true
            }).then(function (result) {
                console.log(result.data)
                //视频列表分页
                if (result.data.length > 0) {
                    $scope.videos = result.data;
                    $scope.pages_show = false;
                    $scope.ellipsis_show = false;
                    type = $scope.videos[0].type;
                    url = $scope.videos[0].url;
                    $scope.videoTitle = $scope.videos[0].des;
                    for (var i = 0; i < 5; i++) {
                        if($scope.videos[i]){
                            var url1 = $scope.videos[i].url.split('/');
                            url1 = url1[url1.length - 1];
                            var video = ' <li ui-sref="myVideo({name:&#39;' + $stateParams.name + '&#39;,videoUrl:&#39;' + url1 + '&#39;,videoType:&#39;' + $scope.videos[i].type + '&#39;,title:&#39;' + $scope.videos[i].des + '&#39;})"  class="video_item">'
                                + '<div style="width:210px;padding:20px;">'
                                + '<div style="display:inline-block;vertical-align:top;" class="videoImg"><img src="' + $scope.videos[i].image + '" style="width:100px;display:inline-block;vertical-align:top;height:60px;"/></div>'
                                + '<div style="display:inline-block;vertical-align:top;"><p style="width:100px;color:#196c6e;font-size:12px;display:inline-block;vertical-align:top;line-height:20px;height:60px;overflow:hidden;">' + $scope.videos[i].des + '</p></div>'
                                + '</div>'
                                + '</li>';
                            video = $compile(video)($scope);
                            videoUl.append(video);
                        }else{
                            break;
                        }
                    }
                    var Pages = angular.element(document.querySelectorAll('#pages'));
                    var countPage, countGroup, remainder;
                    if ($scope.videos.length > 5) {
                        $scope.pages_show = true;
                        countPage = Math.floor($scope.videos.length / 5);
                        var remain=$scope.videos.length % 5;
                        if(remain>0){
                            countPage=countPage+1;
                        }
                        countGroup = Math.floor(countPage / 5);
                        remainder = countPage % 5;
                        if (remainder > 0) {
                            countGroup = countGroup + 1;
                        }
                        if (countPage > 5) {
                            $scope.ellipsis_show = true;
                            var pages = '<p ng-click="pageTo(1)" class="page_button">1</p>' +
                                '<p ng-click="pageTo(2)" class="page_button">2</p>' +
                                '<p ng-click="pageTo(3)" class="page_button">3</p>' +
                                '<p ng-click="pageTo(4)" class="page_button">4</p>' +
                                '<p ng-click="pageTo(5)" class="page_button">5</p>';
                            pages = $compile(pages)($scope);
                            Pages.append(pages);
                        } else {
                            for (var k = 0; k < countPage; k++) {
                                var target = k + 1;
                                var pages1 = '<p ng-click="pageTo(' + target + ')" class="page_button">' + target + '</p>';
                                pages1 = $compile(pages1)($scope);
                                Pages.append(pages1);
                            }
                        }
                    } else {
                        $scope.pages_show = false;
                    }
                    var currentGroup = 1;
                    $scope.nextGroup = function () {
                        currentGroup += 1;

                        if (currentGroup == countGroup && remainder > 0) {
                            Pages.empty();
                            $scope.ellipsis_show = false;
                            for (var l = 0; l < remainder; l++) {
                                var target2 = l + 1 + (currentGroup - 1) * 5;
                                var pages2 = '<p ng-click="pageTo(' + target2 + ')" class="page_button">' + target2 + '</p>';
                                pages2 = $compile(pages2)($scope);
                                Pages.append(pages2);
                            }
                        } else {
                            if(currentGroup == countGroup){
                                Pages.empty();
                                for (var k = 0; k < 5; k++) {
                                    var target = k + 1 + (currentGroup - 1) * 5;
                                    var pages1 = '<p ng-click="pageTo(' + target + ')" class="page_button">' + target + '</p>';
                                    pages1 = $compile(pages1)($scope);
                                    Pages.append(pages1);
                                }
                            }
                        }
                    };
                    $scope.preGroup = function () {
                        currentGroup -= 1;
                        if(currentGroup>0){
                            Pages.empty();
                            for (var k = 0; k < 5; k++) {
                                var target = k + 1 + (currentGroup - 1) * 5;
                                var pages1 = '<p ng-click="pageTo(' + target + ')" class="page_button">' + target + '</p>';
                                pages1 = $compile(pages1)($scope);
                                Pages.append(pages1);
                            }
                        }
                    };
                    $scope.pageTo = function (page) {
                        var start = 5 * (page - 1);
                        videoUl.empty();
                        for (var i = 0; i < 5; i++) {
                            var url1 = $scope.videos[i + start].url.split('/');
                            url1 = url1[url1.length - 1];
                            var video = ' <li ui-sref="myVideo({name:&#39;' + $stateParams.name + '&#39;,videoUrl:&#39;' + url1 + '&#39;,videoType:&#39;' + $scope.videos[i + start].type + '&#39;,title:&#39;' + $scope.videos[i + start].des + '&#39;})"  class="video_item">'
                                + '<div style="width:210px;padding:20px;">'
                                + '<div style="display:inline-block;vertical-align:top;" class="videoImg"><img src="' + $scope.videos[i + start].image + '" style="width:100px;display:inline-block;vertical-align:top;height:60px;"/></div>'
                                + '<div style="display:inline-block;vertical-align:top;"><p style="width:100px;color:#196c6e;font-size:12px;display:inline-block;vertical-align:top;line-height:20px;height:60px;overflow:hidden;">' + $scope.videos[i + start].des + '</p></div>'
                                + '</div>'
                                + '</li>';
                            video = $compile(video)($scope);
                            videoUl.append(video);
                        }
                    };
                    //加载视频
                    if (flvjs.isSupported()) {
                        if ($stateParams.videoUrl != 'default') {
                            type = $stateParams.videoType;
                            url = 'http://www.yblog.site:8000/videos/' + $stateParams.videoUrl;
                            // alert($stateParams.videoType + ' ' + $stateParams.videoUrl)
                            $scope.videoTitle = $stateParams.title;
                        }
                        var flvPlayer = flvjs.createPlayer({
                            type: type,
                            url: url
                        });
                        flvPlayer.attachMediaElement(videoElement);
                        flvPlayer.load(); //加载
                    }
                }else{
                    var title='博客视频示例';
                    var type='mp4';
                    var image='http://www.yblog.site:8000/images/1505284840782640172173.png';
                    var videoUrl='http://www.yblog.site:8000/videos/1505284840782640172173.mp4';
                    var url='1505284840782640172173.mp4';
                    $scope.videoTitle =title;
                    //加载示例视频
                    if (flvjs.isSupported()) {
                        var flvPlayer1 = flvjs.createPlayer({
                            type: 'mp4',
                            url: videoUrl
                        });
                        flvPlayer1.attachMediaElement(videoElement);
                        flvPlayer1.load(); //加载
                    }
                    //视频列表添加示例视频
                    var video3 = ' <li ui-sref="myVideo({name:&#39;' + $stateParams.name + '&#39;,videoUrl:&#39;' +url+ '&#39;,videoType:&#39;' + type + '&#39;,title:&#39;' + title + '&#39;})"  class="video_item">'
                        + '<div style="width:210px;padding:20px;">'
                        + '<div style="display:inline-block;vertical-align:top;" class="videoImg"><img src="' + image + '" style="width:100px;display:inline-block;vertical-align:top;height:60px;"/></div>'
                        + '<div style="display:inline-block;vertical-align:top;"><p style="width:100px;color:#196c6e;font-size:12px;display:inline-block;vertical-align:top;line-height:20px;height:60px;overflow:hidden;">博客视频示例</p></div>'
                        + '</div>'
                        + '</li>';
                    video3 = $compile(video3)($scope);
                    videoUl.append(video3);
                }
            }).catch(function (err) {
                console.log(err)
            });
        };
        window.onunload=function(){//刷新时更新数据
            locals.set('upPost',true);
        };
        if(stateName!=$stateParams.name||locals.get('upPost')) {
            $http({
                url: 'http://www.yblog.site:3000/userData',
                data: {name: $stateParams.name},
                method: 'POST',
                withCredentials: true
            }).then(function (result) {
                console.log(result)
                var user = result.data.user;
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
                blogInfo();
                start();
            }).catch(function (err) {
                console.log(err)
            })
        }else{
            blogInfo();
            start()
        }
    }])








