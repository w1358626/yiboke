 'use strict';

// Declare app level module which depends on views, and components
var app=angular.module('myApp', [
    "oc.lazyLoad",
    'ui.router',
    'myApp.home',
    'myApp.home.headline'
],['$httpProvider',function($httpProvider){
    // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    /**
     * The workhorse; converts an object to x-www-form-urlencoded serialization.
     * @param {Object} obj
     * @return {String}
     */
    var param = function(obj) {
        var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

        for(name in obj) {
            value = obj[name];

            if(value instanceof Array) {
                for(i=0; i<value.length; ++i) {
                    subValue = value[i];
                    fullSubName = name + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if(value instanceof Object) {
                for(subName in value) {
                    subValue = value[subName];
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if(value !== undefined && value !== null)
                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }

        return query.length ? query.substr(0, query.length - 1) : query;
    };

    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function(data) {
        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];
}]).
run(function($rootScope, $state, $stateParams,locals,$anchorScroll) {
    locals.set('name','');//加载statusBar指令前清空name
    locals.set('myName','');//我登录的用户名
    locals.set('hostName','');//别人的用户名
    locals.set('upPost',true);
    
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $anchorScroll.yOffset = 100;
}).

config(function($stateProvider,$urlRouterProvider,$ocLazyLoadProvider,$locationProvider){
  
    $urlRouterProvider.otherwise('/home');
    $stateProvider

        .state('reg', {
            url: '/reg',
            views: {
                '': {
                    templateUrl: 'modules/front_module/register/register.html',
                    controller:'RegisterCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/register/register.js")
                }]
            },
            cache:false

        })
        .state('reg_success',{
            url:'/reg_success',
            views:{
                '':{
                    templateUrl:'modules/front_module/register/success.html',
                    controller:'RegSuccess'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/register/reg_success.js")
                }]
            }
        })
        .state('policy', {
            url: '/policy',
            views: {
                '': {
                    templateUrl: 'modules/front_module/register/policy.html',
                    controller:'RegisterCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/register/register.js")
                }]
            }
        })
        .state('term', {
            url: '/term',
            views: {
                '': {
                    templateUrl: 'modules/front_module/register/terms.html',
                    controller:'RegisterCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/register/register.js")
                }]
            }
        })
        .state('home', {
            url: '/home',
            views: {
                '': {
                    templateUrl: 'modules/front_module/home/home.html',
                    controller:'HomeCtrl'
                }
            }
        })
        .state('home.visual', {
            url: '/home/visual',
            views: {
                '': {
                    templateUrl: 'modules/front_module/home/visual.html',
                    controller:'HomeVisualCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/home/visual.js")
                }]
            }
        })
        .state('home.list', {
            url: '/home/list',
            views: {
                '': {
                    templateUrl: 'modules/front_module/home/list.html',
                    controller:'HomeListCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/home/list.js")
                }]
            }
        })
        .state('home.hot', {
            url: '/home/hot',
            views: {
                '': {
                    templateUrl: 'modules/front_module/home/hot.html',
                    controller:'HomeHotCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/home/hot.js")
                }]
            }
        })
        .state('home.headline', {
            url: '/home/headline',
            views: {
                '': {
                    templateUrl: 'modules/front_module/home/headline.html',
                    controller:'HomeHeadlineCtrl'
                }
            }
        })

        .state('fashion', {
            url: '/fashion',
            views: {
                '': {
                    templateUrl: 'modules/front_module/fashion/fashion.html',
                    controller:'FashionCtrl'

                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/fashion/fashion.js")
                }]
            }
        })
        .state('art', {
            url: '/art',
            views: {
                '': {
                    templateUrl: 'modules/front_module/art/art.html',
                    controller:'ArtCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/art/art.js")
                }]
            }
        })
        .state('car', {
            url: '/car',
            views: {
                '': {
                    templateUrl: 'modules/front_module/car/car.html',
                    controller:'CarCtrl'

                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/car/car.js")
                }]
            }
        })
        .state('culture', {
            url: '/culture',
            views: {
                '': {
                    templateUrl: 'modules/front_module/culture/culture.html',
                    controller:'CultureCtrl'

                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/culture/culture.js")
                }]
            }
        })
        .state('current', {
            url: '/current',
            views: {
                '': {
                    templateUrl: 'modules/front_module/current/current.html',
                    controller:'CurrentCtrl'

                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/current/current.js")
                }]
            }
        })
        .state('entertainment', {
            url: '/entertainment',
            views: {
                '': {
                    templateUrl: 'modules/front_module/entertainment/entertainment.html',
                    controller:'EntertainmentCtrl'

                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/entertainment/entertainment.js")
                }]
            }
        })
        .state('finance', {
            url: '/finance',
            views: {
                '': {
                    templateUrl: 'modules/front_module/finance/finance.html',
                    controller:'FinanceCtrl'

                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/finance/finance.js")
                }]
            }
        })
        .state('health', {
            url: '/health',
            views: {
                '': {
                    templateUrl: 'modules/front_module/health/health.html',
                    controller:'HealthCtrl'

                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/health/health.js")
                }]
            }
        })
        .state('life', {
            url: '/life',
            views: {
                '': {
                    templateUrl: 'modules/front_module/life/life.html',
                    controller:'LifeCtrl'

                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/life/life.js")
                }]
            }
        })
        .state('sports', {
            url: '/sports',
            views: {
                '': {
                    templateUrl: 'modules/front_module/sports/sports.html',
                    controller:'SportsCtrl'

                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/sports/sports.js")
                }]
            }
        })
        .state('travel', {
            url: '/travel',
            views: {
                '': {
                    templateUrl: 'modules/front_module/travel/travel.html',
                    controller:'TravelCtrl'

                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/travel/travel.js")
                }]
            }
        })
        .state('science', {
            url: '/science',
            views: {
                '': {
                    templateUrl: 'modules/front_module/science/science.html',
                    controller:'ScienceCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/science/science.js")
                }]
            }
        })
        .state('visual', {
            url: '/visual{name}/{videoType}/{videoUrl}/{title}?from&to',
            views: {
                '': {
                    templateUrl: 'modules/front_module/visual/visual.html',
                    controller:'VisualCtrl'

                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/visual/visual.js")
                }]
            }
        })
        .state('starsBlog', {
            url: '/starsBlog',
            views: {
                '': {
                    templateUrl: 'modules/front_module/starsBlog/starsBlog.html',
                    controller:'StarsBlogCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/starsBlog/starsBlog.js")
                }]
            }
        })
        .state('blog', {
            url: '/blog{name}',
            views: {
                '': {
                    templateUrl: 'modules/front_module/blog/blog.html',
                    controller:'BlogCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/blog/blog.js")
                }]
            }
        })
        .state('fDynamic', {
            url: '/fDynamic{name}',
            views: {
                '': {
                    templateUrl: 'modules/front_module/blog/fDynamic.html',
                    controller:'FDynamicCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/blog/fDynamic.js")
                }]
            }
        })
        .state('post_article',{
            url:'/post_article{name}',
            views:{
                '':{
                    templateUrl:'modules/front_module/blog/post_article.html',
                    controller:'PostCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/blog/post_article.js")
                }]
            }
        })
        .state('photos', {
            url: '/photos{name}',
            views: {
                '': {
                    templateUrl: 'modules/front_module/blog/photos.html',
                    controller:'PhotosCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/blog/photos.js")
                }]
            }
        })
        .state('logDetail',{
            url:'/logDetail/{postId}/{name}?from&to',
            // params:{postId:null,name:null},
            views:{
                '':{
                    templateUrl:'modules/front_module/blog/log_detail.html',
                    controller:'LogDetailCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/blog/log_detail.js")
                }]
            }
        })
        .state('log', {
            url: '/log{name}',
            views: {
                '': {
                    templateUrl: 'modules/front_module/blog/log.html',
                    controller:'LogCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/blog/log.js")
                }]
            }
        })
        .state('photos.photo', {
            url: '/photo{name}/{photoBook}/{method}?from&to',
            views: {
                '': {
                    templateUrl: 'modules/front_module/blog/photos_detail.html',
                    controller:'PhotoCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/blog/photos_detail.js")
                }]
            }
        })
        .state('myHome', {
            url: '/myHome{name}',
            views: {
                '': {
                    templateUrl: 'modules/front_module/blog/myHome.html',
                    controller:'MyHomeCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/blog/myHome.js")
                }]
            }
        })
        .state('myHome.myInfo', {
            url: '/myHome.myInfo{name}',
            views: {
                '': {
                    templateUrl: 'modules/front_module/blog/myInfo.html',
                    controller:'MyInfoCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/blog/myInfo.js")
                }]
            }
        })
        .state('myHome.myPower', {
            url: '/myHome.myPower{name}',
            views: {
                '': {
                    templateUrl: 'modules/front_module/blog/myPower.html',
                    controller:'MyPowerCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/blog/myPower.js")
                }]
            }
        })
        .state('myHome.mySet', {
            url: '/myHome.mySet{name}',
            views: {
                '': {
                    templateUrl: 'modules/front_module/blog/mySet.html',
                    controller:'MySetCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/blog/mySet.js")
                }]
            }
        })
        .state('myHome.mySet.setHead', {
            url: '/myHome.mySet.setHead{name}',
            views: {
                '': {
                    templateUrl: 'modules/front_module/blog/set_head.html',
                    controller:'SetHeadCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/blog/set_head.js")
                }]
            }
        })
        .state('myHome.mySet.setPassword', {
            url: '/myHome.mySet.setPassword{name}',
            views: {
                '': {
                    templateUrl: 'modules/front_module/blog/set_password.html',
                    controller:'SetPasswordCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/blog/set_password.js")
                }]
            }

        })
        .state('myHome.mySet.setBlog', {
            url: '/myHome.mySet.setBlog{name}',
            views: {
                '': {
                    templateUrl: 'modules/front_module/blog/set_blog.html',
                    controller:'SetBlogCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/blog/set_blog.js")
                }]
            }

        })
        .state('myHome.messages', {
            url: '/messages{name}',
            views: {
                '': {
                    templateUrl: 'modules/front_module/blog/message.html',
                    controller:'MessagesCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/blog/message.js")
                }]
            }

        })
        .state('showInfo', {
            url: '/showInfo{name}',
            views: {
                '': {
                    templateUrl: 'modules/front_module/blog/showInfo.html',
                    controller:'ShowInfoCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/blog/showInfo.js")
                }]
            }

        })
        .state('upPhoto', {
            url: '/upPhoto{name}',
            views: {
                '': {
                    templateUrl: 'modules/front_module/blog/upPhoto.html',
                    controller:'UpPhotoCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/blog/upPhoto.js")
                }]
            }

        })
        .state('notLogin', {
            url: '/notLogin{name}',
            views: {
                '': {
                    templateUrl: 'modules/front_module/blog/not_login.html',
                    controller:'NotLoginCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/blog/not_login.js")
                }]
            }

        })
        .state('notPerm', {
            url: '/notPerm{name}',
            views: {
                '': {
                    templateUrl: 'modules/front_module/blog/not_perm.html',
                    controller:'NotPermCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/blog/not_perm.js")
                }]
            }

        })
        .state('admLogin', {
            url: '/admLogin{name}',
            views: {
                '': {
                    templateUrl: 'modules/back_module/login.html',
                    controller:'AdmLoginCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/back_module/login.js")
                }]
            }

        })
        .state('backHome', {
            url: '/backHome{name}',
            views: {
                '': {
                    templateUrl: 'modules/back_module/home.html',
                    controller:'BackHomeCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/back_module/home.js")
                }]
            }
        })
        .state('userList', {
            url: '/userList{name}',
            views: {
                '': {
                    templateUrl: 'modules/back_module/user_list.html',
                    controller:'UserListCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/back_module/user_list.js")
                }]
            }
        })
        .state('content', {
            url: '/content{name}',
            views: {
                '': {
                    templateUrl: 'modules/back_module/content.html',
                    controller:'ContentCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/back_module/content.js")
                }]
            }
        })
        .state('myVideo', {
            url: '/myVideo{name}/{videoUrl}/{videoType}/{title}?from&to',
            views: {
                '': {
                    templateUrl: 'modules/front_module/blog/video.html',
                    controller:'MyVideoCtrl'
                }
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load("modules/front_module/blog/video.js")
                }]
            }
        })
    $locationProvider.html5Mode(true);
    $ocLazyLoadProvider.config({
        debug: true, //知否启用调试模式
        events:true  //事件绑定是否启用
    });
});


