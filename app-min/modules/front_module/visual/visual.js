/**
 * Created by Administrator on 2017/5/19.
 */
'use strict';

angular.module('myApp.visual', ['ui.router',[
        "node_modules/flv.js/dist/flv.min.js"
]])


    .controller('VisualCtrl', ['$rootScope','$scope','locals','$state','$stateParams','$http','$compile','$location','$anchorScroll',function($rootScope,$scope,locals,$state,$stateParams,$http,$compile,$location,$anchorScroll) {

        $scope.zhixun=function(){
            $location.hash('zixun');
            $anchorScroll();
        };
        $scope.yule=function(){
            $location.hash('yule');
            $anchorScroll();
        };
        $scope.car=function(){
            $location.hash('car');
            $anchorScroll();
        };
        $scope.sports=function(){
            $location.hash('sports');
            $anchorScroll();
        };
        $scope.live=function(){
            $location.hash('live');
            $anchorScroll();
        };
        $scope.health=function(){
            $location.hash('health');
            $anchorScroll();
        };
        $scope.art=function(){
            $location.hash('art');
            $anchorScroll();
        };
        $scope.video=function(){
            $location.hash('video');
            $anchorScroll();
        };
        $scope.backTop=function(){
            $location.hash('top');
            $anchorScroll();
        };
        //获取视频及用户登录数据
            if(locals.getObj('allVideos',1000*3600*24*3)){
                var videos=locals.getObj('allVideos',1000*3600*24*3);
                var visual=locals.getObj('allVisual',1000*3600*24*3);
                var zixunV=[],yuleV=[],carV=[],sportsV=[],
                    liveV=[],healthV=[],artV=[],videoV=[];
                for(var i=0;i<videos.length;i++){
                    if(videos[i].label1=='资讯'||videos[i].label2=='资讯'||videos[i].label3=='资讯'){
                        zixunV.push(videos[i])
                    }
                    if(videos[i].label1=='娱乐'||videos[i].label2=='娱乐'||videos[i].label3=='娱乐'){
                        yuleV.push(videos[i])
                    }
                    if(videos[i].label1=='汽车'||videos[i].label2=='汽车'||videos[i].label3=='汽车'){
                        carV.push(videos[i])
                    }
                    if(videos[i].label1=='体育'||videos[i].label2=='体育'||videos[i].label3=='体育'){
                        sportsV.push(videos[i])
                    }
                    if(videos[i].label1=='生活'||videos[i].label2=='生活'||videos[i].label3=='生活'){
                        liveV.push(videos[i])
                    }
                    if(videos[i].label1=='健康'||videos[i].label2=='健康'||videos[i].label3=='健康'){
                        healthV.push(videos[i])
                    }
                    if(videos[i].label1=='艺术'||videos[i].label2=='艺术'||videos[i].label3=='艺术'){
                        artV.push(videos[i])
                    }
                    if(videos[i].label1=='短视频'||videos[i].label2=='短视频'||videos[i].label3=='短视频'){
                        videoV.push(videos[i])
                    }
                }
                console.log(yuleV)
                var type,url;
                type=visual[0].type;
                url=visual[0].url;
                $scope.videoTitle=visual[0].title;
                //加载视频
                if (flvjs.isSupported()) {
                    if ($stateParams.videoUrl!='default') {
                        type = $stateParams.videoType;
                        url = 'http://localhost:8000/videos/' + $stateParams.videoUrl;
                        $scope.videoTitle= $stateParams.title;
                    }
                    var flvPlayer = flvjs.createPlayer({
                        type: type,
                        url: url
                    });
                    flvPlayer.attachMediaElement(videoElement);
                    flvPlayer.load(); //加载
                }
                var zixunUl=angular.element(document.querySelectorAll('#zixun_ul'));
                var yuleUl=angular.element(document.querySelectorAll('#yule_ul'));
                var carUl=angular.element(document.querySelectorAll('#car_ul'));
                var sportsUl=angular.element(document.querySelectorAll('#sports_ul'));
                var liveUl=angular.element(document.querySelectorAll('#live_ul'));
                var artUl=angular.element(document.querySelectorAll('#art_ul'));
                var healthUl=angular.element(document.querySelectorAll('#health_ul'));
                var videoUl=angular.element(document.querySelectorAll('#video_ul'));
                var visualUl=angular.element(document.querySelectorAll('#visual_ul'));
                //遍历视频分类列表
                $scope.noMore_show=false;$scope.loadVideo_show=true;
                $scope.noMore1_show=false;$scope.loadVideo1_show=true;
                $scope.noMore2_show=false;$scope.loadVideo2_show=true;
                $scope.noMore3_show=false;$scope.loadVideo3_show=true;
                $scope.noMore4_show=false;$scope.loadVideo4_show=true;
                $scope.noMore5_show=false;$scope.loadVideo5_show=true;
                $scope.noMore6_show=false;$scope.loadVideo6_show=true;
                $scope.noMore7_show=false;$scope.loadVideo7_show=true;
                var countZixun= 0,countYule= 0,countCar= 0,countSports= 0,
                    countLive= 0,countArt=0,countHealth= 0,countVideo;
                var zixunLoad=function(){
                    for(var j=0;j<8;j++){
                        countZixun++;
                        if(countZixun>=zixunV.length){
                            $scope.noMore_show=true;$scope.loadVideo_show=false;
                            return ''
                        }
                        var url1=zixunV[countZixun].url;
                        url1=url1.split('/');
                        url1=url1[url1.length-1];
                        var video='<li ng-click="backTop()" ui-sref="visual({name:&#39;'+zixunV[countZixun].name+'&#39;,videoUrl:&#39;'+url1+'&#39;,videoType:&#39;'+zixunV[countZixun].type+'&#39;,title:&#39;'+zixunV[countZixun].des+'&#39;})" >'
                            +'<div>'
                            +'<img class="videoListImg" src="'+zixunV[countZixun].image+'"/>'
                            +'<p class="video_title">'+zixunV[countZixun].des+'</p>'
                            +'</div>'
                            +'</li>';
                        video=$compile(video)($scope);
                        zixunUl.append(video);
                    }
                };
                zixunLoad();
                $scope.loadZixun=function(){
                    zixunLoad();
                }
                var yuleLoad=function(){
                    for(var k=0;k<8;k++){
                        countYule++;
                        if(countYule>=yuleV.length){
                            $scope.noMore1_show=true;$scope.loadVideo1_show=false;
                            return ''
                        }
                        var url2=yuleV[countYule].url;
                        url2=url2.split('/');
                        url2=url2[url2.length-1];
                        var video1='<li ng-click="backTop()"  ui-sref="visual({name:&#39;'+yuleV[countYule].name+'&#39;,videoUrl:&#39;'+url2+'&#39;,videoType:&#39;'+yuleV[countYule].type+'&#39;,title:&#39;'+yuleV[countYule].des+'&#39;})" >'
                            +'<div>'
                            +'<img class="videoListImg" src="'+yuleV[countYule].image+'"/>'
                            +'<p class="video_title">'+yuleV[countYule].des+'</p>'
                            +'</div>'
                            +'</li>';
                        video1=$compile(video1)($scope);
                        yuleUl.append(video1);
                    }
                };
                yuleLoad();
                $scope.loadYule=function(){
                    yuleLoad();
                };
                var carLoad=function(){
                    for(var u=0;u<8;u++){
                        countCar++;
                        if(countCar>=carV.length){
                            $scope.noMore2_show=true;$scope.loadVideo2_show=false;
                            return ''
                        }
                        var url8=sportsV[countCar].url;
                        url8=url8.split('/');
                        url8=url8[url8.length-1];
                        var video2='<li  ng-click="backTop()" ui-sref="visual({name:&#39;'+carV[countCar].name+'&#39;,videoUrl:&#39;'+url8+'&#39;,videoType:&#39;'+carV[countCar].type+'&#39;,title:&#39;'+carV[countCar].des+'&#39;})" >'
                            +'<div>'
                            +'<img class="videoListImg" src="'+carV[countCar].image+'"/>'
                            +'<p class="video_title">'+carV[countCar].des+'</p>'
                            +'</div>'
                            +'</li>';
                        video2=$compile(video2)($scope);
                        carUl.append(video2);
                    }
                };
                carLoad();
                $scope.loadCar=function(){
                    carLoad();
                };
                var sportsLoad=function(){
                    for(var o=0;o<8;o++){
                        countSports++;
                        if(countSports>=sportsV.length){
                            $scope.noMore3_show=true;$scope.loadVideo3_show=false;
                            return ''
                        }
                        var url3=sportsV[countSports].url;
                        url3=url3.split('/');
                        url3=url3[url3.length-1];
                        var video3='<li ng-click="backTop()"  ui-sref="visual({name:&#39;'+sportsV[countSports].name+'&#39;,videoUrl:&#39;'+url3+'&#39;,videoType:&#39;'+sportsV[countSports].type+'&#39;,title:&#39;'+sportsV[countSports].des+'&#39;})" >'
                            +'<div>'
                            +'<img class="videoListImg" src="'+sportsV[countSports].image+'"/>'
                            +'<p class="video_title">'+sportsV[countSports].des+'</p>'
                            +'</div>'
                            +'</li>';
                        video3=$compile(video3)($scope);
                        sportsUl.append(video3);
                    }
                };
                sportsLoad();
                $scope.loadSports=function(){
                    sportsLoad();
                };
                var liveLoad=function(){
                    for(var p=0;p<8;p++){
                        countLive++;
                        if(countLive>=liveV.length){
                            $scope.noMore4_show=true;$scope.loadVideo4_show=false;
                            return ''
                        }
                        var url4=liveV[countLive].url;
                        url4=url4.split('/');
                        url4=url4[url4.length-1];
                        var video4='<li ng-click="backTop()"  ui-sref="visual({name:&#39;'+liveV[countLive].name+'&#39;,videoUrl:&#39;'+url4+'&#39;,videoType:&#39;'+liveV[countLive].type+'&#39;,title:&#39;'+liveV[countLive].des+'&#39;})" >'
                            +'<div>'
                            +'<img class="videoListImg" src="'+liveV[countLive].image+'"/>'
                            +'<p class="video_title">'+liveV[countLive].des+'</p>'
                            +'</div>'
                            +'</li>';
                        video4=$compile(video4)($scope);
                        liveUl.append(video4);
                    }
                };
                liveLoad();
                $scope.loadLive=function(){
                    liveLoad();
                };
                var healthLoad=function(){
                    for(var c=0;c<8;c++){
                        countHealth++;
                        if(countHealth>=healthV.length){
                            $scope.noMore5_show=true;$scope.loadVideo5_show=false;
                            return ''
                        }
                        var url5=healthV[countHealth].url;
                        url5=url5.split('/');
                        url5=url5[url5.length-1];
                        var video5='<li ng-click="backTop()"  ui-sref="visual({name:&#39;'+healthV[countHealth].name+'&#39;,videoUrl:&#39;'+url5+'&#39;,videoType:&#39;'+healthV[countHealth].type+'&#39;,title:&#39;'+healthV[countHealth].des+'&#39;})" >'
                            +'<div>'
                            +'<img class="videoListImg" src="'+healthV[countHealth].image+'"/>'
                            +'<p class="video_title">'+healthV[countHealth].des+'</p>'
                            +'</div>'
                            +'</li>';
                        video5=$compile(video5)($scope);
                        healthUl.append(video5);
                    }
                };
                healthLoad();
                $scope.loadHealth=function(){
                    healthLoad();
                };
                var artLoad=function(){
                    for(var m=0;m<8;m++){
                        countArt++;
                        if(countArt>=artV.length){
                            $scope.noMore6_show=true;$scope.loadVideo6_show=false;
                            return ''
                        }
                        var url6=artV[countArt].url;
                        url6=url6.split('/');
                        url6=url6[url6.length-1];
                        var video6='<li ng-click="backTop()"  ui-sref="visual({name:&#39;'+artV[countArt].name+'&#39;,videoUrl:&#39;'+url6+'&#39;,videoType:&#39;'+artV[countArt].type+'&#39;,title:&#39;'+artV[countArt].des+'&#39;})" >'
                            +'<div>'
                            +'<img class="videoListImg" src="'+artV[countArt].image+'"/>'
                            +'<p class="video_title">'+artV[countArt].des+'</p>'
                            +'</div>'
                            +'</li>';
                        video6=$compile(video6)($scope);
                        artUl.append(video6);
                    }
                };
                artLoad();
                $scope.loadArt=function(){
                    artLoad();
                };
                var videoLoad=function(){
                    for(var n=0;n<8;n++){
                        countVideo++;
                        if(countVideo>=videoV.length){
                            $scope.noMore7_show=true;$scope.loadVideo7_show=false;
                            return ''
                        }
                        var url7=videoV[countVideo].url;
                        url7=url7.split('/');
                        url7=url7[url7.length-1];
                        var video7='<li ng-click="backTop()"  ui-sref="visual({name:&#39;'+videoV[countVideo].name+'&#39;,videoUrl:&#39;'+url7+'&#39;,videoType:&#39;'+videoV[countVideo].type+'&#39;,title:&#39;'+videoV[countVideo].des+'&#39;})" >'
                            +'<div>'
                            +'<img class="videoListImg" src="'+videoV[countVideo].image+'"/>'
                            +'<p class="video_title">'+videoV[countVideo].des+'</p>'
                            +'</div>'
                            +'</li>';
                        video7=$compile(video7)($scope);
                        videoUl.append(video7);
                    }
                };
                // videoLoad();
                $scope.loadVideo=function(){
                    videoLoad();
                };
                //遍历推荐视频列表'
                for(var q=0;q<visual.length;q++){
                    var url2=visual[q].url;
                    url2=url2.split('/');
                    url2=url2[url2.length-1];
                    var li='<li class="visual_item"  ui-sref="visual({name:'+'undefined'+',videoUrl:&#39;'+url2+'&#39;,videoType:&#39;'+visual[q].type+'&#39;,title:&#39;'+visual[q].title+'&#39;})" >'
                        +'<div class="video_div">'
                        +'<span ng-show="playing_show" style="color:#fff;font-size:18px;font-weight:bold;line-height:90px;"><</span>'
                        +'<div style="display:inline-block;margin-top:16px;vertical-align:top;"><img src="'+visual[q].photo+'" style="width:100px;display:inline-block;vertical-align:top;height:60px;"/></div>'
                        +'<div style="display:inline-block;vertical-align:top;margin-top:16px;"><p  class="visual_p">'+visual[q].title+'</p></div>'
                        +'</div>'
                        +'</li>';
                    li=$compile(li)($scope);
                    visualUl.append(li)
                }
            }else{
            //获取视频数据
            $http({url:'http://localhost:3000/all_videos',
                method:'GET',
                withCredentials: true
            }).then(function(result){
                if(result.data.user){
                    $scope.loginUser=result.data.user;
                }
                console.log(result.data)
                var videos=result.data.videos;
                var visual=result.data.visual;
                locals.setObj('allVideos',videos);
                locals.setObj('allVisual',visual);
                var zixunV=[],yuleV=[],carV=[],sportsV=[],
                    liveV=[],healthV=[],artV=[],videoV=[];
                for(var i=0;i<videos.length;i++){
                    if(videos[i].label1=='资讯'||videos[i].label2=='资讯'||videos[i].label3=='资讯'){
                        zixunV.push(videos[i])
                    }
                    if(videos[i].label1=='娱乐'||videos[i].label2=='娱乐'||videos[i].label3=='娱乐'){
                        yuleV.push(videos[i])
                    }
                    if(videos[i].label1=='汽车'||videos[i].label2=='汽车'||videos[i].label3=='汽车'){
                        carV.push(videos[i])
                    }
                    if(videos[i].label1=='体育'||videos[i].label2=='体育'||videos[i].label3=='体育'){
                        sportsV.push(videos[i])
                    }
                    if(videos[i].label1=='生活'||videos[i].label2=='生活'||videos[i].label3=='生活'){
                        liveV.push(videos[i])
                    }
                    if(videos[i].label1=='健康'||videos[i].label2=='健康'||videos[i].label3=='健康'){
                        healthV.push(videos[i])
                    }
                    if(videos[i].label1=='艺术'||videos[i].label2=='艺术'||videos[i].label3=='艺术'){
                        artV.push(videos[i])
                    }
                    if(videos[i].label1=='短视频'||videos[i].label2=='短视频'||videos[i].label3=='短视频'){
                        videoV.push(videos[i])
                    }
                }
                console.log(yuleV)
                var type,url;
                type=visual[0].type;
                url=visual[0].url;
                $scope.videoTitle=visual[0].title;
                //加载视频
                if (flvjs.isSupported()) {
                    if ($stateParams.videoUrl!='default') {
                        type = $stateParams.videoType;
                        url = 'http://localhost:8000/videos/' + $stateParams.videoUrl;
                        $scope.videoTitle= $stateParams.title;
                    }
                    var flvPlayer = flvjs.createPlayer({
                        type: type,
                        url: url
                    });
                    flvPlayer.attachMediaElement(videoElement);
                    flvPlayer.load(); //加载
                }
                var zixunUl=angular.element(document.querySelectorAll('#zixun_ul'));
                var yuleUl=angular.element(document.querySelectorAll('#yule_ul'));
                var carUl=angular.element(document.querySelectorAll('#car_ul'));
                var sportsUl=angular.element(document.querySelectorAll('#sports_ul'));
                var liveUl=angular.element(document.querySelectorAll('#live_ul'));
                var artUl=angular.element(document.querySelectorAll('#art_ul'));
                var healthUl=angular.element(document.querySelectorAll('#health_ul'));
                var videoUl=angular.element(document.querySelectorAll('#video_ul'));
                var visualUl=angular.element(document.querySelectorAll('#visual_ul'));
                //遍历视频分类列表
                $scope.noMore_show=false;$scope.loadVideo_show=true;
                $scope.noMore1_show=false;$scope.loadVideo1_show=true;
                $scope.noMore2_show=false;$scope.loadVideo2_show=true;
                $scope.noMore3_show=false;$scope.loadVideo3_show=true;
                $scope.noMore4_show=false;$scope.loadVideo4_show=true;
                $scope.noMore5_show=false;$scope.loadVideo5_show=true;
                $scope.noMore6_show=false;$scope.loadVideo6_show=true;
                $scope.noMore7_show=false;$scope.loadVideo7_show=true;
                var countZixun= 0,countYule= 0,countCar= 0,countSports= 0,
                    countLive= 0,countArt=0,countHealth= 0,countVideo;
                var zixunLoad=function(){
                    for(var j=0;j<8;j++){
                        countZixun++;
                        if(countZixun>=zixunV.length){
                            $scope.noMore_show=true;$scope.loadVideo_show=false;
                            return ''
                        }
                        var url1=zixunV[countZixun].url;
                        url1=url1.split('/');
                        url1=url1[url1.length-1];
                        var video='<li ng-click="backTop()" ui-sref="visual({name:&#39;'+zixunV[countZixun].name+'&#39;,videoUrl:&#39;'+url1+'&#39;,videoType:&#39;'+zixunV[countZixun].type+'&#39;,title:&#39;'+zixunV[countZixun].des+'&#39;})" >'
                            +'<div>'
                            +'<img class="videoListImg" src="'+zixunV[countZixun].image+'"/>'
                            +'<p class="video_title">'+zixunV[countZixun].des+'</p>'
                            +'</div>'
                            +'</li>';
                        video=$compile(video)($scope);
                        zixunUl.append(video);
                    }
                };
                zixunLoad();
                $scope.loadZixun=function(){
                    zixunLoad();
                }
                var yuleLoad=function(){
                    for(var k=0;k<8;k++){
                        countYule++;
                        if(countYule>=yuleV.length){
                            $scope.noMore1_show=true;$scope.loadVideo1_show=false;
                            return ''
                        }
                        var url2=yuleV[countYule].url;
                        url2=url2.split('/');
                        url2=url2[url2.length-1];
                        var video1='<li ng-click="backTop()"  ui-sref="visual({name:&#39;'+yuleV[countYule].name+'&#39;,videoUrl:&#39;'+url2+'&#39;,videoType:&#39;'+yuleV[countYule].type+'&#39;,title:&#39;'+yuleV[countYule].des+'&#39;})" >'
                            +'<div>'
                            +'<img class="videoListImg" src="'+yuleV[countYule].image+'"/>'
                            +'<p class="video_title">'+yuleV[countYule].des+'</p>'
                            +'</div>'
                            +'</li>';
                        video1=$compile(video1)($scope);
                        yuleUl.append(video1);
                    }
                };
                yuleLoad();
                $scope.loadYule=function(){
                    yuleLoad();
                };
                var carLoad=function(){
                    for(var u=0;u<8;u++){
                        countCar++;
                        if(countCar>=carV.length){
                            $scope.noMore2_show=true;$scope.loadVideo2_show=false;
                            return ''
                        }
                        var url8=sportsV[countCar].url;
                        url8=url8.split('/');
                        url8=url8[url8.length-1];
                        var video2='<li  ng-click="backTop()" ui-sref="visual({name:&#39;'+carV[countCar].name+'&#39;,videoUrl:&#39;'+url8+'&#39;,videoType:&#39;'+carV[countCar].type+'&#39;,title:&#39;'+carV[countCar].des+'&#39;})" >'
                            +'<div>'
                            +'<img class="videoListImg" src="'+carV[countCar].image+'"/>'
                            +'<p class="video_title">'+carV[countCar].des+'</p>'
                            +'</div>'
                            +'</li>';
                        video2=$compile(video2)($scope);
                        carUl.append(video2);
                    }
                };
                carLoad();
                $scope.loadCar=function(){
                    carLoad();
                };
                var sportsLoad=function(){
                    for(var o=0;o<8;o++){
                        countSports++;
                        if(countSports>=sportsV.length){
                            $scope.noMore3_show=true;$scope.loadVideo3_show=false;
                            return ''
                        }
                        var url3=sportsV[countSports].url;
                        url3=url3.split('/');
                        url3=url3[url3.length-1];
                        var video3='<li ng-click="backTop()"  ui-sref="visual({name:&#39;'+sportsV[countSports].name+'&#39;,videoUrl:&#39;'+url3+'&#39;,videoType:&#39;'+sportsV[countSports].type+'&#39;,title:&#39;'+sportsV[countSports].des+'&#39;})" >'
                            +'<div>'
                            +'<img class="videoListImg" src="'+sportsV[countSports].image+'"/>'
                            +'<p class="video_title">'+sportsV[countSports].des+'</p>'
                            +'</div>'
                            +'</li>';
                        video3=$compile(video3)($scope);
                        sportsUl.append(video3);
                    }
                };
                sportsLoad();
                $scope.loadSports=function(){
                    sportsLoad();
                };
               var liveLoad=function(){
                   for(var p=0;p<8;p++){
                       countLive++;
                       if(countLive>=liveV.length){
                           $scope.noMore4_show=true;$scope.loadVideo4_show=false;
                           return ''
                       }
                       var url4=liveV[countLive].url;
                       url4=url4.split('/');
                       url4=url4[url4.length-1];
                       var video4='<li ng-click="backTop()"  ui-sref="visual({name:&#39;'+liveV[countLive].name+'&#39;,videoUrl:&#39;'+url4+'&#39;,videoType:&#39;'+liveV[countLive].type+'&#39;,title:&#39;'+liveV[countLive].des+'&#39;})" >'
                           +'<div>'
                           +'<img class="videoListImg" src="'+liveV[countLive].image+'"/>'
                           +'<p class="video_title">'+liveV[countLive].des+'</p>'
                           +'</div>'
                           +'</li>';
                       video4=$compile(video4)($scope);
                       liveUl.append(video4);
                   }
               };
               liveLoad();
                $scope.loadLive=function(){
                    liveLoad();
                };
                var healthLoad=function(){
                    for(var c=0;c<8;c++){
                        countHealth++;
                        if(countHealth>=healthV.length){
                            $scope.noMore5_show=true;$scope.loadVideo5_show=false;
                            return ''
                        }
                        var url5=healthV[countHealth].url;
                        url5=url5.split('/');
                        url5=url5[url5.length-1];
                        var video5='<li ng-click="backTop()"  ui-sref="visual({name:&#39;'+healthV[countHealth].name+'&#39;,videoUrl:&#39;'+url5+'&#39;,videoType:&#39;'+healthV[countHealth].type+'&#39;,title:&#39;'+healthV[countHealth].des+'&#39;})" >'
                            +'<div>'
                            +'<img class="videoListImg" src="'+healthV[countHealth].image+'"/>'
                            +'<p class="video_title">'+healthV[countHealth].des+'</p>'
                            +'</div>'
                            +'</li>';
                        video5=$compile(video5)($scope);
                        healthUl.append(video5);
                    }
                };
                healthLoad();
                $scope.loadHealth=function(){
                    healthLoad();
                };
                var artLoad=function(){
                    for(var m=0;m<8;m++){
                        countArt++;
                        if(countArt>=artV.length){
                            $scope.noMore6_show=true;$scope.loadVideo6_show=false;
                            return ''
                        }
                        var url6=artV[countArt].url;
                        url6=url6.split('/');
                        url6=url6[url6.length-1];
                        var video6='<li ng-click="backTop()"  ui-sref="visual({name:&#39;'+artV[countArt].name+'&#39;,videoUrl:&#39;'+url6+'&#39;,videoType:&#39;'+artV[countArt].type+'&#39;,title:&#39;'+artV[countArt].des+'&#39;})" >'
                            +'<div>'
                            +'<img class="videoListImg" src="'+artV[countArt].image+'"/>'
                            +'<p class="video_title">'+artV[countArt].des+'</p>'
                            +'</div>'
                            +'</li>';
                        video6=$compile(video6)($scope);
                        artUl.append(video6);
                    }
                };
                artLoad();
                $scope.loadArt=function(){
                    artLoad();
                };
                var videoLoad=function(){
                    for(var n=0;n<8;n++){
                        countVideo++;
                        if(countVideo>=videoV.length){
                            $scope.noMore7_show=true;$scope.loadVideo7_show=false;
                            return ''
                        }
                        var url7=videoV[countVideo].url;
                        url7=url7.split('/');
                        url7=url7[url7.length-1];
                        var video7='<li ng-click="backTop()"  ui-sref="visual({name:&#39;'+videoV[countVideo].name+'&#39;,videoUrl:&#39;'+url7+'&#39;,videoType:&#39;'+videoV[countVideo].type+'&#39;,title:&#39;'+videoV[countVideo].des+'&#39;})" >'
                            +'<div>'
                            +'<img class="videoListImg" src="'+videoV[countVideo].image+'"/>'
                            +'<p class="video_title">'+videoV[countVideo].des+'</p>'
                            +'</div>'
                            +'</li>';
                        video7=$compile(video7)($scope);
                        videoUl.append(video7);
                    }
                };
               // videoLoad();
                $scope.loadVideo=function(){
                    videoLoad();
                };
                //遍历推荐视频列表'
                console.log(result.data)
                for(var q=0;q<visual.length;q++){
                    var url2=visual[q].url;
                    url2=url2.split('/');
                    url2=url2[url2.length-1];
                    var li='<li class="visual_item"  ui-sref="visual({name:'+'undefined'+',videoUrl:&#39;'+url2+'&#39;,videoType:&#39;'+visual[q].type+'&#39;,title:&#39;'+visual[q].title+'&#39;})" >'
                        +'<div class="video_div">'
                        +'<span ng-show="playing_show" style="color:#fff;font-size:18px;font-weight:bold;line-height:90px;"><</span>'
                        +'<div style="display:inline-block;margin-top:16px;vertical-align:top;"><img src="'+visual[q].photo+'" style="width:100px;display:inline-block;vertical-align:top;height:60px;"/></div>'
                        +'<div style="display:inline-block;vertical-align:top;margin-top:16px;"><p  class="visual_p">'+visual[q].title+'</p></div>'
                    +'</div>'
                    +'</li>';
                    li=$compile(li)($scope);
                    visualUl.append(li)
                }

            }).catch(function(err){
                console.log(err)
            })
            }

    }]);
