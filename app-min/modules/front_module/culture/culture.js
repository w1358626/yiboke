/**
 * Created by Administrator on 2017/5/19.
 */
'use strict';

angular.module('myApp.culture', ['ui.router'])


    .controller('CultureCtrl', ['$rootScope','$scope','locals','$state','$stateParams','$http','$compile','$location','$anchorScroll',function($rootScope,$scope,locals,$state,$stateParams,$http,$compile,$location,$anchorScroll) {
            if(locals.getObj('culturePosts',1000*3600*24*3)){
                var posts= locals.getObj('culturePosts',1000*3600*24*3);
                var countPost=20;
                $scope.noMore_show=false;
                $scope.load_show=true;
                var ul1=angular.element(document.querySelectorAll('#artUl1'));
                var ul2=angular.element(document.querySelectorAll('#artUl2'));
                var ul3=angular.element(document.querySelectorAll('#artUl3'));
                var ul4=angular.element(document.querySelectorAll('#artUl4'));
                var div=document.createElement('div');
                for(var r=0;r<posts.length;r++){
                    if(posts[r].id!='1506311752554'){
                        div.innerHTML=posts[0].article;
                    }
                }
                $scope.closeLogin=function(){
                    $rootScope.loginShow=false;
                };
                var img=div.getElementsByTagName('img');
                console.log(posts)
                var artImg1=img[0].attributes.src.nodeValue;
                var bigImg='  <div>'
                    +'<img ui-sref="logDetail({postId:&#39;'+posts[0].postId+'&#39;,name:&#39;'+posts[0].name+'&#39;})" class="img1_blog" src="'+artImg1+'"/>'
                    +'<h1 ui-sref="logDetail({postId:&#39;'+posts[0].postId+'&#39;,name:&#39;'+posts[0].name+'&#39;})" style="overflow:hidden;width:500px;height:40px;">'+posts[0].title+'</h1>'
                    +'</div>'
                    +'<div class="img1_des"><img src="'+posts[0].head+'"/><span>阅读（'+posts[0].countClick+'）| 评论（'+posts[0].comments.length+'）</span><p>'+posts[0].time+'</p></div>'
                bigImg=$compile(bigImg)($scope);
                var BigImg=angular.element(document.querySelectorAll('.blog_big_img'));
                BigImg.append(bigImg);

                for(var i=0;i<20;i+=4) {
                    if(posts[i]){
                        if (i < 4) {
                            //ul3 append li
                            if (posts[0]) {
                                var div9 = document.createElement('div');
                                div9.innerHTML = posts[0].article;
                                var img5 = div9.getElementsByTagName('img');
                                if(img5.length>0) {
                                    var artImg6 = img5[0].attributes.src.nodeValue;
                                }
                                if (artImg6) {
                                    var li9 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[0].postId+'&#39;,name:&#39;'+posts[0].name+'&#39;})" >'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[0].title + '</h3>'
                                        + '<div class="blog_img">'
                                        + '<img  src="' + artImg6 + '"/>'
                                        + '</div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[0].countClick + '） 评论（' + posts[0].comments.length + '）</span><p>' + posts[0].time + '</p></div></div></li>'
                                    li9=$compile(li9)($scope);
                                    ul3.append(li9)
                                    artImg6=false;
                                } else {
                                    var p5 = div9.getElementsByTagName('p');
                                    p5 = p5[0].innerHTML;
                                    var li10 = ' <li style="cursor:pointer;" ui-sref="logDetail({postId:&#39;'+posts[0].postId+'&#39;,name:&#39;'+posts[0].name+'&#39;})" >'
                                        + '<h3  style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[0].title + '</h3>'
                                        + '<div class="blog_des"><p style="line-height:20px;height:100px;width:215px;overflow:hidden;">' + p5 + '</p></div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[0].countClick + '） 评论（' + posts[0].comments.length + '）</span><p>' + posts[0].time + '<</p></div></div>'
                                        + '</li>'
                                    li10=$compile(li10)($scope);
                                    ul3.append(li10)
                                }
                            }
                            //ul4 append li
                            if (posts[1]) {
                                var div11 = document.createElement('div');
                                div11.innerHTML = posts[1].article;
                                var img7 = div11.getElementsByTagName('img');
                                if(img7.length>0) {
                                    var artImg8 = img7[0].attributes.src.nodeValue;
                                }
                                if (artImg8) {
                                    var li13 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[1].postId+'&#39;,name:&#39;'+posts[1].name+'&#39;})">'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[1].title + '</h3>'
                                        + '<div class="blog_img">'
                                        + '<img src="' + artImg8 + '"/>'
                                        + '</div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[1].countClick + '） 评论（' + posts[1].comments.length + '）</span><p>' + posts[1].time + '</p></div></div></li>'
                                    li13=$compile(li13)($scope);
                                    ul4.append(li13);
                                    artImg8=false;
                                } else {
                                    var p8 = div11.getElementsByTagName('p');
                                    p8 = p8[0].innerHTML;
                                    var li14 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[1].postId+'&#39;,name:&#39;'+posts[1].name+'&#39;})".pn36>'
                                        + '<h3  style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[1].title + '</h3>'
                                        + '<div class="blog_des"><p style="line-height:20px;height:100px;width:215px;overflow:hidden;">' + p8 + '</p></div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[1].countClick + '） 评论（' + posts[1].comments.length + '）</span><p>' + posts[1].time + '<</p></div></div>'
                                        + '</li>';
                                    li14=$compile(li14)($scope);
                                    ul4.append(li14)
                                }
                            }
                            //ul3 append li
                            if (posts[2]) {
                                var div10 = document.createElement('div');
                                div10.innerHTML = posts[2].article;
                                var img6 = div10.getElementsByTagName('img');
                                if(img6.length>0) {
                                    var artImg7 = img6[0].attributes.src.nodeValue;
                                }
                                if (artImg7) {
                                    var li11 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[2].postId+'&#39;,name:&#39;'+posts[2].name+'&#39;})">'
                                        + '<h3  style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[2].title + '</h3>'
                                        + '<div class="blog_img">'
                                        + '<img src="' + artImg7 + '"/>'
                                        + '</div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[2].countClick + '） 评论（' + posts[2].comments.length + '）</span><p>' + posts[2].time + '</p></div></div></li>'
                                    li11=$compile(li11)($scope);
                                    ul3.append(li11)
                                    artImg7=false;
                                } else {
                                    var p6 = div10.getElementsByTagName('p');
                                    p6 = p6[0].innerHTML;
                                    var li12 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[2].postId+'&#39;,name:&#39;'+posts[2].name+'&#39;})">'
                                        + '<h3  style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[2].title + '</h3>'
                                        + '<div class="blog_des"><p style="line-height:20px;height:100px;width:215px;overflow:hidden;">' + p6 + '</p></div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[2].countClick + '） 评论（' + posts[2].comments.length + '）</span><p>' + posts[2].time + '<</p></div></div>'
                                        + '</li>'
                                    li12=$compile(li12)($scope);
                                    ul3.append(li12)
                                }
                            }
                            //ul4 append li
                            if (posts[3]) {
                                var div12 = document.createElement('div');
                                div12.innerHTML = posts[3].article;
                                var img8 = div12.getElementsByTagName('img');
                                if(img8.length>0) {
                                    var artImg9 = img8[0].attributes.src.nodeValue;
                                }
                                if (artImg9) {
                                    var li15 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[3].postId+'&#39;,name:&#39;'+posts[3].name+'&#39;})">'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[3].title + '</h3>'
                                        + '<div class="blog_img">'
                                        + '<img src="' + artImg9 + '"/>'
                                        + '</div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[3].countClick + '） 评论（' + posts[3].comments.length + '）</span><p>' + posts[3].time + '</p></div></div></li>'
                                    li15=$compile(li15)($scope);
                                    ul4.append(li15)
                                    artImg9=false;
                                } else {
                                    var p9 = div12.getElementsByTagName('p');
                                    p9 = p9[0].innerHTML;
                                    var li16 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[3].postId+'&#39;,name:&#39;'+posts[3].name+'&#39;})">'
                                        + '<h3  style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[3].title + '</h3>'
                                        + '<div class="blog_des"><p style="line-height:20px;height:100px;width:215px;overflow:hidden;">' + p9 + '</p></div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[3].countClick + '） 评论（' + posts[3].comments.length + '）</span><p>' + posts[3].time + '<</p></div></div>'
                                        + '</li>';
                                    li16=$compile(li16)($scope);
                                    ul4.append(li16)
                                }
                            }
                        } else {
                            //ul1 append li
                            if (posts[i]) {
                                var div1 = document.createElement('div');
                                div1.innerHTML = posts[i].article;
                                var img1 = div1.getElementsByTagName('img');
                                if(img1.length>0) {
                                    var artImg2 = img1[0].attributes.src.nodeValue;
                                }
                                if (artImg2) {
                                    var li1 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i].postId+'&#39;,name:&#39;'+posts[i].name+'&#39;})">'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i].title + '</h3>'
                                        + '<div class="blog_img">'
                                        + '<img src="' + artImg2 + '"/>'
                                        + '</div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i].countClick + '） 评论（' + posts[i].comments.length + '）</span><p>' + posts[i].time + '</p></div></div></li>'
                                    li1=$compile(li1)($scope);
                                    ul1.append(li1)
                                    artImg2=false;
                                } else {
                                    var p1 = div1.getElementsByTagName('p');
                                    p1 = p1[0].innerHTML;
                                    var li2 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i].postId+'&#39;,name:&#39;'+posts[i].name+'&#39;})">'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i].title + '</h3>'
                                        + '<div class="blog_des"><p style="line-height:20px;height:100px;width:215px;overflow:hidden;">' + p1 + '</p></div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i].countClick + '） 评论（' + posts[i].comments.length + '）</span><p>' + posts[i].time + '<</p></div></div>'
                                        + '</li>'
                                    li2=$compile(li2)($scope);
                                    ul1.append(li2)
                                }
                            }
                            //ul2 append li
                            if (posts[i + 1]) {
                                var div2 = document.createElement('div');
                                div2.innerHTML = posts[i + 1].article;
                                var img2 = div2.getElementsByTagName('img');
                                if(img2.length>0) {
                                    var artImg3 = img2[0].attributes.src.nodeValue;
                                }
                                if (artImg3) {
                                    var li3 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i+1].postId+'&#39;,name:&#39;'+posts[i+1].name+'&#39;})">'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i + 1].title + '</h3>'
                                        + '<div class="blog_img">'
                                        + '<img src="' + artImg3 + '"/>'
                                        + '</div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i + 1].countClick + '） 评论（' + posts[i + 1].comments.length + '）</span><p>' + posts[i + 1].time + '</p></div></div></li>'
                                    li3=$compile(li3)($scope);
                                    ul2.append(li3)
                                    artImg3=false;
                                } else {
                                    var p2 = div1.getElementsByTagName('p');
                                    p2 = p2[0].innerHTML;
                                    var li4 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i+1].postId+'&#39;,name:&#39;'+posts[i+1].name+'&#39;})">'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i + 1].title + '</h3>'
                                        + '<div class="blog_des"><p style="line-height:20px;height:100px;width:215px;overflow:hidden;">' + p2 + '</p></div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i + 1].countClick + '） 评论（' + posts[i + 1].comments.length + '）</span><p>' + posts[i + 1].time + '<</p></div></div>'
                                        + '</li>'
                                    li4=$compile(li4)($scope);
                                    ul2.append(li4)
                                }
                            }
                            //ul3 append li
                            if (posts[i + 2]) {
                                var div3 = document.createElement('div');
                                div3.innerHTML = posts[i + 2].article;
                                var img3 = div3.getElementsByTagName('img');
                                if(img3.length>0){
                                    var artImg4 = img3[0].attributes.src.nodeValue;
                                }
                                if (artImg4) {
                                    var li5 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i+2].postId+'&#39;,name:&#39;'+posts[i+2].name+'&#39;})">'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i + 2].title + '</h3>'
                                        + '<div class="blog_img">'
                                        + '<img src="' + artImg4 + '"/>'
                                        + '</div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i + 2].countClick + '） 评论（' + posts[i + 2].comments.length + '）</span><p>' + posts[i + 2].time + '</p></div></div></li>'
                                    li5=$compile(li5)($scope);
                                    ul3.append(li5)
                                    artImg4=false;
                                } else {
                                    var p3 = div3.getElementsByTagName('p');
                                    p3 = p3[0].innerHTML;
                                    var li6 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i+2].postId+'&#39;,name:&#39;'+posts[i+2].name+'&#39;})">'
                                        + '<h3  style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i + 2].title + '</h3>'
                                        + '<div class="blog_des"><p style="line-height:20px;height:100px;width:215px;overflow:hidden;">' + p3 + '</p></div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i + 2].countClick + '） 评论（' + posts[i + 2].comments.length + '）</span><p>' + posts[i + 2].time + '<</p></div></div>'
                                        + '</li>'
                                    li6=$compile(li6)($scope);
                                    ul3.append(li6)
                                }
                            }
                            //ul4 append li
                            if (posts[i + 3]){
                                var div4 = document.createElement('div');
                                div4.innerHTML = posts[i + 3].article;
                                var img4 = div4.getElementsByTagName('img');
                                if(img4.length>0){
                                    var artImg5 = img4[0].attributes.src.nodeValue;
                                }
                                if (artImg5) {
                                    var li7 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i+3].postId+'&#39;,name:&#39;'+posts[i+3].name+'&#39;})">'
                                        + '<h3  style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i + 3].title + '</h3>'
                                        + '<div class="blog_img">'
                                        + '<img src="' + artImg5 + '"/>'
                                        + '</div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i + 3].countClick + '） 评论（' + posts[i + 3].comments.length + '）</span><p>' + posts[i + 3].time + '</p></div></div></li>'
                                    li7=$compile(li7)($scope);
                                    ul4.append(li7)
                                    artImg5=false;
                                } else {
                                    var p4 = div4.getElementsByTagName('p');

                                    p4 = p4[0].innerHTML;
                                    var li8 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i+3].postId+'&#39;,name:&#39;'+posts[i+3].name+'&#39;})">'
                                        + '<h3  style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i + 3].title + '</h3>'
                                        + '<div class="blog_des"><p style="line-height:20px;height:100px;width:215px;overflow:hidden;">' + p4 + '</p></div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i + 3].countClick + '） 评论（' + posts[i + 3].comments.length + '）</span><p>' + posts[i + 3].time + '</p></div></div>'
                                        + '</li>'
                                    li8=$compile(li8)($scope);
                                    ul4.append(li8)
                                }
                            }
                        }
                    }else{
                        $scope.load_show=false;
                        $scope.noMore_show=true;
                    }
                }
                $scope.loadMore=function(){
                    if(posts[countPost]){
                        for(var i=countPost;i<countPost+16;i+=4){
                            //ul1 append li
                            if (posts[i]) {
                                var div1 = document.createElement('div');
                                div1.innerHTML = posts[i].article;
                                var img1 = div1.getElementsByTagName('img');
                                if(img1.length>0) {
                                    var artImg2 = img1[0].attributes.src.nodeValue;
                                }
                                if (artImg2) {
                                    var li1 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i].postId+'&#39;,name:&#39;'+posts[i].name+'&#39;})">'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i].title + '</h3>'
                                        + '<div class="blog_img">'
                                        + '<img src="' + artImg2 + '"/>'
                                        + '</div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i].countClick + '） 评论（' + posts[i].comments.length + '）</span><p>' + posts[i].time + '</p></div></div></li>'
                                    li1=$compile(li1)($scope);
                                    ul1.append(li1)
                                    artImg2=false;
                                } else {
                                    var p1 = div1.getElementsByTagName('p');
                                    p1 = p1[0].innerHTML;
                                    var li2 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i].postId+'&#39;,name:&#39;'+posts[i].name+'&#39;})">'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i].title + '</h3>'
                                        + '<div class="blog_des"><p style="line-height:20px;height:100px;width:215px;overflow:hidden;">' + p1 + '</p></div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i].countClick + '） 评论（' + posts[i].comments.length + '）</span><p>' + posts[i].time + '<</p></div></div>'
                                        + '</li>'
                                    li2=$compile(li2)($scope);
                                    ul1.append(li2)
                                }
                            }
                            //ul2 append li
                            if (posts[i + 1]) {
                                var div2 = document.createElement('div');
                                div2.innerHTML = posts[i + 1].article;
                                var img2 = div2.getElementsByTagName('img');
                                if(img2.length>0) {
                                    var artImg3 = img2[0].attributes.src.nodeValue;
                                }
                                if (artImg3) {
                                    var li3 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i+1].postId+'&#39;,name:&#39;'+posts[i+1].name+'&#39;})">'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i + 1].title + '</h3>'
                                        + '<div class="blog_img">'
                                        + '<img src="' + artImg3 + '"/>'
                                        + '</div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i + 1].countClick + '） 评论（' + posts[i + 1].comments.length + '）</span><p>' + posts[i + 1].time + '</p></div></div></li>'
                                    li3=$compile(li3)($scope);
                                    ul2.append(li3)
                                    artImg3=false;
                                } else {
                                    var p2 = div1.getElementsByTagName('p');
                                    p2 = p2[0].innerHTML;
                                    var li4 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i+1].postId+'&#39;,name:&#39;'+posts[i+1].name+'&#39;})">'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i + 1].title + '</h3>'
                                        + '<div class="blog_des"><p style="line-height:20px;height:100px;width:215px;overflow:hidden;">' + p2 + '</p></div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i + 1].countClick + '） 评论（' + posts[i + 1].comments.length + '）</span><p>' + posts[i + 1].time + '<</p></div></div>'
                                        + '</li>'
                                    li4=$compile(li4)($scope);
                                    ul2.append(li4)
                                }
                            }
                            //ul3 append li
                            if (posts[i + 2]) {
                                var div3 = document.createElement('div');
                                div3.innerHTML = posts[i + 2].article;
                                var img3 = div3.getElementsByTagName('img');
                                if(img3.length>0){
                                    var artImg4 = img3[0].attributes.src.nodeValue;
                                }
                                if (artImg4) {
                                    var li5 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i+2].postId+'&#39;,name:&#39;'+posts[i+2].name+'&#39;})">'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i + 2].title + '</h3>'
                                        + '<div class="blog_img">'
                                        + '<img src="' + artImg4 + '"/>'
                                        + '</div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i + 2].countClick + '） 评论（' + posts[i + 2].comments.length + '）</span><p>' + posts[i + 2].time + '</p></div></div></li>'
                                    li5=$compile(li5)($scope);
                                    ul3.append(li5)
                                    artImg4=false;
                                } else {
                                    var p3 = div3.getElementsByTagName('p');
                                    p3 = p3[0].innerHTML;
                                    var li6 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i+2].postId+'&#39;,name:&#39;'+posts[i+2].name+'&#39;})">'
                                        + '<h3  style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i + 2].title + '</h3>'
                                        + '<div class="blog_des"><p style="line-height:20px;height:100px;width:215px;overflow:hidden;">' + p3 + '</p></div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i + 2].countClick + '） 评论（' + posts[i + 2].comments.length + '）</span><p>' + posts[i + 2].time + '<</p></div></div>'
                                        + '</li>'
                                    li6=$compile(li6)($scope);
                                    ul3.append(li6)
                                }
                            }
                            //ul4 append li
                            if (posts[i + 3]){
                                var div4 = document.createElement('div');
                                div4.innerHTML = posts[i + 3].article;
                                var img4 = div4.getElementsByTagName('img');
                                if(img4.length>0){
                                    var artImg5 = img4[0].attributes.src.nodeValue;
                                }
                                if (artImg5) {
                                    var li7 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i+3].postId+'&#39;,name:&#39;'+posts[i+3].name+'&#39;})">'
                                        + '<h3  style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i + 3].title + '</h3>'
                                        + '<div class="blog_img">'
                                        + '<img src="' + artImg5 + '"/>'
                                        + '</div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i + 3].countClick + '） 评论（' + posts[i + 3].comments.length + '）</span><p>' + posts[i + 3].time + '</p></div></div></li>'
                                    li7=$compile(li7)($scope);
                                    ul4.append(li7)
                                    artImg5=false;
                                } else {
                                    var p4 = div4.getElementsByTagName('p');

                                    p4 = p4[0].innerHTML;
                                    var li8 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i+3].postId+'&#39;,name:&#39;'+posts[i+3].name+'&#39;})">'
                                        + '<h3  style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i + 3].title + '</h3>'
                                        + '<div class="blog_des"><p style="line-height:20px;height:100px;width:215px;overflow:hidden;">' + p4 + '</p></div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i + 3].countClick + '） 评论（' + posts[i + 3].comments.length + '）</span><p>' + posts[i + 3].time + '</p></div></div>'
                                        + '</li>'
                                    li8=$compile(li8)($scope);
                                    ul4.append(li8)
                                }
                            }
                        }
                        countPost+=16;
                    }else{
                        $scope.load_show=false;
                        $scope.noMore_show=true;
                    }
                }
            }else{
            $http({url:'http://www.yblog.site:3000/label_posts',
                params:{label:'文化'},
                method:'GET',
                withCredentials: true
            }).then(function(result){
                if(result.data.user){
                    $scope.loginUser=result.data.user;
                }
                var posts=result.data.posts;
                locals.setObj('culturePosts',posts);
                var countPost=20;
                $scope.noMore_show=false;
                $scope.load_show=true;
                var ul1=angular.element(document.querySelectorAll('#artUl1'));
                var ul2=angular.element(document.querySelectorAll('#artUl2'));
                var ul3=angular.element(document.querySelectorAll('#artUl3'));
                var ul4=angular.element(document.querySelectorAll('#artUl4'));
                var div=document.createElement('div');
                for(var r=0;r<posts.length;r++){
                    if(posts[r].id!='1506311752554'){
                        div.innerHTML=posts[0].article;
                    }
                }
                var img=div.getElementsByTagName('img');
                console.log(posts)
                var artImg1=img[0].attributes.src.nodeValue;
                var bigImg='  <div>'
                    +'<img ui-sref="logDetail({postId:&#39;'+posts[0].postId+'&#39;,name:&#39;'+posts[0].name+'&#39;})" class="img1_blog" src="'+artImg1+'"/>'
                    +'<h1 ui-sref="logDetail({postId:&#39;'+posts[0].postId+'&#39;,name:&#39;'+posts[0].name+'&#39;})" style="overflow:hidden;width:500px;height:40px;">'+posts[0].title+'</h1>'
                    +'</div>'
                    +'<div class="img1_des"><img src="'+posts[0].head+'"/><span>阅读（'+posts[0].countClick+'）| 评论（'+posts[0].comments.length+'）</span><p>'+posts[0].time+'</p></div>'
                bigImg=$compile(bigImg)($scope);
                var BigImg=angular.element(document.querySelectorAll('.blog_big_img'));
                BigImg.append(bigImg);

                for(var i=0;i<20;i+=4) {
                    if(posts[i]){
                        if (i < 4) {
                            //ul3 append li
                            if (posts[0]) {
                                var div9 = document.createElement('div');
                                div9.innerHTML = posts[0].article;
                                var img5 = div9.getElementsByTagName('img');
                                if(img5.length>0) {
                                    var artImg6 = img5[0].attributes.src.nodeValue;
                                }
                                if (artImg6) {
                                    var li9 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[0].postId+'&#39;,name:&#39;'+posts[0].name+'&#39;})" >'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[0].title + '</h3>'
                                        + '<div class="blog_img">'
                                        + '<img  src="' + artImg6 + '"/>'
                                        + '</div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[0].countClick + '） 评论（' + posts[0].comments.length + '）</span><p>' + posts[0].time + '</p></div></div></li>'
                                    li9=$compile(li9)($scope);
                                    ul3.append(li9)
                                    artImg6=false;
                                } else {
                                    var p5 = div9.getElementsByTagName('p');
                                    p5 = p5[0].innerHTML;
                                    var li10 = ' <li style="cursor:pointer;" ui-sref="logDetail({postId:&#39;'+posts[0].postId+'&#39;,name:&#39;'+posts[0].name+'&#39;})" >'
                                        + '<h3  style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[0].title + '</h3>'
                                        + '<div class="blog_des"><p style="line-height:20px;height:100px;width:215px;overflow:hidden;">' + p5 + '</p></div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[0].countClick + '） 评论（' + posts[0].comments.length + '）</span><p>' + posts[0].time + '<</p></div></div>'
                                        + '</li>'
                                    li10=$compile(li10)($scope);
                                    ul3.append(li10)
                                }
                            }
                            //ul4 append li
                            if (posts[1]) {
                                var div11 = document.createElement('div');
                                div11.innerHTML = posts[1].article;
                                var img7 = div11.getElementsByTagName('img');
                                if(img7.length>0) {
                                    var artImg8 = img7[0].attributes.src.nodeValue;
                                }
                                if (artImg8) {
                                    var li13 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[1].postId+'&#39;,name:&#39;'+posts[1].name+'&#39;})">'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[1].title + '</h3>'
                                        + '<div class="blog_img">'
                                        + '<img src="' + artImg8 + '"/>'
                                        + '</div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[1].countClick + '） 评论（' + posts[1].comments.length + '）</span><p>' + posts[1].time + '</p></div></div></li>'
                                    li13=$compile(li13)($scope);
                                    ul4.append(li13);
                                    artImg8=false;
                                } else {
                                    var p8 = div11.getElementsByTagName('p');
                                    p8 = p8[0].innerHTML;
                                    var li14 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[1].postId+'&#39;,name:&#39;'+posts[1].name+'&#39;})".pn36>'
                                        + '<h3  style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[1].title + '</h3>'
                                        + '<div class="blog_des"><p style="line-height:20px;height:100px;width:215px;overflow:hidden;">' + p8 + '</p></div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[1].countClick + '） 评论（' + posts[1].comments.length + '）</span><p>' + posts[1].time + '<</p></div></div>'
                                        + '</li>';
                                    li14=$compile(li14)($scope);
                                    ul4.append(li14)
                                }
                            }
                            //ul3 append li
                            if (posts[2]) {
                                var div10 = document.createElement('div');
                                div10.innerHTML = posts[2].article;
                                var img6 = div10.getElementsByTagName('img');
                                if(img6.length>0) {
                                    var artImg7 = img6[0].attributes.src.nodeValue;
                                }
                                if (artImg7) {
                                    var li11 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[2].postId+'&#39;,name:&#39;'+posts[2].name+'&#39;})">'
                                        + '<h3  style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[2].title + '</h3>'
                                        + '<div class="blog_img">'
                                        + '<img src="' + artImg7 + '"/>'
                                        + '</div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[2].countClick + '） 评论（' + posts[2].comments.length + '）</span><p>' + posts[2].time + '</p></div></div></li>'
                                    li11=$compile(li11)($scope);
                                    ul3.append(li11)
                                    artImg7=false;
                                } else {
                                    var p6 = div10.getElementsByTagName('p');
                                    p6 = p6[0].innerHTML;
                                    var li12 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[2].postId+'&#39;,name:&#39;'+posts[2].name+'&#39;})">'
                                        + '<h3  style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[2].title + '</h3>'
                                        + '<div class="blog_des"><p style="line-height:20px;height:100px;width:215px;overflow:hidden;">' + p6 + '</p></div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[2].countClick + '） 评论（' + posts[2].comments.length + '）</span><p>' + posts[2].time + '<</p></div></div>'
                                        + '</li>'
                                    li12=$compile(li12)($scope);
                                    ul3.append(li12)
                                }
                            }
                            //ul4 append li
                            if (posts[3]) {
                                var div12 = document.createElement('div');
                                div12.innerHTML = posts[3].article;
                                var img8 = div12.getElementsByTagName('img');
                                if(img8.length>0) {
                                    var artImg9 = img8[0].attributes.src.nodeValue;
                                }
                                if (artImg9) {
                                    var li15 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[3].postId+'&#39;,name:&#39;'+posts[3].name+'&#39;})">'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[3].title + '</h3>'
                                        + '<div class="blog_img">'
                                        + '<img src="' + artImg9 + '"/>'
                                        + '</div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[3].countClick + '） 评论（' + posts[3].comments.length + '）</span><p>' + posts[3].time + '</p></div></div></li>'
                                    li15=$compile(li15)($scope);
                                    ul4.append(li15)
                                    artImg9=false;
                                } else {
                                    var p9 = div12.getElementsByTagName('p');
                                    p9 = p9[0].innerHTML;
                                    var li16 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[3].postId+'&#39;,name:&#39;'+posts[3].name+'&#39;})">'
                                        + '<h3  style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[3].title + '</h3>'
                                        + '<div class="blog_des"><p style="line-height:20px;height:100px;width:215px;overflow:hidden;">' + p9 + '</p></div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[3].countClick + '） 评论（' + posts[3].comments.length + '）</span><p>' + posts[3].time + '<</p></div></div>'
                                        + '</li>';
                                    li16=$compile(li16)($scope);
                                    ul4.append(li16)
                                }
                            }
                        } else {
                            //ul1 append li
                            if (posts[i]) {
                                var div1 = document.createElement('div');
                                div1.innerHTML = posts[i].article;
                                var img1 = div1.getElementsByTagName('img');
                                if(img1.length>0) {
                                    var artImg2 = img1[0].attributes.src.nodeValue;
                                }
                                if (artImg2) {
                                    var li1 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i].postId+'&#39;,name:&#39;'+posts[i].name+'&#39;})">'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i].title + '</h3>'
                                        + '<div class="blog_img">'
                                        + '<img src="' + artImg2 + '"/>'
                                        + '</div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i].countClick + '） 评论（' + posts[i].comments.length + '）</span><p>' + posts[i].time + '</p></div></div></li>'
                                    li1=$compile(li1)($scope);
                                    ul1.append(li1)
                                    artImg2=false;
                                } else {
                                    var p1 = div1.getElementsByTagName('p');
                                    p1 = p1[0].innerHTML;
                                    var li2 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i].postId+'&#39;,name:&#39;'+posts[i].name+'&#39;})">'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i].title + '</h3>'
                                        + '<div class="blog_des"><p style="line-height:20px;height:100px;width:215px;overflow:hidden;">' + p1 + '</p></div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i].countClick + '） 评论（' + posts[i].comments.length + '）</span><p>' + posts[i].time + '<</p></div></div>'
                                        + '</li>'
                                    li2=$compile(li2)($scope);
                                    ul1.append(li2)
                                }
                            }
                            //ul2 append li
                            if (posts[i + 1]) {
                                var div2 = document.createElement('div');
                                div2.innerHTML = posts[i + 1].article;
                                var img2 = div2.getElementsByTagName('img');
                                if(img2.length>0) {
                                    var artImg3 = img2[0].attributes.src.nodeValue;
                                }
                                if (artImg3) {
                                    var li3 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i+1].postId+'&#39;,name:&#39;'+posts[i+1].name+'&#39;})">'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i + 1].title + '</h3>'
                                        + '<div class="blog_img">'
                                        + '<img src="' + artImg3 + '"/>'
                                        + '</div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i + 1].countClick + '） 评论（' + posts[i + 1].comments.length + '）</span><p>' + posts[i + 1].time + '</p></div></div></li>'
                                    li3=$compile(li3)($scope);
                                    ul2.append(li3)
                                    artImg3=false;
                                } else {
                                    var p2 = div1.getElementsByTagName('p');
                                    p2 = p2[0].innerHTML;
                                    var li4 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i+1].postId+'&#39;,name:&#39;'+posts[i+1].name+'&#39;})">'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i + 1].title + '</h3>'
                                        + '<div class="blog_des"><p style="line-height:20px;height:100px;width:215px;overflow:hidden;">' + p2 + '</p></div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i + 1].countClick + '） 评论（' + posts[i + 1].comments.length + '）</span><p>' + posts[i + 1].time + '<</p></div></div>'
                                        + '</li>'
                                    li4=$compile(li4)($scope);
                                    ul2.append(li4)
                                }
                            }
                            //ul3 append li
                            if (posts[i + 2]) {
                                var div3 = document.createElement('div');
                                div3.innerHTML = posts[i + 2].article;
                                var img3 = div3.getElementsByTagName('img');
                                if(img3.length>0){
                                    var artImg4 = img3[0].attributes.src.nodeValue;
                                }
                                if (artImg4) {
                                    var li5 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i+2].postId+'&#39;,name:&#39;'+posts[i+2].name+'&#39;})">'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i + 2].title + '</h3>'
                                        + '<div class="blog_img">'
                                        + '<img src="' + artImg4 + '"/>'
                                        + '</div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i + 2].countClick + '） 评论（' + posts[i + 2].comments.length + '）</span><p>' + posts[i + 2].time + '</p></div></div></li>'
                                    li5=$compile(li5)($scope);
                                    ul3.append(li5)
                                    artImg4=false;
                                } else {
                                    var p3 = div3.getElementsByTagName('p');
                                    p3 = p3[0].innerHTML;
                                    var li6 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i+2].postId+'&#39;,name:&#39;'+posts[i+2].name+'&#39;})">'
                                        + '<h3  style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i + 2].title + '</h3>'
                                        + '<div class="blog_des"><p style="line-height:20px;height:100px;width:215px;overflow:hidden;">' + p3 + '</p></div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i + 2].countClick + '） 评论（' + posts[i + 2].comments.length + '）</span><p>' + posts[i + 2].time + '<</p></div></div>'
                                        + '</li>'
                                    li6=$compile(li6)($scope);
                                    ul3.append(li6)
                                }
                            }
                            //ul4 append li
                            if (posts[i + 3]){
                                var div4 = document.createElement('div');
                                div4.innerHTML = posts[i + 3].article;
                                var img4 = div4.getElementsByTagName('img');
                                if(img4.length>0){
                                    var artImg5 = img4[0].attributes.src.nodeValue;
                                }
                                if (artImg5) {
                                    var li7 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i+3].postId+'&#39;,name:&#39;'+posts[i+3].name+'&#39;})">'
                                        + '<h3  style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i + 3].title + '</h3>'
                                        + '<div class="blog_img">'
                                        + '<img src="' + artImg5 + '"/>'
                                        + '</div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i + 3].countClick + '） 评论（' + posts[i + 3].comments.length + '）</span><p>' + posts[i + 3].time + '</p></div></div></li>'
                                    li7=$compile(li7)($scope);
                                    ul4.append(li7)
                                    artImg5=false;
                                } else {
                                    var p4 = div4.getElementsByTagName('p');

                                    p4 = p4[0].innerHTML;
                                    var li8 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i+3].postId+'&#39;,name:&#39;'+posts[i+3].name+'&#39;})">'
                                        + '<h3  style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i + 3].title + '</h3>'
                                        + '<div class="blog_des"><p style="line-height:20px;height:100px;width:215px;overflow:hidden;">' + p4 + '</p></div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i + 3].countClick + '） 评论（' + posts[i + 3].comments.length + '）</span><p>' + posts[i + 3].time + '</p></div></div>'
                                        + '</li>'
                                    li8=$compile(li8)($scope);
                                    ul4.append(li8)
                                }
                            }
                        }
                    }else{
                        $scope.load_show=false;
                        $scope.noMore_show=true;
                    }
                }
                $scope.loadMore=function(){
                    if(posts[countPost]){
                        for(var i=countPost;i<countPost+16;i+=4){
                            //ul1 append li
                            if (posts[i]) {
                                var div1 = document.createElement('div');
                                div1.innerHTML = posts[i].article;
                                var img1 = div1.getElementsByTagName('img');
                                if(img1.length>0) {
                                    var artImg2 = img1[0].attributes.src.nodeValue;
                                }
                                if (artImg2) {
                                    var li1 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i].postId+'&#39;,name:&#39;'+posts[i].name+'&#39;})">'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i].title + '</h3>'
                                        + '<div class="blog_img">'
                                        + '<img src="' + artImg2 + '"/>'
                                        + '</div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i].countClick + '） 评论（' + posts[i].comments.length + '）</span><p>' + posts[i].time + '</p></div></div></li>'
                                    li1=$compile(li1)($scope);
                                    ul1.append(li1)
                                    artImg2=false;
                                } else {
                                    var p1 = div1.getElementsByTagName('p');
                                    p1 = p1[0].innerHTML;
                                    var li2 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i].postId+'&#39;,name:&#39;'+posts[i].name+'&#39;})">'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i].title + '</h3>'
                                        + '<div class="blog_des"><p style="line-height:20px;height:100px;width:215px;overflow:hidden;">' + p1 + '</p></div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i].countClick + '） 评论（' + posts[i].comments.length + '）</span><p>' + posts[i].time + '<</p></div></div>'
                                        + '</li>'
                                    li2=$compile(li2)($scope);
                                    ul1.append(li2)
                                }
                            }
                            //ul2 append li
                            if (posts[i + 1]) {
                                var div2 = document.createElement('div');
                                div2.innerHTML = posts[i + 1].article;
                                var img2 = div2.getElementsByTagName('img');
                                if(img2.length>0) {
                                    var artImg3 = img2[0].attributes.src.nodeValue;
                                }
                                if (artImg3) {
                                    var li3 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i+1].postId+'&#39;,name:&#39;'+posts[i+1].name+'&#39;})">'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i + 1].title + '</h3>'
                                        + '<div class="blog_img">'
                                        + '<img src="' + artImg3 + '"/>'
                                        + '</div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i + 1].countClick + '） 评论（' + posts[i + 1].comments.length + '）</span><p>' + posts[i + 1].time + '</p></div></div></li>'
                                    li3=$compile(li3)($scope);
                                    ul2.append(li3)
                                    artImg3=false;
                                } else {
                                    var p2 = div1.getElementsByTagName('p');
                                    p2 = p2[0].innerHTML;
                                    var li4 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i+1].postId+'&#39;,name:&#39;'+posts[i+1].name+'&#39;})">'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i + 1].title + '</h3>'
                                        + '<div class="blog_des"><p style="line-height:20px;height:100px;width:215px;overflow:hidden;">' + p2 + '</p></div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i + 1].countClick + '） 评论（' + posts[i + 1].comments.length + '）</span><p>' + posts[i + 1].time + '<</p></div></div>'
                                        + '</li>'
                                    li4=$compile(li4)($scope);
                                    ul2.append(li4)
                                }
                            }
                            //ul3 append li
                            if (posts[i + 2]) {
                                var div3 = document.createElement('div');
                                div3.innerHTML = posts[i + 2].article;
                                var img3 = div3.getElementsByTagName('img');
                                if(img3.length>0){
                                    var artImg4 = img3[0].attributes.src.nodeValue;
                                }
                                if (artImg4) {
                                    var li5 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i+2].postId+'&#39;,name:&#39;'+posts[i+2].name+'&#39;})">'
                                        + '<h3 style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i + 2].title + '</h3>'
                                        + '<div class="blog_img">'
                                        + '<img src="' + artImg4 + '"/>'
                                        + '</div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i + 2].countClick + '） 评论（' + posts[i + 2].comments.length + '）</span><p>' + posts[i + 2].time + '</p></div></div></li>'
                                    li5=$compile(li5)($scope);
                                    ul3.append(li5)
                                    artImg4=false;
                                } else {
                                    var p3 = div3.getElementsByTagName('p');
                                    p3 = p3[0].innerHTML;
                                    var li6 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i+2].postId+'&#39;,name:&#39;'+posts[i+2].name+'&#39;})">'
                                        + '<h3  style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i + 2].title + '</h3>'
                                        + '<div class="blog_des"><p style="line-height:20px;height:100px;width:215px;overflow:hidden;">' + p3 + '</p></div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i + 2].countClick + '） 评论（' + posts[i + 2].comments.length + '）</span><p>' + posts[i + 2].time + '<</p></div></div>'
                                        + '</li>'
                                    li6=$compile(li6)($scope);
                                    ul3.append(li6)
                                }
                            }
                            //ul4 append li
                            if (posts[i + 3]){
                                var div4 = document.createElement('div');
                                div4.innerHTML = posts[i + 3].article;
                                var img4 = div4.getElementsByTagName('img');
                                if(img4.length>0){
                                    var artImg5 = img4[0].attributes.src.nodeValue;
                                }
                                if (artImg5) {
                                    var li7 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i+3].postId+'&#39;,name:&#39;'+posts[i+3].name+'&#39;})">'
                                        + '<h3  style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i + 3].title + '</h3>'
                                        + '<div class="blog_img">'
                                        + '<img src="' + artImg5 + '"/>'
                                        + '</div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i + 3].countClick + '） 评论（' + posts[i + 3].comments.length + '）</span><p>' + posts[i + 3].time + '</p></div></div></li>'
                                    li7=$compile(li7)($scope);
                                    ul4.append(li7)
                                    artImg5=false;
                                } else {
                                    var p4 = div4.getElementsByTagName('p');

                                    p4 = p4[0].innerHTML;
                                    var li8 = ' <li style="cursor:pointer;"  ui-sref="logDetail({postId:&#39;'+posts[i+3].postId+'&#39;,name:&#39;'+posts[i+3].name+'&#39;})">'
                                        + '<h3  style="overflow:hidden;height:60px;text-overflow:ellipsis;">' + posts[i + 3].title + '</h3>'
                                        + '<div class="blog_des"><p style="line-height:20px;height:100px;width:215px;overflow:hidden;">' + p4 + '</p></div>'
                                        + '<div class="blog_count"><img src="images/img1_desimg.jpg"/><div><span>阅读（' + posts[i + 3].countClick + '） 评论（' + posts[i + 3].comments.length + '）</span><p>' + posts[i + 3].time + '</p></div></div>'
                                        + '</li>'
                                    li8=$compile(li8)($scope);
                                    ul4.append(li8)
                                }
                            }
                        }
                        countPost+=16;
                    }else{
                        $scope.load_show=false;
                        $scope.noMore_show=true;
                    }
                }

            }).catch(function(err){
                console.log(err)
            })
            }

    }]);