app.factory('locals',['$window',function($window){
    return{        //存储单个属性
        set :function(key,value){
            $window.localStorage[key]=value;
        },        //读取单个属性
        get:function(key,defaultValue){
            return  $window.localStorage[key] || defaultValue;
        },
        setObj: function(key,value){ //存储对象，以JSON格式存储
            var curTime = new Date().getTime();
            localStorage.setItem(key,JSON.stringify({data:value,time:curTime}));
        },        //读取对象
        getObj: function(key,exp){
            var data = localStorage.getItem(key);
            if(data){
                var dataObj = JSON.parse(data);
                if (new Date().getTime() - dataObj.time>exp) {
                    console.log('信息已过期');
                    return false;
                }else{
                    //console.log(dataObj.data);
                    return dataObj.data;
                }
            }else{
                return false;
            }
        },
        clear: function(){
            localStorage.clear();
        }

    }
}]);

app.directive('slider',[function(){
    return {
        scope:{},
        restrict:'AE',
        templateUrl:'modules/front_module/home/slider.html',
        link:function($scope,elm,attr,controller,$interval){

        },
        controller:function($scope,$element,$attrs,$interval,$timeout) {

            var sliderxh = 0;
            var flag= undefined;
            $scope.slidershow = [];
            $scope.slidershow[0] = true;
            $scope.slidershow[1] = false;
            $scope.slidershow[2] = false;
            $scope.slidershow[3] = false;
            $scope.slidershow[4] = false;
            $scope.setslider = function (x) {
                $scope.slidershow[sliderxh] = false;
                $scope.slidershow[x] = true;
                sliderxh = x;
                flag=1;
                $timeout(function(){flag= undefined;},3000);
            };

            $scope.sliderpre = function () {
                $scope.slidershow[sliderxh] = false;
                sliderxh--;
                if(sliderxh<0){
                    sliderxh = sliderxh+100;
                    sliderxh = sliderxh % 5;
                }
                $scope.slidershow[sliderxh] = true;
                flag=1;
                $timeout(function(){flag= undefined;},3000);
            };

            $scope.slidernext=function(){
                $scope.slidershow[sliderxh] = false;
                sliderxh++;
                sliderxh = sliderxh % 5;
                $scope.slidershow[sliderxh] = true;
                flag=1;
                $timeout(function(){flag= undefined;},3000);
            };

            var autoplay = $interval(function () {
                if(flag==1){
                    $scope.slidershow[sliderxh] =true;
                } else{ $scope.slidershow[sliderxh] = false;
                    sliderxh++;
                    sliderxh = sliderxh % 5;
                    $scope.slidershow[sliderxh] =true ;}

            }, 5000);
        }
    };
}]);


