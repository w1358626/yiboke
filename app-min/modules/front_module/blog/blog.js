'use strict';

angular.module('myApp.blog', ['ui.router',[
        "node_modules/ng-dialog/css/ngDialog.min.css",
        "node_modules/ng-dialog/css/ngDialog-theme-default.min.css",
        "node_modules/ng-dialog/js/ngDialog.min.js"
]]).controller('BlogCtrl', ['$scope','$rootScope', '$http','$state','locals','$stateParams','$location','$anchorScroll','$compile','$cookies',function($scope,$rootScope,$http,$state,locals,$stateParams,$location,$anchorScroll,$compile,$cookies){

       $scope.posts=[];
       $scope.no_article=false;
       $scope.userName=$stateParams.name;
       var articleList=angular.element(document.querySelectorAll('#article_list'));
       var date=new Date();
       var friend=locals.getObj('focus',1000*3600*24);
       if(!angular.isArray(friend)){
         friend=[];
       }
        for(var e=0;e<friend.length;e++){
            friend[e]=friend[e].name;
        }
        //缓存数据
        var keepData=function(user,typePosts,topPosts){
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
            locals.set('lastLogin',user.lastLogin);
            locals.set('headImg',user.headImg);
            locals.setObj('photoBooks',user.photoBooks);
            locals.set('upPost','');//清空文章更新标志
            locals.setObj('stateName',$stateParams.name);
            //本地缓存文章typePosts  top posts
                locals.set('countPosts',typePosts.length);
                locals.setObj('typePosts',typePosts);
                locals.setObj('topPosts',topPosts);
        };
        //绑定数据
        var bindData=function(posts){
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
            if(posts){
                var current=date.getTime();
                //遍历发布3天内的文章
                for(var i=0;i<posts.length;i++){
                    var time=Number(posts[i].postId);
                    if((current-time)<1000*3600*24*100){
                        lastPosts.push(posts[i]);
                    }
                }
                //获取文章列表需要的信息
                for(var j=0;j<lastPosts.length;j++){
                    var div=document.createElement('div');
                    div.innerHTML=lastPosts[j].article;
                    var p=div.getElementsByTagName('p');
                    var img=div.getElementsByTagName('img');
                    $scope.name=lastPosts[j].name;
                    var postTime=lastPosts[j].time;
                    var count=lastPosts[j].countClick;
                    $scope.id=lastPosts[j].postId;
                    var comments=lastPosts[j].comments;
                    var title=lastPosts[j].title;
                    var html='<li class="article">'
                        +'<a  style="cursor:pointer;"><div class="article_title" ><h4  id="title'+j+'" >'+title+'</h4></div>'
                        +'<div  id="p'+j+'" class="article_content"></div>'
                        +'<p class="ellipsis">…</p>'
                        +'</a>'
                        +'<div class="pub_time"><span>'+postTime+'</span><span> 阅读（'+count+'）</span><span><a  style="cursor:pointer;"> 评论（'+comments.length+'）</a></span><p  ui-sref="logDetail({postId:&#39;{{id}}&#39;,name:&#39;{{userName}}&#39;})" class="complete"><a  style="cursor:pointer;">阅读全文 》</a></p></div>'
                        +'<div><a  style="cursor:pointer;"><p class="author"  ui-sref="showInfo({name:&#39;{{name}}&#39;})"><span>作者：</span>'+$scope.name+'</p></a></div>'
                        +'</li>';
                    html=$compile(html)($scope);
                    articleList.append(html);
                    var content=angular.element(document.querySelectorAll('#p'+j+''));
                    var h4=angular.element(document.querySelectorAll('#title'+j+''));
                    if(p.length>0){
                        var p_img=p[0].getElementsByTagName('img');
                        p[0].remove(p_img);
                    }
                    content.append(img[0]);
                    content.append(p[0]);
                    var num=0;
                    var reg = /[a-zA-Z0-9-_^~%&'.,;=?$\x22\s]/;
                    for(var k=0;k<title.length;k++){
                        if(reg.test(title[k])){
                            num++;
                        }
                    }
                    var titleWidth=17*(title.length-num)+num*9;
                    h4.css({'width':titleWidth+'px','margin':'20px auto'});
                }
            }else{
                $scope.no_article=true;
            }
        };
        window.onunload=function(){//刷新时更新数据
            locals.set('upPost',true);
        };
        var stateName=locals.getObj('stateName',1000*3600*24);
            if(stateName!=$stateParams.name||locals.get('upPost')||locals.getObj('blogPosts',1000*3600)==false){
                if(friend.length<1){
                    $scope.no_article=true;
                    $http({url:'http://www.yblog.site:3000/userData',
                        data:{name:$stateParams.name},
                         method:'POST',
                         withCredentials: true
                    }).then(function(result){
                        keepData(result.data.user,result.data.typePosts,result.data.topPosts);
                        bindData(false);
                    }).catch(function(err){
                        console.log(err)
                    })
                }
                if(friend.length>0){
                    friend=JSON.stringify(friend);
                    $http({url:'http://www.yblog.site:3000/fPosts',
                        data:{friends:friend,name:$stateParams.name},
                        method:'POST',
                        withCredentials: true
                    }).then(function(result){
                        console.log('blog result')
                        console.log(result)
                        keepData(result.data.user,result.data.typePosts,result.data.topPosts);
                        var posts=$scope.friendPosts;
                        locals.setObj('blogPosts',posts);
                        bindData(posts);
                    }).catch(function(err){
                        console.log(err)
                    })
                }
            }else{
                if(friend.length<1){
                    bindData(false);
                    $scope.no_article=true;
                }else{
                    var posts=locals.getObj('blogPosts',1000*3600*24*3);
                    bindData(posts);
                }
            }

    }]);

