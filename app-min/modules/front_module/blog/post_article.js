'use strict';

angular.module('myApp.post_article',['ui.router',[
        "node_modules/ng-dialog/css/ngDialog.min.css",
        "node_modules/ng-dialog/css/ngDialog-theme-default.min.css",
        "node_modules/ng-dialog/js/ngDialog.min.js",
        "bower_components/wangEditor-2.1.16/dist/css/wangEditor.min.css",
        "bower_components/wangEditor-2.1.16/dist/js/wangEditor.js",
        "bower_components/angular-file-upload/dist/angular-file-upload.min.js",
        "node_modules/flv.js/dist/flv.min.js",
         "bower_components/xss/dist/xss.min.js"
    ]])
    .controller('PostCtrl',['$scope','$rootScope','$http','$compile','locals','$stateParams','FileUploader',function($scope,$rootScope,$http,$compile,locals,$stateParams,FileUploader){

}])
    .directive('postArticle',[function(){
        return {
            scope:{},
            restrict:'AE',
            templateUrl:'directives/postArticle.html',
            link:function($scope,elm,attr){

            },
            controller:function($scope,$element,$attrs,$http,$compile,locals,$stateParams,$timeout,FileUploader,ngDialog,$cookies){
                var loginName=locals.getObj('lastName',1000*3600*24*7);
                var cName=loginName+'yblog';
                var token=$cookies.get(cName);
                console.log('cookie'+token)
                // 初始化Web Uploader
                var wuploader = WebUploader.create({

                    // 选完文件后，是否自动上传。
                    auto: true,

                    // swf文件路径
                    swf: 'bower_components/webUpload/Uploader.swf',

                    // 文件接收服务端。
                    server: 'http://www.yblog.site:6000/upload',

                    // 选择文件的按钮。可选。
                    // 内部根据当前运行是创建，可能是input元素，也可能是flash.
                    pick: '#upImg',

                    // 只允许选择图片文件。
                    accept: {
                        title: 'Images',
                        extensions: 'gif,jpg,jpeg,bmp,png',
                        mimeTypes: 'image/*'
                    }
                });
                wuploader.on( 'uploadSuccess', function( file,response ) {
                    console.log(response)
                });
                //angular-file-uploader初始化
                var uploader = $scope.uploader = new FileUploader({
                    url: 'http://www.yblog.site:6000/upload'
                });
                $scope.userName=$stateParams.name;
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
                var successTip = function () {
                    ngDialog.open({
                        template: 'directives/dialog.html',
                        className:'ngdialog-theme-default',
                        closeByEscape: true,
                        //closeByDocument:true,
                        controller:function($scope,$timeout){
                            $scope.show = function(){
                                $scope.closeThisDialog(); //关闭弹窗
                            }
                            var close=$timeout(function(){
                                $scope.show();
                            },1500)
                        }
                    });
                };
                var videoTip = function () {
                    ngDialog.open({
                        template: 'directives/videoTip.html',
                        className:'ngdialog-theme-default',
                        controller:function($scope,$timeout){
                            $scope.show = function(){
                                $scope.closeThisDialog(); //关闭弹窗
                            }
                            var close=$timeout(function(){
                                $scope.show();
                            },1500)
                        }
                    });
                };
                //获取数据
                var start=function(){
                    $scope.select=0;
                    $scope.themeImg_show=true;
                    $scope.editorContent = '';
                    $scope.log_title="";
                    $scope.removeTypeShow=false;
                    $scope.label_show=false;
                    $scope.label_culture=false;$scope.label_art=false;$scope.label_car=false;$scope.label_science=false;
                    $scope.label_entertainment=false;$scope.label_finance=false;$scope.label_current=false;$scope.label_video=false;
                    $scope.label_health=false;$scope.label_travel=false;$scope.label_spots=false;$scope.label_life=false;$scope.label_fashion=false;
                    $scope.type1=false;$scope.type2=false;$scope.type3=false;$scope.type4=false;$scope.type5=false;
                    $scope.type6=false;$scope.type7=false;$scope.type8=false;$scope.type9=false;$scope.type0=false;
                    var countIMG= 0,countVIDEO=0,countAUDIO=0;
                    var article=angular.element(document.querySelectorAll("#show_article"));
                    angular.element(document.querySelectorAll("#post_btn")).on("click" ,function () {
                        // 从 onchange 函数中更新数据
                        article.html($scope.editorContent);
                    });
                    //实时获取用户postTypes

                    var myTypes=locals.get('postTypes');//locals返回值是字符串
                    myTypes=myTypes.split(',');
                    var themeImg=angular.element(document.querySelectorAll("#themeImg"));
                    var editor=angular.element(document.querySelectorAll("#editor-trigger"));
                    var upImg=angular.element(document.querySelectorAll("#upImg"));
                    var upAudio=angular.element(document.querySelectorAll("#upAudio"));
                    var upVedio=angular.element(document.querySelectorAll("#upVedio"));
                    var articleTitle=angular.element(document.querySelectorAll("#article_title"));
                    var selectType=angular.element(document.querySelectorAll("#select_type"));
                    var removeType=angular.element(document.querySelectorAll("#type_span"));
                    uploader.onSuccessItem = function(fileItem, response, status, headers) {
                        if(response!="not allowed") {
                            if(response[0].image&&!response[0].video){
                                var img="<div style='width:500px;height:300px;margin-left:auto;auto;z-index:-1;margin-right:auto;'><img class='append_img' style='max-width:500px;min-height:300px;' src='images/a1.jpg'/></div><br/><br/>";
                                editor.append(img);
                                var appendImg=angular.element(document.querySelectorAll(".append_img"));
                                appendImg.eq(appendImg.length-1).attr('src',response[0].image);
                            }
                            if(response[0].mp3){
                                var audio = "<audio controls style='z-index:-1;width:650px;margin-left:auto;margin-right:auto;'><source class='append_audio' src='images/upAudio.mp3' type='audio/mpeg'></audio><br/>";
                                editor.append(audio);
                                var appendAudio = angular.element(document.querySelectorAll(".append_audio"));
                                appendAudio.eq(appendAudio.length-1).attr('src', response[0].mp3);
                            }
                            if(response[0].video){
                                var video=angular.element(document.querySelectorAll('#videoElement'));
                                if(video.length>0){
                                    videoTip();
                                }else{
                                    var vedio = "<div style='margin-left:auto;width:500px;height:300px;margin-right:auto;'><video id='videoElement' width='500' height='300' controls>您的浏览器不支持H5 video</video></div><br/>";
                                    vedio=$compile(vedio)($scope);
                                    editor.append(vedio);
                                    if (flvjs.isSupported()) {
                                        var flvPlayer = flvjs.createPlayer({
                                            type: 'mp4',
                                            url:  response[0].video
                                        });
                                        flvPlayer.attachMediaElement(videoElement);
                                        flvPlayer.load(); //加载
                                    }
                                }
                            }
                        }else{
                            alert('格式不支持！')
                        }
                    };

                    $scope.add_type=function(){
                        var newType=prompt("填写分类名称：");
                        if(newType!=""&&newType!=null){
                            selectType.prepend('<option>'+newType+'</option>');
                            myTypes[myTypes.length]=$stateParams.name+'-'+newType;
                            var Types=JSON.stringify(myTypes);
                            //请求更新postTypes
                            $http({url:"http://www.yblog.site:3000/upTypes",
                                data:{types:Types,token:token},
                                method:'POST',
                                withCredentials: true
                            }).then(function(result){

                            }).catch(function(err){
                                console.log(err)
                            })
                        }
                    };

                    $scope.remove_type=function(){
                        $scope.removeTypeShow=!$scope.removeTypeShow;
                    };
                    var writeType= function() {
                        console.log(myTypes)
                        for(var i=0;i<myTypes.length;i++){
                            var type=myTypes[i].split('-');
                            var html='<span id="type'+i+'"><input id="c_type'+i+'" ng-model="type'+i+'" type="checkbox" value="'+i+'"/>'+type[1]+'</span>';
                            html=$compile(html)($scope);
                            selectType.append('<option id="s_type'+i+'" value="'+i+'">'+type[1]+'</option>');
                            removeType.append(html);
                        }
                    };
                    writeType();
                    $scope.removeType=function(){
                        var del_types=[];
                        console.log(myTypes)
                        var sType1=angular.element(document.querySelector("#s_type0"));
                        var sType2=angular.element(document.querySelector("#s_type1"));
                        var sType3=angular.element(document.querySelector("#s_type2"));
                        var sType4=angular.element(document.querySelector("#s_type3"));
                        var sType5=angular.element(document.querySelector("#s_type4"));
                        var sType6=angular.element(document.querySelector("#s_type5"));
                        var sType7=angular.element(document.querySelector("#s_type6"));
                        var sType8=angular.element(document.querySelector("#s_type7"));
                        var sType9=angular.element(document.querySelector("#s_type8"));
                        var sType10=angular.element(document.querySelector("#s_type9"));
                        var cType1=angular.element(document.querySelector("#type0"));
                        var cType2=angular.element(document.querySelector("#type1"));
                        var cType3=angular.element(document.querySelector("#type2"));
                        var cType4=angular.element(document.querySelector("#type3"));
                        var cType5=angular.element(document.querySelector("#type4"));
                        var cType6=angular.element(document.querySelector("#type5"));
                        var cType7=angular.element(document.querySelector("#type6"));
                        var cType8=angular.element(document.querySelector("#type7"));
                        var cType9=angular.element(document.querySelector("#type8"));
                        var cType10=angular.element(document.querySelector("#type9"));
                        if($scope.type0){sType1.remove();cType1.remove();del_types.push(myTypes[0]);myTypes.splice(0,1);}
                        if($scope.type1){sType2.remove();cType2.remove();del_types.push(myTypes[1]);myTypes.splice(1,1);}
                        if($scope.type2){sType3.remove();cType3.remove();del_types.push(myTypes[2]);myTypes.splice(2,1);}
                        if($scope.type3){sType4.remove();cType4.remove();del_types.push(myTypes[3]);myTypes.splice(3,1);}
                        if($scope.type4){sType5.remove();cType5.remove();del_types.push(myTypes[4]);myTypes.splice(4,1);}
                        if($scope.type5){sType6.remove();cType6.remove();del_types.push(myTypes[5]);myTypes.splice(5,1);}
                        if($scope.type6){sType7.remove();cType7.remove();del_types.push(myTypes[6]);myTypes.splice(6,1);}
                        if($scope.type7){sType8.remove();cType8.remove();del_types.push(myTypes[7]);myTypes.splice(7,1);}
                        if($scope.type8){sType9.remove();cType9.remove();del_types.push(myTypes[8]);myTypes.splice(8,1);}
                        if($scope.type9){sType10.remove();cType10.remove();del_types.push(myTypes[9]);myTypes.splice(9,1);}
                        var noType=$stateParams.name+"-我的文章";
                        for(var i=0;i<myTypes.length;i++){
                            if(myTypes[i]==noType) {
                                var exit = true;
                            }
                        }
                        if(!exit){
                            myTypes.splice(1,0,noType);
                        }
                        console.log(del_types)
                        var Types=JSON.stringify(myTypes);
                        //请求更新postTypes
                        $http({url:"http://www.yblog.site:3000/upTypes",
                            data:{types:Types,token:token},
                            method:'POST',
                            withCredentials: true
                        }).then(function(result){

                        }).catch(function(err){
                            console.log(err)
                        })
                        //请求将文章移动到‘我的文章’
                        var toArticle=$timeout(function(){
                            var types=JSON.stringify(del_types);
                            $http({url:'http://www.yblog.site:3000/toMyArticle',
                                method:'POST',
                                data:{types:types,token:token},
                                withCredentials: true
                            }).then(function(){

                            }).catch(function(err){
                                console.log(err)
                            })
                        },1000)
                    };
                    var labels="";
                    $scope.labelChcange=function(){
                        if(!$scope.label_show){
                            $scope.label_entertainment=false;$scope.label_finance=false;$scope.label_current=false;
                            $scope.label_culture=false;$scope.label_art=false;$scope.label_car=false;$scope.label_fashion=false;
                            $scope.label_health=false;$scope.label_travel=false;$scope.label_sports=false;$scope.label_life=false;$scope.label_science=false;
                        }
                    };

                    var labelChange=function(){
                        if($scope.label_culture){labels="文化";}
                        if($scope.label_art){labels=labels+",艺术";}
                        if($scope.label_car){labels=labels+",汽车";}
                        if($scope.label_science){labels=labels+",科学";}
                        if($scope.label_entertainment){labels=labels+",娱乐";}
                        if($scope.label_finance){labels=labels+",财经";}
                        if($scope.label_current){labels=labels+",时事";}
                        if($scope.label_health){labels=labels+",健康";}
                        if($scope.label_travel){labels=labels+",旅游";}
                        if($scope.label_sports){labels=labels+",运动";}
                        if($scope.label_life){labels=labels+",生活";}
                        if($scope.label_fashion){labels=labels+",时尚";}
                        console.log(labels)
                    };
                    //绑定数据
                    $scope.post_mylog=function(){
                        if(articleTitle.val()!=""&&editor.html()!=""){
                            var type,myArticle;
                            var html=editor.html();
                            html=filterXSS(html);
                            var select=selectType.val();
                            locals.set('upPost',true);
                            var head=locals.get('myHead');
                            countIMG=0;countAUDIO=0;countVIDEO=0;
                            if(!Number(select)&&Number(select)!=0){
                                //  alert("进入")
                                type=$stateParams.name+"-"+select;
                            }else{
                                type=myTypes[select];
                            }
                            var title=filterXSS($scope.log_title);
                            labelChange();
                            $http({url:"http://www.yblog.site:3000/post",
                                data:{title:title,article:html,type:type,labels:labels,head:head,token:token},
                                method:'POST',
                                withCredentials: true
                            })
                                .then(function(result){
                                    successTip();
                                    $scope.log_title="";
                                    editor.html("");
                                    labels="";
                                    themeImg.attr("src",'images/a2.jpg');
                                    $scope.label_show=false;
                                    $scope.label_culture=false;$scope.label_art=false;$scope.label_car=false;
                                    $scope.label_entertainment=false;$scope.label_finance=false;$scope.label_current=false;$scope.label_science=false;
                                    $scope.label_health=false;$scope.label_travel=false;$scope.label_sports=false;$scope.label_life=false;$scope.label_fashion=false;
                                }).catch(function(err){
                                console.log(err)
                            })
                        }else{
                            alert("必须填写标题和正文！")
                        }
                    }
                }
                var stateName=locals.getObj('stateName',1000*3600*24);
                if(stateName!=$stateParams.name||locals.get('upPost')){
                    $http({url:'http://www.yblog.site:3000/userData',
                        data:{name:$stateParams.name},
                        method:'POST',
                        withCredentials: true
                    }).then(function(result){
                       $scope.currentUser=result.data.user;
                        var user=result.data.user;
                        var typePosts=result.data.typePosts;
                        var topPosts=result.data.topPosts;
                        locals.setObj('currentUser',result.data.user);
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
                        //本地缓存分类文章type_posts
                        locals.set('countPosts',typePosts.length);
                        locals.setObj('typePosts',typePosts);
                        locals.set('upPost','');//清空文章更新标志
                        locals.setObj('stateName',$stateParams.name);
                        //top posts
                        locals.setObj('topPosts',topPosts);
                        start()
                    }).catch(function(err){
                        console.log(err);
                    });
                }else{
                    start()
                }
            }
        }
    }])