app.directive('contentEditable', function() {
    return {
        restrict: 'A' ,
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            // 创建编辑器
            var editor = new wangEditor('editor-trigger');
            editor.onchange = function () {
                // 从 onchange 函数中更新数据
                scope.$apply(function () {
                    var html = editor.$txt.html();
                    ctrl.$setViewValue(html);
                });
            };
            editor.create();
        }
    };
});


app.directive('statusBar',['$ocLazyLoad',function($ocLazyLoad){
    return {
        restrict: 'AE',
        templateUrl: 'directives/statusBar.html',
        link: function ($scope, elm, attr, controller, $interval) {
         
        },
        controller:function($scope,$http,$state,locals,$compile,$timeout,$ocLazyLoad,$rootScope){
            
            var run=$timeout(function(){
                $scope.loginout_show=false;
                $scope.register_show=true;
                $scope.user_name="";
                $scope.loginerr_show=false;
                $scope.user_password="";
                $scope.loginBtn_Show=true;
                $rootScope.loginShow=false;
                $scope.blogBtn_show=false;
                $scope.rem_pwd=false;
                var user=$scope.loginUser;
                var userLogin=angular.element(document.querySelectorAll("#user_login"));
                var loginErr=angular.element(document.querySelectorAll("#login_err"));
                var blogBtn=angular.element(document.querySelectorAll("#blog_btn"));
                //获取user session
                var getUserSession=function(){
                    console.log($scope.loginUser)
                    if($scope.loginUser!=undefined){
                        locals.set('upPost','');
                        $scope.userName=user.name;
                        var html="<span id='goblog' ui-sref='blog({name:&#39;{{userName}}&#39;})'  ng-show='blogBtn_show'  >进入博客</span>";
                        html=$compile(html)($scope);
                        $scope.loginout_show=true;
                        $scope.register_show=false;
                        blogBtn.empty();
                        blogBtn.append(html);
                        $rootScope.loginShow=false;
                        $scope.loginBtn_Show=false;
                        $scope.blogBtn_show=true;
                        locals.set('myName',user.name);//我登录的用户名
                        locals.set('postTypes',user.postTypes);
                        locals.set('name',user.name);
                        locals.setObj('myFocus',user.focus);
                        locals.setObj('friend',user.friend);
                        locals.setObj('myFriend',user.friend);
                        locals.setObj('permission',user.permissions);
                        locals.setObj('photoBooks',user.photoBooks);
                        locals.setObj('myInfo',user.myInfo);
                        locals.setObj('myMessages',user.messages);
                        locals.setObj('lastName',user.name);
                        locals.setObj('fans',user.fans);
                        locals.setObj('focus',user.focus);
                        locals.set('lastLogin',user.lastLogin);
                        locals.set('myHead',user.headImg);
                        var text="<a style='margin-left:20px;'>欢迎回来!</a><a  style='text-decoration:underline;color:rgba(255, 177, 0, 0.93)'>"+user.name+"</a>";
                        userLogin.html(text);
                    }else{
                         $scope.loginout_show=false;
                         $scope.register_show=true;
                        text="<a>您好,请登录!</a>";
                        $scope.loginBtn_Show=true;
                        userLogin.html(text);
                    }
                };

                if(locals.getObj('lastName',1000*3600*24*7)){
                    var name=locals.getObj('lastName',1000*3600*24*7);
                    $rootScope.loginShow=false;
                    $scope.loginBtn_Show=false;
                    $scope.blogBtn_show=true;
                    $scope.loginout_show=true;
                    $scope.register_show=false;
                    var text="<a style='margin-left:20px;'>欢迎回来!</a><a  style='text-decoration:underline;color:rgba(255, 177, 0, 0.93)'>"+name+"</a>";
                    userLogin.html(text);
                    //添加进入博客button
                    var html="<span id='goblog' ui-sref='blog({name:&#39;"+name+"&#39;})'  ng-show='blogBtn_show' >进入博客</span>";
                    html=$compile(html)($scope);
                    blogBtn.empty();
                    blogBtn.append(html);
                }else{
                    locals.set('upPost',true);
                    getUserSession();
                }
                //登录button点击事件
                $scope.login_show=function(){
                    $rootScope.loginShow=!$rootScope.loginShow;
                };
                //提交登录逻辑
                $scope.login=function(){
                    var name=$scope.user_name;
                    var pwd=$scope.user_password;
                    var date=new Date();
                    console.log(pwd+' '+name)
                    var lastLogin=date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
                        date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
                    $http({url:"http://localhost:3000/login",
                        data:{name:name,password:pwd,remPwd:$scope.rem_pwd,lastLogin:lastLogin},
                        method:'POST',
                        withCredentials: true
                    }).then(function(result){
                        console.log(result.data)
                        if(result.data.name==false){
                            $scope.loginerr_show=true;
                            loginErr.text("*用户名错误!").css({'color':'red'})
                        }
                        if(result.data.password==false){
                            $scope.loginerr_show=true;
                            loginErr.text("*密码错误!").css({'color':'red'})
                        }
                        if(result.data.name==true&&result.data.password==true){
                            var name=result.data.user.name;
                            var user=result.data.user;
                            $scope.loginout_show=true;
                            $scope.register_show=false;
                            var html="<span id='goblog' ui-sref='blog({name:&#39;"+name+"&#39;})'  ng-show='blogBtn_show'  >进入博客</span>";
                            html=$compile(html)($scope);
                            blogBtn.empty();
                            blogBtn.append(html);
                            text="<a style='color:#fff;margin-left:20px;'>欢迎回来!</a><a  style='color:rgba(255, 177, 0, 0.93);text-decoration:underline;'>"+user.name+"</a>";
                            userLogin.html(text);
                            loginErr.text("");
                            $scope.loginerr_show=false;
                            $rootScope.loginShow=false;
                            $scope.loginBtn_Show=false;
                            $scope.blogBtn_show=true;
                            locals.set('myName',user.name);//我登录的用户名
                            locals.set('countPost',user.countPost);
                            locals.set('postTypes',user.postTypes);
                            locals.set('name',user.name);
                            locals.setObj('myFocus',user.focus);
                            locals.setObj('friend',user.friend);
                            locals.setObj('myFriend',user.friend);
                            locals.setObj('permission',user.permissions);
                            locals.setObj('photoBooks',user.photoBooks);
                            locals.setObj('myMessages',user.messages);
                            locals.setObj('lastName',user.name);
                            locals.setObj('fans',user.fans);
                            locals.setObj('focus',user.focus);
                            locals.set('lastLogin',user.lastLogin);
                            locals.set('myHead',user.headImg);
                        }
                    }).catch(function(err){
                        console.log(err)
                    })
                };
                /* var notActive=setTimeout(function(){   //访问删除七天未激活用户接口
                 $http({url:"http://localhost:3000/not_active",
                 method:'GET',
                 withCredentials: true
                 }).then(function(result){
                 var outTimeUsers=result.data;
                 }).catch(function(err){
                 console.log(err)
                 });
                 },3000);*/

                $scope.logout=function(){
                    $http({url:"http://localhost:3000/logout",
                        method:'GET',
                        withCredentials: true
                    }).then(function(result){
                        var text="<a style='margin-left:30px;'>您好,请登录!</a>";
                        $scope.loginBtn_Show=true;
                        $scope.loginout_show=false;
                        $scope.register_show=true;
                        $scope.blogBtn_show=false;
                        userLogin.html(text);
                        locals.set('myName','');//清除我的登录名
                        locals.set('myHead','');
                        locals.setObj('lastName','');
                    }).catch(function(err){
                        console.log(err)
                    })
                }
            },800)
        }
    }
}]);

app.directive('headBar',[function(){
    return {
        restrict: 'AE',
        templateUrl: 'directives/headBar.html',
        link: function ($scope, elm, attr, controller, $interval) {
           
        },
        controller:function($scope,$http,$state,locals,$stateParams,$compile,$timeout,$interval){
            var waitTime=200;
            var stateName=locals.getObj('stateName',1000*3600*24);
            var mySet=angular.element(document.querySelector('#mySet'));
            var myMessages=angular.element(document.querySelector('#myMessages'));
            $scope.userName=$stateParams.name;
            $scope.name=$stateParams.name;
            if(stateName!=$stateParams.name||locals.get('upPost')){//访问的博客路径name改变时，需延迟加载给headBar提供请求时间
                waitTime=400;
            }
             var run=function() {
                if (!$scope.loadedData) {
                    if (bindtype) {
                        $timeout.cancel(bindtype);
                    }
                    var bindtype = $timeout(run, 100);
                    return ''
                } else {
                var loginName=$stateParams.name;
                var myMessage='<span ng-show="not_read" style="width:3px;height:3px;position:relative;left:-32px;top:-7px;float:right;"><img style="width:5px;height:5px;" src="images/not_read.png"/></span><span ng-click="reading()" id="message" ui-sref="myHome.messages({name:&#39;'+loginName+'&#39;})"  style="float:right;margin-right:30px;padding:1px 5px;cursor:pointer;width:5px;height:8px;margin-top:9px;background:rgba(234, 197, 36, 0.98);"><img style="width:15px;height:12px;margin-left:-5px;margin-top:-21px;" src="images/read.png"/></span>';
                var myCenter='<span id="my_set" ui-sref="myHome.mySet({name:&#39;'+loginName+'&#39;})"  ng-show="set_show" style="color:#f5410b;">博客中心</span>';
                myCenter=$compile(myCenter)($scope);
                myMessage=$compile(myMessage)($scope);
                mySet.append(myCenter);
                myMessages.append(myMessage);
                var loginTip=angular.element(document.querySelectorAll('#login_tip'));
                $scope.set_show=false;
                $scope.not_read=false;
                $scope.toHome=function(){
                    locals.set('name','');
                };
                $scope.logout=function(){
                    $http({url:"http://localhost:3000/logout",
                        method:'GET',
                        withCredentials: true
                    }).then(function(result){
                        var text='游客，<a  ui-sref="home.headline" style="color:#ccc;font-size:12px;text-decoration:underline;cursor:pointer;">去登录</a>';
                        loginTip.html(text);
                        myMessages.empty();
                        $scope.loginout_show=false;
                        $scope.register_show=true;
                        locals.set('myName','');
                        locals.set('myHead','');
                        locals.setObj('lastName','');
                        $scope.commentname='尚未登录…';
                        $scope.commenthead='images/noHead.png';
                    }).catch(function(err){
                        console.log(err)
                    })
                };

                //检查new messages
                var haveNewMes=$timeout(function(){
                    var messages=locals.getObj('messages',1000*3600*24*7);
                    console.log(messages)
                    if(messages){
                        for(var i=0;i<messages.length;i++){
                            if(messages[i].read==false){
                                $scope.not_read=true;
                                var unNotify=$timeout(function(){
                                    $scope.not_read=true;
                                },1200);
                                var show=$timeout(function(){
                                    $scope.not_read=false;
                                },500);
                            }
                        }
                    }
                },500);
                //消息图标点击事件
                $scope.reading=function(){
                    var messages=locals.getObj('messages',1000*3600*24*7);
                    for(var i=0;i<messages.length;i++){
                        messages[i].read=true;
                    }
                    locals.setObj('messages',messages);
                    $scope.not_read=false;
                    locals.set('upPost',true);
                };

                //判断是否有博主权限
                if(locals.getObj('lastName',1000*3600*24*7)==$stateParams.name){
                    console.log("是博主")
            $scope.managephotos_show=true;
                    $scope.loginout_show=true;
                    $scope.register_show=false;
                    $scope.set_show=true;
                    locals.set('isHost',true);
                    if(!locals.get('name')){
                        var freshName=locals.getObj('lastName',1000*3600*24*7);
                        locals.set('name',freshName);
                    }
                    var text1="<b style='color:#cbcbcb;margin-left:20px;'>欢迎回来，</b><b  style='text-decoration:underline;color:#dacd42;'>"+$stateParams.name+"</b>";
                    text1=$compile(text1)($scope);
                    loginTip.html(text1);
                }else{
                    myMessages.empty();
                    if(locals.getObj('lastName',1000*3600*24*7)){
                        var name=locals.getObj('lastName',1000*3600*24*7);
                        console.log(name+' '+$stateParams.name);
                        var text2="<b style='color:#cbcbcb;margin-left:20px;'>欢迎访问，</b><b  style='text-decoration:underline;color:#cacaca;'>"+name+"</b>";
                        loginTip.html(text2);
                        $scope.loginout_show=true;
                        $scope.register_show=false;
                    }else{
                        locals.set('name',$stateParams.name);
                        var text3='<a>游客，</a><a ui-sref="home.headline" target="_blank" style="cursor:pointer;color:blue;font-size:12px;text-decoration:underline;">去登录</a>';
                        text3=$compile(text3)($scope);
                        loginTip.html(text3);
                        $scope.loginout_show=false;
                        $scope.register_show=true;
                    }
                    console.log("不是博主")
                    locals.set('isHost','');
                }
                var typePosts=locals.getObj('typePosts',1000*3600*24*7)
                console.log('typePosts');
                console.log(typePosts);
            }
           }
            run();

        }
    }
}]);

app.directive('postTypes',[function(){
    return {
        restrict: 'AE',
        transclude: true,
        template: '<div class="my_type" ng-transclude><h4>文章分类</h4></div>',
        link: function ($scope, elm, attr, controller, $interval) {


        },
        controller: function ($scope, $element, $attrs,locals,$compile,$timeout,$stateParams) {
            var stateName=locals.getObj('stateName',1000*3600*24*7);
            var run=function() {
                if (!$scope.loadedData) {
                    if (bindtype) {
                        $timeout.cancel(bindtype);
                    }
                    var bindtype = $timeout(run, 300);
                    return ''
                } else {
                    $scope.posts0_show = false;
                    $scope.posts1_show = false;
                    $scope.posts2_show = false;
                    $scope.posts3_show = false;
                    $scope.posts4_show = false;
                    $scope.posts5_show = false;
                    $scope.posts6_show = false;
                    $scope.posts7_show = false;
                    $scope.posts8_show = false;
                    $scope.posts9_show = false;
                    $scope.id = "";

                    $scope.type0_click = function () {
                        $scope.posts0_show = !$scope.posts0_show;
                    };
                    $scope.type1_click = function () {
                        $scope.posts1_show = !$scope.posts1_show;
                    };
                    $scope.type2_click = function () {
                        $scope.posts2_show = !$scope.posts2_show;
                    };
                    $scope.type3_click = function () {
                        $scope.posts3_show = !$scope.posts3_show;
                    };
                    $scope.type4_click = function () {
                        $scope.posts4_show = !$scope.posts4_show;
                    };
                    $scope.type5_click = function () {
                        $scope.posts5_show = !$scope.posts5_show;
                    };
                    $scope.type6_click = function () {
                        $scope.posts6_show = !$scope.posts6_show;
                    };
                    $scope.type7_click = function () {
                        $scope.posts7_show = !$scope.posts7_show;
                    };
                    $scope.type8_click = function () {
                        $scope.posts8_show = !$scope.posts8_show;
                    };
                    $scope.type9_click = function () {
                        $scope.posts9_show = !$scope.posts9_show;
                    };
                        $scope.type10_click = function () {
                        $scope.posts10_show = !$scope.posts10_show;
                    };
                    $scope.type11_click = function () {
                        $scope.posts11_show = !$scope.posts11_show;
                    };
                    $scope.type12_click = function () {
                        $scope.posts12_show = !$scope.posts12_show;
                    };
                    $scope.type13_click = function () {
                        $scope.posts13_show = !$scope.posts13_show;
                    };
                    $scope.type14_click = function () {
                        $scope.posts14_show = !$scope.posts14_show;
                    };
                    $scope.type15_click = function () {
                        $scope.posts15_show = !$scope.posts15_show;
                    };
                    $scope.type16_click = function () {
                        $scope.posts16_show = !$scope.posts16_show;
                    };
                    $scope.type17_click = function () {
                        $scope.posts17_show = !$scope.posts17_show;
                    };
                    $scope.type18_click = function () {
                        $scope.posts18_show = !$scope.posts18_show;
                    };
                    $scope.type19_click = function () {
                        $scope.posts19_show = !$scope.posts19_show;
                    };
                    $scope.postTypes = locals.get('postTypes');
                    console.log($scope.postTypes)
                    var posts = [];
                    var postTypes = $scope.postTypes.split(",");
                    var type_posts = locals.getObj('typePosts', 1000 * 3600 * 24 * 7);
                    console.log(type_posts)
                    for (var n = 0; n < postTypes.length; n++) {
                        posts[n] = [];
                        for (var m = 0; m < type_posts.length; m++) {
                            if (type_posts[m].type == postTypes[n]) {
                                posts[n].push(type_posts[m]);
                            }
                        }
                    }
                    console.log(posts)
                    for (var i = 0; i < postTypes.length; i++) {
                        if (postTypes[i]) {
                            var type = postTypes[i].split('-');
                            type = type[1];
                            var html = '<p ng-click="type' + i + '_click()"><span><img style="width:15px;height:15px;margin-right:3px;margin-top:-5px;" src="images/mytype.png"/></span><a href="">' + type + '(' + posts[i].length + ')</a></p>'
                                + '<ul class="posts_title" ng-show="posts' + i + '_show"></ul>';
                            html = $compile(html)($scope);
                            $element.append(html);
                            //遍历posts title
                            var postsTitle = angular.element(document.querySelectorAll('.posts_title'));
                            for (var j = 0; j < posts[i].length; j++) {
                                $scope.id = posts[i][j].postId;
                                $scope.name = $stateParams.name;
                                var title = '<li class="post_title"   style="margin-top:3px;margin-bottom:3px;"><span><img style="width:15px;margin-right:3px;height:15px;margin-top:-5px;" src="images/article.png"/></span><a name="{{id}}" ui-sref="logDetail({postId:&#39;{{id}}&#39;,name:&#39;{{name}}&#39;})">' + posts[i][j].title + '</a></li>'; //
                                title = $compile(title)($scope);
                                postsTitle.eq(i).append(title);
                            }
                        }
                    }
                }
            }
            run()
     }
    }
}]);

app.directive('myInfo',[function(){
    return {
        restrict: 'AE',
        templateUrl: 'directives/my_info.html',
        link: function ($scope, elm, attr, $interval) {


        },
        controller: function ($scope, $element, $attrs,locals,$timeout,$http,$stateParams,ngDialog,$cookies) {
            $scope.userName=$stateParams.name;
            var stateName=locals.getObj('stateName',1000*3600*24);
            $scope.rFocus_show=false;
            $scope.rFriend_show=false;
            $scope.focus_show=false;
            $scope.addFriend_show=false;
            $scope.loginTip_show=false;
            var run=function(){
                if (!$scope.loadedData) {
                    if (bindtype) {
                        $timeout.cancel(bindtype);
                    }
                    var bindtype = $timeout(run, 300);
                    return ''
                } else {
                    $scope.headTip_show = false;
                    $scope.countPost = locals.get('countPosts');
                    $scope.friend = locals.getObj('friend', 1000 * 3600 * 24);
                    $scope.focus = locals.getObj('focus', 1000 * 3600 * 24);
                    $scope.myhead = locals.get('headImg');
                    //ngDialog初始化
                    var addFriendTip = function () {
                        ngDialog.open({
                            template: 'directives/addfriendTip.html',
                            className: 'ngdialog-theme-default',
                            //closeByEscape: true,
                            //closeByDocument:true,
                            controller: function ($scope, $timeout) {
                                $scope.show = function () {
                                    $scope.closeThisDialog(); //关闭弹窗
                                }
                                var close = $timeout(function () {
                                    $scope.show();
                                }, 1500)
                            }
                        });
                    };
                    var focusSuccess = function () {
                        ngDialog.open({
                            template: 'directives/focusSuccess.html',
                            className: 'ngdialog-theme-default',
                            controller: function ($scope, $timeout) {
                                $scope.show = function () {
                                    $scope.closeThisDialog(); //关闭弹窗
                                }
                                var close = $timeout(function () {
                                    $scope.show();
                                }, 1500)
                            }
                        });
                    };
                    var lastName = locals.getObj('lastName', 1000 * 3600 * 24 * 7);
                    if ($scope.myhead == 'images/headDefault.png' && lastName == $stateParams.name) {
                        $scope.headTip_show = true;
                    }
                    if (!$scope.focus) {
                        $scope.focus = [];
                    }
                    $scope.focus = $scope.focus.length;
                    $scope.fans = locals.getObj('fans', 1000 * 3600 * 24);
                    if (!$scope.fans) {
                        $scope.fans = [];
                    }
                    $scope.fans = $scope.fans.length;
                    $scope.lastLogin = locals.get('lastLogin');
                    $scope.removeFocus = function () {
                        var myFocus = locals.getObj('myFocus', 1000 * 3600 * 24 * 3);
                        var fans = locals.getObj('fans', 1000 * 3600 * 24 * 3);
                        if (!angular.isArray(fans)) {
                            fans = [];
                        }
                        if (!angular.isArray(myFocus)) {
                            myFocus = [];
                        }
                        var name = locals.getObj('lastName', 1000 * 3600 * 24 * 3);
                        for (var i = 0; i < myFocus.length; i++) {
                            if (myFocus[i].name == $stateParams.name) {
                                myFocus.splice(i, 1);
                            }
                        }
                        locals.setObj('myFocus', myFocus);
                        for (var j = 0; j < fans.length; j++) {
                            if (fans[j].name == name) {
                                fans.splice(i, 1);
                            }
                        }
                        locals.setObj('fans', fans);
                        myFocus = JSON.stringify(myFocus);
                        fans = JSON.stringify(fans);
                        var loginName = locals.getObj('lastName', 1000 * 3600 * 24 * 7);
                        var cName = loginName + 'yblog';
                        var token = $cookies.get(cName);
                        console.log('cookie' + token)
                        $http({
                            url: 'http://localhost:3000/up_focus',
                            method: 'POST',
                            data: {myName: name, name: $stateParams.name, focus: myFocus, fans: fans, token: token},
                            withCredentials: true
                        }).then(function (result) {

                        }).catch(function (err) {
                            console.log(err)
                        });
                        $scope.focus_show = true;
                        $scope.rFocus_show = false;
                        $scope.fans -= 1;
                        //alert($scope.fans)
                        var countFans = $scope.fans.toString();
                        var showFans = angular.element(document.querySelectorAll('#showFans'));
                        showFans.text(countFans);
                        locals.set('upPost', true);//数据变动标志
                    };
                    $scope.removeFriend = function () {
                        var myFriend = locals.getObj('myFriend', 1000 * 3600 * 24 * 3);
                        var friend = locals.getObj('friend', 1000 * 3600 * 24 * 3);
                        if (!angular.isArray(myFriend)) {
                            myFriend = [];
                        }
                        if (!angular.isArray(friend)) {
                            friend = [];
                        }
                        //var friend=[];
                        //var myFriend=[];
                        var name = locals.getObj('lastName', 1000 * 3600 * 24 * 3);
                        for (var i = 0; i < myFriend.length; i++) {
                            if (myFriend[i] == $stateParams.name) {
                                myFriend.splice(i, 1);
                            }
                        }
                        locals.setObj('myFriend', myFriend);
                        for (var j = 0; j < friend.length; j++) {
                            if (friend[j] == name) {
                                friend.splice(i, 1);
                            }
                        }
                        locals.setObj('friend', friend);
                        myFriend = JSON.stringify(myFriend);
                        friend = JSON.stringify(friend);
                        //alert(myFriend+''+friend)
                        var loginName = locals.getObj('lastName', 1000 * 3600 * 24 * 7);
                        var cName = loginName + 'yblog';
                        var token = $cookies.get(cName);
                        console.log('cookie' + token)
                        $http({
                            url: 'http://localhost:3000/up_friend',
                            method: 'POST',
                            data: {
                                myName: name,
                                name: $stateParams.name,
                                myFriend: myFriend,
                                friend: friend,
                                token: token
                            },
                            withCredentials: true
                        }).then(function (result) {

                        }).catch(function (err) {
                            console.log(err)
                        });
                        $scope.addFriend_show = true;
                        $scope.rFriend_show = false;
                        locals.set('upPost', true);//数据变动标志
                    };
                    $scope.addFocus = function () {
                        if (!locals.getObj('lastName', 1000 * 3600 * 24)) {
                            //未登录提示用户登录
                            $scope.loginTip_show = true;
                            var tip = $timeout(function () {
                                $scope.loginTip_show = false;
                            }, 5000);
                        } else {
                            //已经登录执行关注功能
                            var myHead = locals.get('myHead');
                            var head = locals.get('headImg');
                            var myFocus = locals.getObj('myFocus', 1000 * 3600 * 24 * 3);
                            if (!angular.isArray(myFocus)) {
                                myFocus = [];
                            }
                            myFocus.push({name: $stateParams.name, head: head});
                            myFocus = JSON.stringify(myFocus);
                            var name = locals.getObj('lastName', 1000 * 3600 * 24 * 3);
                            var fans = locals.getObj('fans', 1000 * 3600 * 24 * 3);
                            if (!angular.isArray(fans)) {
                                fans = [];
                            }
                            fans.push({name: name, head: myHead});
                            fans = JSON.stringify(fans);
                            //alert(myFocus+''+fans)
                            var loginName = locals.getObj('lastName', 1000 * 3600 * 24 * 7);
                            var cName = loginName + 'yblog';
                            var token = $cookies.get(cName);
                            console.log('cookie' + token)
                            $http({
                                url: 'http://localhost:3000/up_focus',
                                method: 'POST',
                                data: {myName: name, name: $stateParams.name, focus: myFocus, fans: fans, token: token},
                                withCredentials: true
                            }).then(function (result) {
                                focusSuccess();
                            }).catch(function (err) {
                                console.log(err)
                            });

                            $scope.focus_show = false;
                            $scope.rFocus_show = true;
                            $scope.fans += 1;
                            var countFans = $scope.fans.toString();
                            //alert($scope.fans)
                            var showFans = angular.element(document.querySelectorAll('#showFans'));
                            showFans.text(countFans);
                            locals.set('upPost', true);//数据变动标志
                        }
                    };
                    $scope.addFriend = function () {
                        var myHead = locals.get('myHead');
                        var head = locals.get('headImg');
                        if (!locals.getObj('lastName', 1000 * 3600 * 24)) {
                            //未登录提示用户登录
                            $scope.loginTip_show = true;
                            var tip = $timeout(function () {
                                $scope.loginTip_show = false;
                            }, 5000);
                        } else {
                            //已经登录执行关注功能
                            var myFriend = locals.getObj('myFriend', 1000 * 3600 * 24 * 3);
                            if (!angular.isArray(myFriend)) {
                                myFriend = [];
                            }
                            myFriend.push($stateParams.name);
                            myFriend = JSON.stringify(myFriend);
                            var myName = locals.getObj('lastName', 1000 * 3600 * 24 * 3);
                            var friend = locals.getObj('friend', 1000 * 3600 * 24 * 3);
                            if (!angular.isArray(friend)) {
                                friend = [];
                            }
                            friend.push(myName);
                            friend = JSON.stringify(friend);
                            //alert(myFriend+''+friend)
                            var myMessages = locals.getObj('myMessages', 1000 * 3600 * 24);
                            myMessages = JSON.stringify(myMessages);
                            if (!myMessages) {
                                myMessages = [];
                            }
                            var messages = locals.getObj('messages', 1000 * 3600 * 24);
                            if (!angular.isArray(messages)) {
                                messages = [];
                            }
                            var date = new Date();
                            var id = $stateParams.name + date.getTime();
                            var time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
                            var myFriendVal = JSON.parse(myFriend);
                            var friendVal = JSON.parse(friend);
                            var myMessagesVal = JSON.parse(myMessages);
                            //alert(myMessagesVal+' '+friendVal+' '+myFriendVal)
                            var html = '<div><span>' + myName + '</span><span>请求加您为博友！</span>' +
                                '<button ng-click="allow($event,' + id + ')"  style="font-size:12px;margin-right:3px;color;#fff;background:rgba(0, 128, 0, 0.86);border:0;border-radius:2px;width:40px;height:18px;" ng-show="allow_show"><input class="allow_val" ng-show="false" value="' + myName + '-' + $stateParams.name + '-' + myFriendVal + '-' + myMessagesVal + '-' + friendVal + '"/>同意</button>' +
                                '<button ng-click="refuse($event,' + id + ')" style="font-size:12px;color;#fff;background:rgba(170, 0, 0, 0.73);border:0;border-radius:2px;width:40px;height:18px;"  ng-show="refuse_show"><input class="refuse_val" ng-show="false" value="' + myName + '-' + $stateParams.name + '-' + myMessagesVal + '"/>拒绝</button>' +
                                '<span ng-show="allowed_show" style="font-size:12px;color;#ccc;margin-left:20px;">已同意</span><span ng-show="refused_show" style="font-size:12px;color;#ccc;margin-left:20px;">已拒绝</span></div>';
                            var message = {name: myName, Id: id, time: time, read: false, message: html};
                            messages.push(message);
                            //messages=[];
                            messages = JSON.stringify(messages);
                            var loginName = locals.getObj('lastName', 1000 * 3600 * 24 * 7);
                            var cName = loginName + 'yblog';
                            var token = $cookies.get(cName);
                            console.log('cookie' + token)
                            $http({
                                url: 'http://localhost:3000/send_message',
                                method: 'POST',
                                data: {name: $stateParams.name, messages: messages, token: token},
                                withCredentials: true
                            }).then(function (result) {
                                locals.set('upPost', true);
                            }).catch(function (err) {
                                console.log(err)
                            });
                            addFriendTip();
                            $scope.friend = $scope.friend--;
                            locals.set('upPost', true);//数据变动标志
                        }
                    };

                    //关注、加博友button显示控制
                    if (!locals.get('isHost')) {
                        //alert(locals.getObj('myFocus',1000*3600*24))
                        var myFocus = locals.getObj('myFocus', 1000 * 3600 * 24);
                        var myFriend = locals.getObj('myFriend', 1000 * 3600 * 24);
                        if (locals.getObj('lastName', 1000 * 3600 * 24)) {
                            if (!myFocus) {
                                myFocus = [];
                            } else {
                                for (var i = 0; i < myFocus.length; i++) {//检查是否已关注
                                    if (myFocus[i].name == $stateParams.name) {
                                        $scope.rFocus_show = true;//显示取消关注按钮
                                    }
                                }
                            }
                            if (!myFriend) {
                                myFriend = [];
                            } else {

                                for (var j = 0; j < myFriend.length; j++) {//检查是否已关注
                                    if (myFriend[j] == $stateParams.name) {
                                        //alert(myFriend);
                                        $scope.rFriend_show = true;//显示取消关注按钮
                                    }
                                }
                            }
                        }
                        if ($scope.rFocus_show == false) {
                            $scope.focus_show = true;//显示关注按钮
                        }
                        if ($scope.rFriend_show == false) {
                            $scope.addFriend_show = true;//显示关注按钮
                        }
                    }
                }
            }
            run()
        }
    }
}]);

//热门博文Top list组件
app.directive('topList',[function(){
    return {
        restrict: 'AE',
        transclude: true,
        templateUrl: 'directives/top_list.html',
        link: function($scope, elm, attr, $interval) {


        },
        controller: function($scope,$element, $attrs,locals,$timeout,$http,$stateParams) {
            $scope.TopPosts = [];
            $scope.userName = $stateParams.name;
            var run = function () {
                if (!$scope.loadedData) {
                    if (bindtype) {
                        $timeout.cancel(bindtype);
                    }
                    var bindtype = $timeout(run, 100);
                    return ''
                } else {
                    $scope.TopPosts = locals.getObj('topPosts', 1000 * 3600 * 24);
                }
            }
        }
    }
}]);


angular.module('myApp.home', ['ui.router','ngCookies'])
    .controller('HomeCtrl',['$state','$scope','$http','locals','$cookies','$cookieStore','$stateParams','$rootScope',function($state,$scope,$http,locals,$cookies,$cookieStore,$stateParams,$rootScope) {
        $state.go('home.headline');
        $scope.photo1_show=true;
        $scope.photo2_show=false;
        $scope.photo3_show=false;
        $scope.headline_click=function(event){
            angular.element(document.querySelectorAll('#headline_nav div p')).removeClass('headline_active');
            angular.element(document.querySelectorAll('#headline_nav div')).removeClass('headline_active');
            $(event.target).addClass('headline_active');
        };
        $scope.closeLogin=function(){
            $rootScope.loginShow=false;
        };
        $scope.photo1_click=function(){
            $scope.photo1_show=true;
            $scope.photo2_show=false;
            $scope.photo3_show=false;
        };
        $scope.photo2_click=function(){
            $scope.photo1_show=false;
            $scope.photo2_show=true;
            $scope.photo3_show=false;
        };
        $scope.photo3_click=function(){
            $scope.photo1_show=false;
            $scope.photo2_show=false;
            $scope.photo3_show=true;
        }

        $http({url:'http://localhost:3000/checkLogin',
            method:'GET',
            withCredentials: true
        }).then(function(result){
            if(result.data!='undefined'){
                $scope.loginUser=result.data;
            }else{
                return ''
            }
        }).catch(function(err){
            console.log(err)
        })
    }])

angular.module('myApp.home.headline', ['ui.router'])


    .controller('HomeHeadlineCtrl', ['$http','locals','$scope','$rootScope',function($scope,$http,locals,$rootScope) {

    }]);










