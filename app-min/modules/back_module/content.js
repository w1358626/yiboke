'use strict';

angular.module('myApp.content', ['ui.router',[
        "bower_components/angular-bootstrap/ui-bootstrap-csp.css",
        "bower_components/bootstrap.js",
        "bower_components/angular-bootstrap/ui-bootstrap.min.js"
    ]])


    .controller('ContentCtrl', ['$rootScope','$scope','locals','$stateParams','$state','$compile','$http',function($rootScope,$scope,locals,$stateParams,$state,$compile,$http) {
        $scope.userName=$stateParams.name;
        $scope.topList_show=false;
        $scope.photos_show=false;
        $scope.current_show=false;
        $scope.culture_show=false;
        $scope.health_show=false;
        $scope.live_show=false;
        $scope.travel_show=false;
        $scope.sports_show=false;
        $scope.finance_show=false;
        $scope.car_show=false;
        $scope.updata_show=false;
        $scope.visual_show=false;
        $scope.topGossip_show=false;
        var cName=$stateParams.name+'ymanager';
        var token=$cookies.get(cName);
        console.log('cookie'+token)
        var home={};
        $http({url:'http://www.yblog.site:3000/current_home',
            method:'GET',
            withCredentials: true
        }).then(function(result){
            home=result.data;

        }).catch(function(err){
            console.log(err)
        })

        //菜单选项点击事件
        $scope.topShow=function(){
            $scope.topList_show=!$scope.topList_show;
        };
        $scope.visualShow=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;  $scope.visual_show=true;
            $scope.topThought_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
        };
        $scope.photosShow=function(){
            $scope.photos_show=!$scope.photos_show;
        };
        $scope.filmShow=function(){
            $scope.film_show=!$scope.film_show;
        };
        $scope.currentShow=function(){
            $scope.current_show=!$scope.current_show;
        };
        $scope.cultureShow=function(){
            $scope.culture_show=!$scope.culture_show;
        }
        $scope.healthShow=function(){
            $scope.health_show=!$scope.health_show;
        };
        $scope.liveShow=function(){
            $scope.live_show=!$scope.live_show;
        };
        $scope.travelShow=function(){
            $scope.travel_show=!$scope.travel_show;
        }
        $scope.sportsShow=function(){
            $scope.sports_show=!$scope.sports_show;
        }
        $scope.financeShow=function(){
            $scope.finance_show=!$scope.finance_show;
        };
        $scope.carShow=function(){
            $scope.car_show=!$scope.car_show;
        };
        $scope.updateShow=function(){
            $scope.update_show=!$scope.update_show;
        };
        $scope.newHome=function(){
            var allow=confirm('新的首页数据模型是一个空的数据模型，需要重新填写首页数据。请谨慎使用！');
            if(allow){
              $http({url:'http://www.yblog.site:3000/new_home',
                  data:{token:token},
                  method:'POST',
                  withCredentials: true
              }).then(function(result){

              }).catch(function(err){
                if(err){
                    console.log(err)
                }
            })
            }
        };
        //菜单小选项点击事件
        $scope.headline_show=false;$scope.topVisual_show=false;
        $scope.topHot_show=false;$scope.topWatch_show=false;
        $scope.topExclu_show=false;$scope.topHistory_show=false;
        $scope.topGossip_show=false;$scope.topFinance_show=false;
        $scope.topOld_show=false;$scope.topProject_show=false;
        $scope.topThought_show=false;
        $scope.topActive_show=false;$scope.topStar_show=false;
        $scope.topPlan_show=false;$scope.photosPhoto_show=false;
        $scope.photosSee_show=false;
        $scope.photosGirl_show=false;$scope.filmGossip_show=false;
        $scope.filmMovie_show=false;$scope.film3D_show=false;
        $scope.filmEntert_show=false;$scope.filmHot_show=false;
        $scope.filmAnimation_show=false;
        $scope.currentSocial_show=false;$scope.currentView_show=false;
        $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
        $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
        $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
        $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
        $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
        $scope.healthHealth_show=false;$scope.healthSports_show=false;
        $scope.healthMental_show=false;$scope.liveLive_show=false;
        $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
        $scope.travelTravel_show=false;$scope.travelDrive_show=false;
        $scope.travelNatural_show=false;
        $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
        $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
        $scope.financeFund_show=false;$scope.financeEstate_show=false;
        $scope.carCar_show=false;$scope.carSports_show=false;
        $scope.carShow1_show=false;$scope.update1_show=false;
        $scope.update2_show=false;$scope.update3_show=false;
        $scope.update4_show=false;$scope.update5_show=false;
        $scope.update6_show=false;
        $scope.headlineShow=function(){
           $scope.topVisual_show=false;  $scope.visual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.headline_show=!$scope.headline_show;
        };
        $scope.topVisual=function(){
            $scope.headline_show=false;  $scope.visual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.topVisual_show=true;
        };
        $scope.topHot=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topWatch_show=false;  $scope.visual_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.topHot_show=true;
        };
        $scope.topWatch=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;  $scope.visual_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.topWatch_show=true;
        };
        $scope.topExclu=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topHistory_show=false;  $scope.visual_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.topExclu_show=true;
        };
        $scope.topHistory=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;  $scope.visual_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.topHistory_show=true;
        };
        $scope.topGossip=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topFinance_show=false;  $scope.visual_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.topGossip_show=true;
        };
        $scope.topFinance=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;  $scope.visual_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.topFinance_show=true;
        };
        $scope.topOld=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topProject_show=false;  $scope.visual_show=false;
            $scope.topThought_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.topHistory_show=true;
        };
        $scope.topProject=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;  $scope.visual_show=false;
            $scope.topThought_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.topProject_show=true;
        };
        $scope.topThought=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;  $scope.visual_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.topThought_show=true;
        };
        $scope.topActive=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;  $scope.visual_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.topActive_show=true;
        };
        $scope.topStar=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;$scope.topActive_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;  $scope.visual_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.topStar_show=true;
        };
        $scope.topPlan=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.photosPhoto_show=false;$scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.topPlan_show=true;
        };
        $scope.photosPhoto=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.photosPhoto_show=true;
        };
        $scope.photosSee=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.photosSee_show=true;
        };
        $scope.photosGirl=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.photosGirl_show=true;
        };
        $scope.filmGossip=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;$scope.photosGirl_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.filmGossip_show=true;
        };
        $scope.filmMovie=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.filmMovie_show=true;
        };
        $scope.film3D=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.film3D_show=true;
        };
        $scope.filmEntert=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmHot_show=false;$scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.filmEntert_show=true;
        };
        $scope.filmHot=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.filmHot_show=true;
        };
        $scope.filmAnimation=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.filmAnimation_show=true;
        };
        $scope.currentSocial=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.currentSocial_show=true;
        };
        $scope.currentView=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;$scope.currentSocial_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.currentView_show=true;
        };
        $scope.currentSocialPhoto=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.currentSocialPhoto_show=true;
        };
        $scope.currentMilitaryPhoto=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.currentMilitaryPhoto_show=true;
        };
        $scope.currentMilitary=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
           $scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.currentMilitary_show=true;
        };
        $scope.currentFocus=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.currentFocus_show=true;
        };
        $scope.cultureHistory=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.cultureHistory_show=true;
        };
        $scope.cultureStory=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.cultureStory_show=true;
        };
        $scope.cultureCulturePhoto=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.cultureCulturePhoto_show=true;
        };
        $scope.cultureHistoryPhoto=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.cultureHistoryPhoto_show=true;
        };
        $scope.cultureCustoms=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.cultureCustoms_show=true;
        };
        $scope.cultureCulture=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.cultureCulture_show=true;
        };
        $scope.healthHealth=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.healthHealth_show=true;
        };
        $scope.healthSports=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.healthSports_show=true;
        };
        $scope.healthMental=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.healthMental_show=true;
        };
        $scope.liveLive=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.liveLive_show=true;
        };
        $scope.liveEmotional=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.liveEmotional_show=true;
        };
        $scope.livePhoto=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.liveEmotional_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.livePhoto_show=true;
        };
        $scope.sportsNBA=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.sportsNBA_show=true;
        };
        $scope.sportsCompetition=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.sportsCompetition_show=true;
        };
        $scope.sportsWonderful=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.sportsWonderful_show=true;
        };
        $scope.financeFinance=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.financeFinance_show=true;
        };
        $scope.financeFund=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.financeFund_show=true;
        };
        $scope.financeEstate=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.financeEstate_show=true;
        };
        $scope.carCar=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.carCar_show=true;
        };
        $scope.carSports=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.carSports_show=true;
        };
        $scope.carShow1=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.carShow1_show=true;
        };
        $scope.update1=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.update1_show=true;
        };
        $scope.update2=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.update2_show=true;
        };
        $scope.update3=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=false;
            $scope.update3_show=true;
        };
        $scope.update4=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update5_show=false;$scope.update6_show=false;
            $scope.update4_show=true;
        };
        $scope.update5=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update6_show=false;
            $scope.update5_show=true;
        };
        $scope.update6=function(){
            $scope.headline_show=false;$scope.topVisual_show=false;
            $scope.topHot_show=false;$scope.topWatch_show=false;
            $scope.topExclu_show=false;$scope.topHistory_show=false;
            $scope.topGossip_show=false;$scope.topFinance_show=false;
            $scope.topOld_show=false;$scope.topProject_show=false;
            $scope.topThought_show=false;  $scope.visual_show=false;
            $scope.topActive_show=false;$scope.topStar_show=false;
            $scope.topPlan_show=false;$scope.photosPhoto_show=false;
            $scope.photosSee_show=false;
            $scope.photosGirl_show=false;$scope.filmGossip_show=false;
            $scope.filmMovie_show=false;$scope.film3D_show=false;
            $scope.filmEntert_show=false;$scope.filmHot_show=false;
            $scope.filmAnimation_show=false;
            $scope.currentSocial_show=false;$scope.currentView_show=false;
            $scope.currentSocialPhoto_show=false;$scope.currentMilitaryPhoto_show=false;
            $scope.currentMilitary_show=false;$scope.currentFocus_show=false;
            $scope.cultureHistory_show=false;$scope.cultureStory_show=false;
            $scope.cultureCulturePhoto_show=false;$scope.cultureHistoryPhoto_show=false;
            $scope.cultureCustoms_show=false;$scope.cultureCulture_show=false;
            $scope.healthHealth_show=false;$scope.healthSports_show=false;
            $scope.healthMental_show=false;$scope.liveLive_show=false;
            $scope.liveEmotional_show=false;$scope.livePhoto_show=false;
            $scope.travelTravel_show=false;$scope.travelDrive_show=false;
            $scope.travelNatural_show=false;
            $scope.sportsNBA_show=false;$scope.sportsCompetition_show=false;
            $scope.sportsWonderful_show=false;$scope.financeFinance_show=false;
            $scope.financeFund_show=false;$scope.financeEstate_show=false;
            $scope.carCar_show=false;$scope.carSports_show=false;
            $scope.carShow1_show=false;$scope.update1_show=false;
            $scope.update2_show=false;$scope.update3_show=false;
            $scope.update4_show=false;$scope.update5_show=false;
            $scope.update6_show=true;
        };


        //模块数据提交
        //top headline
        $scope.slider1_src='';$scope.slider1_article='';
        $scope.slider2_src='';$scope.slider2_article='';
        $scope.slider3_src='';$scope.slider3_article='';
        $scope.slider4_src='';$scope.slider4_article='';
        $scope.slider5_src='';$scope.slider5_article='';
        $scope.headline_article1_title='';$scope.headline_article1_des='';$scope.headline_article1='';
        $scope.headline_article2_title='';$scope.headline_article2_des='';$scope.headline_article2='';
        $scope.headline_article3_title='';$scope.headline_article3_des='';$scope.headline_article3='';
        $scope.headline_article4_title='';$scope.headline_article4_des='';$scope.headline_article4='';
        $scope.up_headline=function(){
            var headline={slider1_src:$scope.slider1_src,slider1_article:$scope.slider1_article,
                slider2_src:$scope.slider2_src,slider2_article:$scope.slider2_article,
                slider3_src:$scope.slider3_src,slider3_article:$scope.slider3_article,
                slider4_src:$scope.slider4_src,slider4_article:$scope.slider4_article,
                slider5_src:$scope.slider5_src,slider5_article:$scope.slider5_article,
                headline_article1_title:$scope.headline_article1_title,headline_article1_des:$scope.headline_article1_des,headline_article1:$scope.headline_article1,
                headline_article2_title:$scope.headline_article2_title,headline_article2_des:$scope.headline_article2_des,headline_article2:$scope.headline_article2,
                headline_article3_title:$scope.headline_article3_title,headline_article3_des:$scope.headline_article3_des,headline_article3:$scope.headline_article3,
                headline_article4_title:$scope.headline_article3_title,headline_article4_des:$scope.headline_article4_des,headline_article4:$scope.headline_article4
            };
            $http({url:'http://www.yblog.site:3000/up_home',
                  data:{time:home.time,field:{top_headline:headline}},
                  method:'POST',
                  withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        }

        //top visual
        $scope.topVisual1_src='';$scope.topVisual1_article='';
        $scope.topVisual2_src='';$scope.topVisual2_article='';
        $scope.topVisual3_src='';$scope.topVisual3_article='';
        $scope.topVisual4_src='';$scope.topVisual4_article='';
        $scope.up_topVisual=function(){
          var top_visual={
              topVisual1_src:$scope.topVisual1_sr,topVisual1_article:$scope.topVisual1_article,
              topVisual2_src:$scope.topVisual2_src,topVisual2_article:$scope.topVisual2_article,
              topVisual3_src:$scope.topVisual3_src,topVisual3_article:$scope.topVisual3_article,
              topVisual4_src:$scope.topVisual4_src,topVisual4_article:$scope.topVisual4_article
          };
            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{top_visual:top_visual},token:token},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //top hot
        $scope.topHot1_src='';$scope.topHot1_article='';
        $scope.topHot2_src='';$scope.topHot2_article='';
        $scope.topHot3_title='';$scope.topHot3_des='';$scope.topHot3='';
        $scope.topHot4_title='';$scope.topHot4_des='';$scope.topHot4='';
        $scope.topHot5_title='';$scope.topHot5_des='';$scope.topHot5='';
        $scope.topHot6_title='';$scope.topHot6_des='';$scope.topHot6='';
        $scope.up_topHot=function(){
        var top_hot={
            topHot1_src:$scope.topHot1_src,topHot1_article:$scope.topHot1_article,
            topHot2_src:$scope.topHot2_src,topHot2_article:$scope.topHot2_article,
            topHot3_title:$scope.topHot3_title,topHot3_des:$scope.topHot3_des,topHot3:$scope.topHot3,
            topHot4_title:$scope.topHot4_title,topHot4_des:$scope.topHot4_des,topHot4:$scope.topHot4,
            topHot5_title:$scope.topHot5_title,topHot5_des:$scope.topHot5_des,topHot5:$scope.topHot5,
            topHot6_title:$scope.topHot6_title,topHot6_des:$scope.topHot6_des,topHot6:$scope.topHot6
        };
        $http({url:'http://www.yblog.site:3000/up_home',
            data:{time:home.time,field:{top_hot:top_hot},token:token},
            method:'POST',
            withCredentials: true
        }).then(function(result){

        }).catch(function(err){
            console.log(err)
        })
        }

        //top watch
        $scope.topWatch1_title=''; $scope.topWatch1_des=''; $scope.topWatch1='';
        $scope.topWatch2_title=''; $scope.topWatch2_des=''; $scope.topWatch2='';
        $scope.topWatch3_title=''; $scope.topWatch3_des=''; $scope.topWatch3='';
        $scope.topWatch4_title=''; $scope.topWatch4_des=''; $scope.topWatch4='';
        $scope.topWatch5_title=''; $scope.topWatch5_des=''; $scope.topWatch5='';
        $scope.up_topWatch=function(){
        var top_watch={
            topWatch1_title:$scope.topWatch1_title,topWatch1_des:$scope.topWatch1_des, topWatch1:$scope.topWatch1,
            topWatch2_title:$scope.topWatch2_title,topWatch2_des:$scope.topWatch2_des, topWatch2:$scope.topWatch2,
            topWatch3_title:$scope.topWatch3_title,topWatch3_des:$scope.topWatch3_des,topWatch3:$scope.topWatch3,
            topWatch4_title:$scope.topWatch4_title,topWatch4_des:$scope.topWatch4_des,topWatch4:$scope.topWatch4,
            topWatch5_title:$scope.topWatch5_title,topWatch5_des:$scope.topWatch5_des, topWatch5:$scope.topWatch5
        };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{top_watch:top_watch},token:token},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        }

        //top exclusive
        $scope.topExclu1_title=''; $scope.topExclu1_des=''; $scope.topExclu1='';
        $scope.topExclu2_title=''; $scope.topExclu2_des=''; $scope.topExclu2='';
        $scope.topExclu3_title=''; $scope.topExclu3_des=''; $scope.topExclu3='';
        $scope.topExclu4_title=''; $scope.topExclu4_des=''; $scope.topExclu4='';
        $scope.topExclu5_title=''; $scope.topExclu5_des=''; $scope.topExclu5='';
        $scope.up_topExclu=function(){
            var top_exclusive={
                topExclu1_title:$scope.topExclu1_title,topExclu1_des:$scope.topExclu1_des, topExclu1:$scope.topExclu1,
                topExclu2_title:$scope.topExclu2_title,topExclu2_des:$scope.topExclu2_des, topExclu2:$scope.topExclu2,
                topExclu3_title:$scope.topExclu3_title,topExclu3_des:$scope.topExclu3_des,topExclu3:$scope.topExclu3,
                topExclu4_title:$scope.topExclu4_title,topExclu4_des:$scope.topExclu4_des,topExclu4:$scope.topExclu4,
                topExclu5_title:$scope.topExclu5_title,topExclu5_des:$scope.topExclu5_des, topExclu5:$scope.topExclu5
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{top_exclusive:top_exclusive},token:token},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        }

        //top history
        $scope.topHistory1_title=''; $scope.topHistory1_des=''; $scope.topHistory1='';
        $scope.topHistory2_title=''; $scope.topHistory2_des=''; $scope.topHistory2='';
        $scope.topHistory3_title=''; $scope.topHistory3_des=''; $scope.topHistory3='';
        $scope.topHistory4_title=''; $scope.topHistory4_des=''; $scope.topHistory4='';
        $scope.topHistory5_title=''; $scope.topHistory5_des=''; $scope.topHistory5='';
        $scope.up_topHistory=function(){
            var top_History={
                topHistory1_title:$scope.topHistory1_title,topHistory1_des:$scope.topHistory1_des, topHistory1:$scope.topHistory1,
                topHistory2_title:$scope.topHistory2_title,topHistory2_des:$scope.topHistory2_des, topHistory2:$scope.topHistory2,
                topHistory3_title:$scope.topHistory3_title,topHistory3_des:$scope.topHistory3_des,topHistory3:$scope.topHistory3,
                topHistory4_title:$scope.topHistory4_title,topHistory4_des:$scope.topHistory4_des,topHistory4:$scope.topHistory4,
                topHistory5_title:$scope.topHistory5_title,topHistory5_des:$scope.topHistory5_des, topHistory5:$scope.topHistory5
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{top_history:top_History},token:token},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        }

        //top gossip
        $scope.topGossip1_title=''; $scope.topGossip1_des=''; $scope.topGossip1='';
        $scope.topGossip2_title=''; $scope.topGossip2_des=''; $scope.topGossip2='';
        $scope.topGossip3_title=''; $scope.topGossip3_des=''; $scope.topGossip3='';
        $scope.topGossip4_title=''; $scope.topGossip4_des=''; $scope.topGossip4='';
        $scope.topGossip5_title=''; $scope.topGossip5_des=''; $scope.topGossip5='';
        $scope.up_topGossip=function(){
            var top_Gossip={
                topGossip1_title:$scope.topGossip1_title,topGossip1_des:$scope.topGossip1_des, topGossip1:$scope.topGossip1,
                topGossip2_title:$scope.topGossip2_title,topGossip2_des:$scope.topGossip2_des, topGossip2:$scope.topGossip2,
                topGossip3_title:$scope.topGossip3_title,topGossip3_des:$scope.topGossip3_des,topGossip3:$scope.topGossip3,
                topGossip4_title:$scope.topGossip4_title,topGossip4_des:$scope.topGossip4_des,topGossip4:$scope.topGossip4,
                topGossip5_title:$scope.topGossip5_title,topGossip5_des:$scope.topGossip5_des, topGossip5:$scope.topGossip5
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{top_gossip:top_Gossip},token:token},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        }

        //top finance
        $scope.topFinance1_title=''; $scope.topFinance1_des=''; $scope.topFinance1='';
        $scope.topFinance2_title=''; $scope.topFinance2_des=''; $scope.topFinance2='';
        $scope.topFinance3_title=''; $scope.topFinance3_des=''; $scope.topFinance3='';
        $scope.topFinance4_title=''; $scope.topFinance4_des=''; $scope.topFinance4='';
        $scope.topFinance5_title=''; $scope.topFinance5_des=''; $scope.topFinance5='';
        $scope.up_topFinance=function(){
            var top_Finance={
                topFinance1_title:$scope.topFinance1_title,topFinance1_des:$scope.topFinance1_des, topFinance1:$scope.topFinance1,
                topFinance2_title:$scope.topFinance2_title,topFinance2_des:$scope.topFinance2_des, topFinance2:$scope.topFinance2,
                topFinance3_title:$scope.topFinance3_title,topFinance3_des:$scope.topFinance3_des,topFinance3:$scope.topFinance3,
                topFinance4_title:$scope.topFinance4_title,topFinance4_des:$scope.topFinance4_des,topFinance4:$scope.topFinance4,
                topFinance5_title:$scope.topFinance5_title,topFinance5_des:$scope.topFinance5_des, topFinance5:$scope.topFinance5
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{top_finance:top_Finance},token:token},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //top old
        $scope.topOld1_title=''; $scope.topOld1_des=''; $scope.topOld1='';
        $scope.topOld2_title=''; $scope.topOld2_des=''; $scope.topOld2='';
        $scope.topOld3_title=''; $scope.topOld3_des=''; $scope.topOld3='';
        $scope.topOld4_title=''; $scope.topOld4_des=''; $scope.topOld4='';
        $scope.up_topOld=function(){
            var top_Old={
                topOld1_title:$scope.topOld1_title,topOld1_des:$scope.topOld1_des,topOld1:$scope.topOld1,
                topOld2_title:$scope.topOld2_title,topOld2_des:$scope.topOld2_des,topOld2:$scope.topOld2,
                topOld3_title:$scope.topOld3_title,topOld3_des:$scope.topOld3_des,topOld3:$scope.topOld3,
                topOld4_title:$scope.topOld4_title,topOld4_des:$scope.topOld4_des,topOld4:$scope.topOld4
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{old_headline:top_Old},token:token},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        }

        //top Project
        $scope.topProject1_title=''; $scope.topProject1_des=''; $scope.topProject1='';
        $scope.topProject2_title=''; $scope.topProject2_des=''; $scope.topProject2='';
        $scope.topProject3_title=''; $scope.topProject3_des=''; $scope.topProject3='';
        $scope.topProject4_title=''; $scope.topProject4_des=''; $scope.topProject4='';
        $scope.topProject5_title=''; $scope.topProject5_des=''; $scope.topProject5='';
        $scope.up_topProject=function(){
            var top_Project={
                topProject1_title:$scope.topProject1_title,topProject1_des:$scope.topProject1_des, topProject1:$scope.topProject1,
                topProject2_title:$scope.topProject2_title,topProject2_des:$scope.topProject2_des, topProject2:$scope.topProject2,
                topProject3_title:$scope.topProject3_title,topProject3_des:$scope.topProject3_des,topProject3:$scope.topProject3,
                topProject4_title:$scope.topProject4_title,topProject4_des:$scope.topProject4_des,topProject4:$scope.topProject4,
                topProject5_title:$scope.topProject5_title,topProject5_des:$scope.topProject5_des, topProject5:$scope.topProject5
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{top_hotProject:top_Project},token:token},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //top thought
        $scope.topThought1_title=''; $scope.topThought1_des=''; $scope.topThought1='';
        $scope.topThought2_title=''; $scope.topThought2_des=''; $scope.topThought2='';
        $scope.topThought3_title=''; $scope.topThought3_des=''; $scope.topThought3='';
        $scope.up_topThought=function(){
            var top_Thought={
                topThought1_title:$scope.topThought1_title,topThought1_des:$scope.topThought1_des, topThought1:$scope.topThought1,
                topThought2_title:$scope.topThought2_title,topThought2_des:$scope.topThought2_des, topThought2:$scope.topThought2,
                topThought3_title:$scope.topThought3_title,topThought3_des:$scope.topThought3_des,topThought3:$scope.topThought3,
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{top_thought:top_Thought},token:token},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //top active
        $scope.topActive1_src=''; $scope.topActive1_article='';
        $scope.topActive1_title=''; $scope.topActive1_des=''; $scope.topActive1='';
        $scope.topActive2_title=''; $scope.topActive2_des=''; $scope.topActive2='';
        $scope.topActive3_title=''; $scope.topActive3_des=''; $scope.topActive3='';
        $scope.up_topActive=function(){
            var top_Active={
                topActive1_src:$scope.topActive1_src,topActive1_article:$scope.topActive1_article,
                topActive1_title:$scope.topActive1_title,topActive1_des:$scope.topActive1_des, topActive1:$scope.topActive1,
                topActive2_title:$scope.topActive2_title,topActive2_des:$scope.topActive2_des, topActive2:$scope.topActive2,
                topActive3_title:$scope.topActive3_title,topActive3_des:$scope.topActive3_des,topActive3:$scope.topActive3
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{top_active:top_Active},token:token},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //top plan
        $scope.topPlan1_src=''; $scope.topPlan1_article='';
        $scope.topPlan1_title=''; $scope.topPlan1_des=''; $scope.topPlan1='';
        $scope.topPlan2_title=''; $scope.topPlan2_des=''; $scope.topPlan2='';
        $scope.up_topPlan=function(){
            var top_Plan={
                topPlan1_src:$scope.topPlan1_src,topPlan1_article:$scope.topPlan1_article,
                topPlan1_title:$scope.topPlan1_title,topPlan1_des:$scope.topPlan1_des, topPlan1:$scope.topStar1,
                topPlan2_title:$scope.topPlan2_title,topPlan2_des:$scope.topPlan2_des, topPlan2:$scope.topStar2,
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{top_plan:top_Plan},token:token},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //top star
        $scope.topStar1_src=''; $scope.topStar1_article='';
        $scope.topStar1_title=''; $scope.topStar1_des=''; $scope.topStar1='';
        $scope.topStar2_title=''; $scope.topStar2_des=''; $scope.topStar2='';
        $scope.up_topStar=function(){
            var top_Star={
                topStar1_src:$scope.topStar1_src,topStar1_article:$scope.topStar1_article,
                topStar1_title:$scope.topStar1_title,topStar1_des:$scope.topStar1_des, topStar1:$scope.topStar1,
                topStar2_title:$scope.topStar2_title,topStar2_des:$scope.topStar2_des, topStar2:$scope.topStar2,
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{top_star:top_Star},token:token},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //photos photo
        $scope.photosPhoto1_src='';$scope.photosPhoto1_article='';
        $scope.photosPhoto2_src='';$scope.photosPhoto2_article='';
        $scope.tphotosPhoto3_src='';$scope.photosPhoto3_article='';
        $scope.photosPhoto4_src='';$scope.photosPhoto4_article='';
        $scope.photosPhoto5_src='';$scope.photosPhoto5_article='';
        $scope.photosPhoto6_src='';$scope.photosPhoto6_article='';
        $scope.tphotosPhoto7_src='';$scope.photosPhoto7_article='';
        $scope.photosPhoto8_src='';$scope.photosPhoto8_article='';
        $scope.photosPhoto9_src='';$scope.photosPhoto9_article='';
        $scope.up_photosPhoto=function(){
            var photosPhoto={
                photosPhoto1_src:$scope.photosPhoto1_src,photosPhoto1_article:$scope.photosPhoto1_article,
                photosPhoto2_src:$scope.photosPhoto2_src,photosPhoto2_article:$scope.photosPhoto2_article,
                photosPhoto3_src:$scope.photosPhoto3_src,photosPhoto3_article:$scope.photosPhoto3_article,
                photosPhoto4_src:$scope.photosPhoto4_src,photosPhoto4_article:$scope.photosPhoto4_article,
                photosPhoto5_src:$scope.photosPhoto5_src,photosPhoto5_article:$scope.photosPhoto5_article,
                photosPhoto6_src:$scope.photosPhoto6_src,photosPhoto6_article:$scope.photosPhoto6_article,
                photosPhoto7_src:$scope.photosPhoto7_src,photosPhoto7_article:$scope.photosPhoto7_article,
                photosPhoto8_src:$scope.photosPhoto8_src,photosPhoto8_article:$scope.photosPhoto8_article,
                photosPhoto9_src:$scope.photosPhoto9_src,photosPhoto9_article:$scope.photosPhoto9_article
            };
            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{photos_photo:photosPhoto},token:token},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //photos see
        $scope.photosSee1_src='';$scope.photosSee1_article='';
        $scope.photosSee2_src='';$scope.photosSee2_article='';
        $scope.photosSee3_src='';$scope.photosSee3_article='';
        $scope.photosSee4_src='';$scope.photosSee4_article='';
        $scope.photosSee5_src='';$scope.photosSee5_article='';
        $scope.photosSee6_src='';$scope.photosSee6_article='';
        $scope.photosSee7_src='';$scope.photosSee7_article='';
        $scope.photosSee8_src='';$scope.photosSee8_article='';
        $scope.photosSee9_src='';$scope.photosSee9_article='';
        $scope.up_photosSee=function(){
            var photosSee={
                photosSee1_src:$scope.photosSee1_src,photosSee1_article:$scope.photosSee1_article,
                photosSee2_src:$scope.photosSee2_src,photosSee2_article:$scope.photosSee2_article,
                photosSee3_src:$scope.photosSee3_src,photosSee3_article:$scope.photosSee3_article,
                photosSee4_src:$scope.photosSee4_src,photosSee4_article:$scope.photosSee4_article,
                photosSee5_src:$scope.photosSee5_src,photosSee5_article:$scope.photosSee5_article,
                photosSee6_src:$scope.photosSee6_src,photosSee6_article:$scope.photosSee6_article,
                photosSee7_src:$scope.photosSee7_src,photosSee7_article:$scope.photosSee7_article,
                photosSee8_src:$scope.photosSee8_src,photosSee8_article:$scope.photosSee8_article,
                photosSee9_src:$scope.photosSee9_src,photosSee9_article:$scope.photosSee9_article
            };
            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{photos_seeWorld:photosSee},token:token},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //photos girl
        $scope.photosGirl1_src='';$scope.photosSGirl1_article='';
        $scope.photosGirl2_src='';$scope.photosGirl2_article='';
        $scope.photosGirl3_src='';$scope.photosGirl3_article='';
        $scope.photosGirl4_src='';$scope.photosGirl4_article='';
        $scope.photosGirl5_src='';$scope.photosGirl5_article='';
        $scope.photosGirl6_src='';$scope.photosGirl6_article='';
        $scope.photosGirl7_src='';$scope.photosGirl7_article='';
        $scope.photosGirl8_src='';$scope.photosGirl8_article='';
        $scope.photosGirl9_src='';$scope.photosGirl9_article='';
        $scope.up_photosGirl=function(){
            var photosGirl={
                photosGirl1_src:$scope.photosGirl1_src,photosGirl1_article:$scope.photosGirl1_article,
                photosGirl2_src:$scope.photosGirl2_src,photosGirl2_article:$scope.photosGirl2_article,
                photosGirl3_src:$scope.photosGirl3_src,photosGirl3_article:$scope.photosGirl3_article,
                photosGirl4_src:$scope.photosGirl4_src,photosGirl4_article:$scope.photosGirl4_article,
                photosGirl5_src:$scope.photosGirl5_src,photosGirl5_article:$scope.photosGirl5_article,
                photosGirl6_src:$scope.photosGirl6_src,photosGirl6_article:$scope.photosGirl6_article,
                photosGirl7_src:$scope.photosGirl7_src,photosGirl7_article:$scope.photosGirl7_article,
                photosGirl8_src:$scope.photosGirl8_src,photosGirl8_article:$scope.photosGirl8_article,
                photosGirl9_src:$scope.photosGirl9_src,photosGirl9_article:$scope.photosGirl9_article
            };
            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{photos_girl:photosGirl}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //film gossip
        $scope.filmGossip1_title=''; $scope.filmGossip1_des=''; $scope.filmGossip1='';
        $scope.filmGossip2_title=''; $scope.filmGossip2_des=''; $scope.filmGossip2='';
        $scope.filmGossip3_title=''; $scope.filmGossip3_des=''; $scope.filmGossip3='';
        $scope.filmGossip4_title=''; $scope.filmGossip4_des=''; $scope.filmGossip4='';
        $scope.filmGossip5_title=''; $scope.filmGossip5_des=''; $scope.filmGossip5='';
        $scope.filmGossip6_title=''; $scope.filmGossip6_des=''; $scope.filmGossip6='';
        $scope.up_filmGossip=function(){
            var filmGossip={
                filmGossip1_title:$scope.filmGossip1_title,filmGossip1_des:$scope.filmGossip1_des, filmGossip1:$scope.filmGossip1,
                filmGossip2_title:$scope.filmGossip2_title,filmGossip2_des:$scope.filmGossip2_des, filmGossip2:$scope.filmGossip2,
                filmGossip3_title:$scope.filmGossip3_title,filmGossip3_des:$scope.filmGossip3_des,filmGossip3:$scope.filmGossip3,
                filmGossip4_title:$scope.filmGossip4_title,filmGossip4_des:$scope.filmGossip4_des,filmGossip4:$scope.filmGossip4,
                filmGossip5_title:$scope.filmGossip5_title,filmGossip5_des:$scope.filmGossip5_des, filmGossip5:$scope.filmGossip5,
                filmGossip6_title:$scope.filmGossip6_title,filmGossip6_des:$scope.filmGossip6_des, filmGossip6:$scope.filmGossip6
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{film_gossip:filmGossip}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //film movie
        $scope.filmMovie1_title=''; $scope.filmMovie1_des=''; $scope.filmMovie1='';
        $scope.filmMovie2_title=''; $scope.filmMovie2_des=''; $scope.filmMovie2='';
        $scope.filmMovie3_title=''; $scope.filmMovie3_des=''; $scope.filmMovie3='';
        $scope.filmMovie4_title=''; $scope.filmMovie4_des=''; $scope.filmMovie4='';
        $scope.filmMovie5_title=''; $scope.filmMovie5_des=''; $scope.filmMovie5='';
        $scope.filmMovie6_title=''; $scope.filmMovie6_des=''; $scope.filmMovie6='';
        $scope.up_filmMovie=function(){
            var filmMovie={
                filmMovie1_title:$scope.filmMovie1_title,filmMovie1_des:$scope.filmMovie1_des, filmMovie1:$scope.filmMovie1,
                filmMovie2_title:$scope.filmMovie2_title,filmMovie2_des:$scope.filmMovie2_des, filmMovie2:$scope.filmMovie2,
                filmMovie3_title:$scope.filmMovie3_title,filmMovie3_des:$scope.filmMovie3_des,filmMovie3:$scope.filmMovie3,
                filmMovie4_title:$scope.filmMovie4_title,filmMovie4_des:$scope.filmMovie4_des,filmMovie4:$scope.filmMovie4,
                filmMovie5_title:$scope.filmMovie5_title,filmMovie5_des:$scope.filmMovie5_des, filmMovie5:$scope.filmMovie5,
                filmMovie6_title:$scope.filmMovie6_title,filmMovie6_des:$scope.filmMovie6_des, filmMovie6:$scope.filmMovie6
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{film_movie:filmMovie}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //film 3D
        $scope.film3D1_src='';$scope.film3D1_article='';
        $scope.up_film3D=function(){
            var film3D={
                film3D1_src:$scope.film3D1_src,film3D1_article:$scope.film3D1_article
            };
            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{film_threeD:film3D}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        }

        //film entert
        $scope.filmEntert1_src='';$scope.filmEntert1_article='';
        $scope.up_filmEntert=function(){
            var filmEntert={
                filmEntert1_src:$scope.filmEntert1_src,filmEntert1_article:$scope.filmEntert1_article
            };
            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{film_entertainment:filmEntert}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        }

        //film hot
        $scope.filmHot1_title=''; $scope.filmHot1_des=''; $scope.filmHot1='';
        $scope.filmHot2_title=''; $scope.filmHot2_des=''; $scope.filmHot2='';
        $scope.filmHot3_title=''; $scope.filmHot3_des=''; $scope.filmHot3='';
        $scope.filmHot4_title=''; $scope.filmHot4_des=''; $scope.filmHot4='';
        $scope.filmHot5_title=''; $scope.filmHot5_des=''; $scope.filmHot5='';
        $scope.filmHot6_title=''; $scope.filmHot6_des=''; $scope.filmHot6='';
        $scope.up_filmHot=function(){
            var filmHot={
                filmHot1_title:$scope.filmHot1_title,filmHot1_des:$scope.filmHot1_des, filmHot1:$scope.filmHot1,
                filmHot2_title:$scope.filmHot2_title,filmHot2_des:$scope.filmHot2_des, filmHot2:$scope.filmHot2,
                filmHot3_title:$scope.filmHot3_title,filmHot3_des:$scope.filmHot3_des,filmHot3:$scope.filmHot3,
                filmHot4_title:$scope.filmHot4_title,filmHot4_des:$scope.filmHot4_des,filmHot4:$scope.filmHot4,
                filmHot5_title:$scope.filmHot5_title,filmHot5_des:$scope.filmHot5_des, filmHot5:$scope.filmHot5,
                filmHot6_title:$scope.filmHot6_title,filmHot6_des:$scope.filmHot6_des, filmHot6:$scope.filmHot6
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{film_hot:filmHot}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //film animation
        $scope.filmAnimation1_title=''; $scope.filmAnimation1_des=''; $scope.filmAnimation1='';
        $scope.filmAnimation2_title=''; $scope.filmAnimation2_des=''; $scope.filmAnimation2='';
        $scope.filmAnimation3_title=''; $scope.filmAnimation3_des=''; $scope.filmAnimation3='';
        $scope.filmAnimation4_title=''; $scope.filmAnimation4_des=''; $scope.filmAnimation4='';
        $scope.filmAnimation5_title=''; $scope.filmAnimation5_des=''; $scope.filmAnimation5='';
        $scope.filmAnimation6_title=''; $scope.filmAnimation6_des=''; $scope.filmAnimation6='';
        $scope.up_filmAnimation=function(){
            var filmAnimation={
                filmAnimation1_title:$scope.filmAnimation1_title,filmAnimation1_des:$scope.filmAnimation1_des, filmAnimation1:$scope.filmAnimation1,
                filmAnimation2_title:$scope.filmAnimation2_title,filmAnimation2_des:$scope.filmAnimation2_des, filmAnimation2:$scope.filmAnimation2,
                filmAnimation3_title:$scope.filmAnimation3_title,filmAnimation3_des:$scope.filmAnimation3_des,filmAnimation3:$scope.filmAnimation3,
                filmAnimation4_title:$scope.filmAnimation4_title,filmAnimation4_des:$scope.filmAnimation4_des,filmAnimation4:$scope.filmAnimation4,
                filmAnimation5_title:$scope.filmAnimation5_title,filmAnimation5_des:$scope.filmAnimation5_des, filmAnimation5:$scope.filmAnimation5,
                filmAnimation6_title:$scope.filmAnimation6_title,filmAnimation6_des:$scope.filmAnimation6_des, filmAnimation6:$scope.filmAnimation6
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{film_animation:filmAnimation}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //currentSocial
        $scope.currentSocial1_title=''; $scope.currentSocial1_des=''; $scope.currentSocial1='';
        $scope.currentSocial2_title=''; $scope.currentSocial2_des=''; $scope.currentSocial2='';
        $scope.currentSocial3_title=''; $scope.currentSocial3_des=''; $scope.currentSocial3='';
        $scope.currentSocial4_title=''; $scope.currentSocial4_des=''; $scope.currentSocial4='';
        $scope.currentSocial5_title=''; $scope.currentSocial5_des=''; $scope.currentSocial5='';
        $scope.currentSocial6_title=''; $scope.currentSocial6_des=''; $scope.currentSocial6='';
        $scope.up_currentSocial=function(){
            var currentSocial={
                currentSocial1_title:$scope.currentSocial1_title,currentSocial1_des:$scope.currentSocial1_des, currentSocial1:$scope.currentSocial1,
                currentSocial2_title:$scope.currentSocial2_title,currentSocial2_des:$scope.currentSocial2_des, currentSocial2:$scope.currentSocial2,
                currentSocial3_title:$scope.currentSocial3_title,currentSocial3_des:$scope.currentSocial3_des,currentSocial3:$scope.currentSocial3,
                currentSocial4_title:$scope.currentSocial4_title,currentSocial4_des:$scope.currentSocial4_des,currentSocial4:$scope.currentSocial4,
                currentSocial5_title:$scope.currentSocial5_title,currentSocial5_des:$scope.currentSocial5_des, currentSocial5:$scope.currentSocial5,
                currentSocial6_title:$scope.currentSocial6_title,currentSocial6_des:$scope.currentSocial6_des, currentSocial6:$scope.currentSocial6
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{current_social:currentSocial}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //currentView
        $scope.currentView1_title=''; $scope.currentView1_des=''; $scope.currentView1='';
        $scope.currentView2_title=''; $scope.currentView2_des=''; $scope.currentView2='';
        $scope.currentView3_title=''; $scope.currentView3_des=''; $scope.currentView3='';
        $scope.currentView4_title=''; $scope.currentView4_des=''; $scope.currentView4='';
        $scope.currentView5_title=''; $scope.currentView5_des=''; $scope.currentView5='';
        $scope.currentView6_title=''; $scope.currentView6_des=''; $scope.currentView6='';
        $scope.up_currentView=function(){
            var currentView={
                currentView1_title:$scope.currentView1_title,currentView1_des:$scope.currentView1_des, currentView1:$scope.currentView1,
                currentView2_title:$scope.currentView2_title,currentView2_des:$scope.currentView2_des,currentView2:$scope.currentView2,
                currentView3_title:$scope.currentView3_title,currentView3_des:$scope.currentView3_des,currentView3:$scope.currentView3,
                currentView4_title:$scope.currentView4_title,currentView4_des:$scope.currentView4_des,currentView4:$scope.currentView4,
                currentView5_title:$scope.currentView5_title,currentView5_des:$scope.currentView5_des, currentView5:$scope.currentView5,
                currentView6_title:$scope.currentView6_title,currentView6_des:$scope.currentView6_des, currentView6:$scope.currentView6
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{current_view:currentView}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //currentSocialPhoto
        $scope.currentSocialPhoto1_src='';$scope.currentSocialPhoto1_article='';
        $scope.up_currentSocialPhoto=function(){
            var currentSocialPhoto={
                currentSocialPhoto1_src:$scope.currentSocialPhoto1_src,currentSocialPhoto1_article:$scope.currentSocialPhoto1_article
            };
            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{current_socialPhoto:currentSocialPhoto}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        }

        //currentMilitaryPhoto
        $scope.currentMilitaryPhoto1_src='';$scope.currentMilitaryPhoto1_article='';
        $scope.up_currentMilitaryPhoto=function(){
            var currentMilitaryPhoto={
                currentMilitaryPhoto1_src:$scope.currentMilitaryPhoto1_src,currentMilitaryPhoto1_article:$scope.currentMilitaryPhoto1_article
            };
            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{current_militaryPhoto:currentMilitaryPhoto}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        }

        //currentMilitary
        $scope.currentMilitary1_title=''; $scope.currentMilitary1_des=''; $scope.currentMilitary1='';
        $scope.currentMilitary2_title=''; $scope.currentMilitary2_des=''; $scope.currentMilitary2='';
        $scope.currentMilitary3_title=''; $scope.currentMilitary3_des=''; $scope.currentMilitary3='';
        $scope.fcurrentMilitary4_title=''; $scope.currentMilitary4_des=''; $scope.currentMilitary4='';
        $scope.currentMilitary5_title=''; $scope.currentMilitary5_des=''; $scope.currentMilitary5='';
        $scope.currentMilitary6_title=''; $scope.currentMilitary6_des=''; $scope.currentMilitary6='';
        $scope.up_currentMilitary=function(){
            var currentMilitary={
                currentMilitary1_title:$scope.currentMilitary1_title,currentMilitary1_des:$scope.currentMilitary1_des, currentMilitary1:$scope.currentMilitary1,
                fcurrentMilitary2_title:$scope.currentMilitary2_title,currentMilitary2_des:$scope.currentMilitary2_des,currentMilitary2:$scope.currentMilitary2,
                currentMilitary3_title:$scope.currentMilitary3_title,currentMilitary3_des:$scope.currentMilitary3_des,currentMilitary3:$scope.currentMilitary3,
                currentMilitary4_title:$scope.currentMilitary4_title,currentMilitary4_des:$scope.currentMilitary4_des,currentMilitary4:$scope.currentMilitary4,
                currentMilitary5_title:$scope.currentMilitary5_title,currentMilitary5_des:$scope.currentMilitary5_des,currentMilitary5:$scope.currentMilitary5,
                currentMilitary6_title:$scope.currentMilitary6_title,currentMilitary6_des:$scope.currentMilitary6_des, currentMilitary6:$scope.currentMilitary6
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{current_military:currentMilitary}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //currentFocus
        $scope.currentFocus1_title=''; $scope.currentFocus1_des=''; $scope.currentFocus1='';
        $scope.currentFocus2_title=''; $scope.currentFocus2_des=''; $scope.currentFocus2='';
        $scope.currentFocus3_title=''; $scope.currentFocus3_des=''; $scope.currentFocus3='';
        $scope.currentFocus4_title=''; $scope.currentFocus4_des=''; $scope.currentFocus4='';
        $scope.currentFocus5_title=''; $scope.currentFocus5_des=''; $scope.currentFocus5='';
        $scope.currentFocus6_title=''; $scope.currentFocus6_des=''; $scope.currentFocus6='';
        $scope.up_currentFocus=function(){
            var currentFocus={
                currentFocus1_title:$scope.currentFocus1_title,currentFocus1_des:$scope.currentFocus1_des, currentFocus1:$scope.currentFocus1,
                currentFocus2_title:$scope.currentFocus2_title,currentFocus2_des:$scope.currentFocus2_des,currentFocus2:$scope.currentFocus2,
                currentFocus3_title:$scope.currentFocus3_title,currentFocus3_des:$scope.currentFocus3_des,currentFocus3:$scope.currentFocus3,
                currentFocus4_title:$scope.currentFocus4_title,currentFocus4_des:$scope.currentFocus4_des,currentFocus4:$scope.currentFocus4,
                fcurrentFocus5_title:$scope.currentFocus5_title,currentFocus5_des:$scope.currentFocus5_des,currentFocus5:$scope.currentFocus5,
                currentFocus6_title:$scope.currentFocus6_title,currentFocus6_des:$scope.currentFocus6_des,currentFocus6:$scope.currentFocus6
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{current_focus:currentFocus}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //cultureHistory
        $scope.cultureHistory1_title=''; $scope.cultureHistory1_des=''; $scope.cultureHistory1='';
        $scope.cultureHistory2_title=''; $scope.cultureHistory2_des=''; $scope.cultureHistory2='';
        $scope.cultureHistory3_title=''; $scope.cultureHistory3_des=''; $scope.cultureHistory3='';
        $scope.cultureHistory4_title=''; $scope.cultureHistory4_des=''; $scope.cultureHistory4='';
        $scope.cultureHistory5_title=''; $scope.cultureHistory5_des=''; $scope.cultureHistory5='';
        $scope.cultureHistory6_title=''; $scope.cultureHistory6_des=''; $scope.cultureHistory6='';
        $scope.up_cultureHistory=function(){
            var cultureHistory={
                cultureHistory1_title:$scope.cultureHistory1_title,cultureHistory1_des:$scope.cultureHistory1_des, cultureHistory1:$scope.cultureHistory1,
                cultureHistory2_title:$scope.cultureHistory2_title,cultureHistory2_des:$scope.cultureHistory2_des, cultureHistory2:$scope.cultureHistory2,
                cultureHistory3_title:$scope.cultureHistory3_title,cultureHistory3_des:$scope.cultureHistory3_des,cultureHistory3:$scope.cultureHistory3,
                cultureHistory4_title:$scope.cultureHistory4_title,cultureHistory4_des:$scope.cultureHistory4_des,cultureHistory4:$scope.cultureHistory4,
                cultureHistory5_title:$scope.cultureHistory5_title,cultureHistory5_des:$scope.cultureHistory5_des, cultureHistory5:$scope.cultureHistory5,
                cultureHistory6_title:$scope.cultureHistory6_title,cultureHistory6_des:$scope.cultureHistory6_des, cultureHistory6:$scope.cultureHistory6
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{culture_history:cultureHistory}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //cultureStory
        $scope.cultureStory1_title=''; $scope.cultureStory1_des=''; $scope.cultureStory1='';
        $scope.cultureStory2_title=''; $scope.cultureStory2_des=''; $scope.cultureStory2='';
        $scope.cultureStory3_title=''; $scope.cultureStory3_des=''; $scope.cultureStory3='';
        $scope.cultureStory4_title=''; $scope.cultureStory4_des=''; $scope.cultureStory4='';
        $scope.cultureStory5_title=''; $scope.cultureStory5_des=''; $scope.cultureStory5='';
        $scope.ccultureStory6_title=''; $scope.cultureStory6_des=''; $scope.cultureStory6='';
        $scope.up_cultureStory=function(){
            var cultureStory={
                cultureStory1_title:$scope.cultureStory1_title,cultureStory1_des:$scope.cultureStory1_des, cultureStory1:$scope.cultureStory1,
                cultureStory2_title:$scope.cultureStory2_title,cultureStory2_des:$scope.cultureStory2_des,cultureStory2:$scope.cultureStory2,
                cultureStory3_title:$scope.cultureStory3_title,cultureStory3_des:$scope.cultureStory3_des,cultureStory3:$scope.cultureStory3,
                cultureStory4_title:$scope.cultureStory4_title,cultureStory4_des:$scope.ccultureStory4_des,cultureStory4:$scope.cultureStory4,
                cultureStory5_title:$scope.cultureStory5_title,cultureStory5_des:$scope.cultureStory5_des,cultureStory5:$scope.cultureStory5,
                cultureStory6_title:$scope.ccultureStory6_title,cultureStory6_des:$scope.cultureStory6_des, cultureStory6:$scope.cultureStory6
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{culture_story:cultureStory}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //cultureCulturePhoto
        $scope.cultureCulturePhoto1_src='';$scope.cultureCulturePhoto1_article='';
        $scope.up_cultureCulturePhoto=function(){
            var cultureCulturePhoto={
                cultureCulturePhoto1_src:$scope.cultureCulturePhoto1_src,cultureCulturePhoto1_article:$scope.cultureCulturePhoto1_article
            };
            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{culture_culturePhoto:cultureCulturePhoto}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        }

        //cultureHistoryPhoto
        $scope.cultureHistoryPhoto1_src='';$scope.cultureHistoryPhoto1_article='';
        $scope.up_cultureHistoryPhoto=function(){
            var cultureHistoryPhoto={
                cultureHistoryPhoto1_src:$scope.cultureHistoryPhoto1_src,cultureHistoryPhoto1_article:$scope.cultureHistoryPhoto1_article
            };
            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{culture_historyPhoto:cultureHistoryPhoto}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        }

        //cultureCustoms
        $scope.cultureCustoms1_title=''; $scope.cultureCustoms1_des=''; $scope.cultureCustoms1='';
        $scope.cultureCustoms2_title=''; $scope.cultureCustoms2_des=''; $scope.cultureCustoms2='';
        $scope.cultureCustoms3_title=''; $scope.cultureCustoms3_des=''; $scope.cultureCustoms3='';
        $scope.cultureCustoms4_title=''; $scope.cultureCustoms4_des=''; $scope.cultureCustoms4='';
        $scope.cultureCustoms5_title=''; $scope.cultureCustoms5_des=''; $scope.cultureCustoms5='';
        $scope.cultureCustoms6_title=''; $scope.ccultureCustoms6_des=''; $scope.cultureCustoms6='';
        $scope.up_cultureCustoms=function(){
            var cultureCustoms={
                cultureCustoms1_title:$scope.cultureCustoms1_title,cultureCustoms1_des:$scope.cultureCustoms1_des, cultureCustoms1:$scope.cultureCustoms1,
                cultureCustoms2_title:$scope.cultureCustoms2_title,cultureCustoms2_des:$scope.cultureCustoms2_des,cultureCustoms2:$scope.cultureCustoms2,
                cultureCustoms3_title:$scope.cultureCustoms3_title,cultureCustoms3_des:$scope.cultureCustoms3_des,cultureCustoms3:$scope.cultureCustoms3,
                cultureCustoms4_title:$scope.cultureCustoms4_title,cultureCustoms4_des:$scope.cultureCustoms4_des,cultureCustoms4:$scope.cultureCustoms4,
                cultureCustoms5_title:$scope.cultureCustoms5_title,cultureCustoms5_des:$scope.cultureCustoms5_des,cultureCustoms5:$scope.cultureCustoms5,
                cultureCustoms6_title:$scope.cultureCustoms6_title,cultureCustoms6_des:$scope.cultureCustoms6_des, cultureCustoms6:$scope.cultureCustoms6
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{culture_customs:cultureCustoms}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //cultureCulture
        $scope.cultureCulture1_title=''; $scope.cultureCulture1_des=''; $scope.cultureCulture1='';
        $scope.ccultureCulture2_title=''; $scope.cultureCulture2_des=''; $scope.cultureCulture2='';
        $scope.cultureCulture3_title=''; $scope.cultureCulture3_des=''; $scope.cultureCulture3='';
        $scope.ccultureCulture4_title=''; $scope.cultureCulture4_des=''; $scope.cultureCulture4='';
        $scope.cultureCulture5_title=''; $scope.cultureCulture5_des=''; $scope.cultureCulture5='';
        $scope.cultureCulture6_title=''; $scope.ccultureCulture6_des=''; $scope.ccultureCulture6='';
        $scope.up_cultureCulture=function(){
            var cultureCulture={
                cultureCulture1_title:$scope.cultureCulture1_title,cultureCulture1_des:$scope.cultureCulture1_des, cultureCulture1:$scope.cultureCulture1,
                cultureCulture2_title:$scope.cultureCulture2_title,cultureCulture2_des:$scope.cultureCulture2_des,cultureCulture2:$scope.cultureCulture2,
                cultureCulture3_title:$scope.cultureCulture3_title,cultureCulture3_des:$scope.cultureCulture3_des,cultureCulture3:$scope.cultureCulture3,
                cultureCulture4_title:$scope.cultureCulture4_title,cultureCulture4_des:$scope.cultureCulture4_des,cultureCulture4:$scope.cultureCulture4,
                cultureCulture5_title:$scope.cultureCulture5_title,cultureCulture5_des:$scope.cultureCulture5_des,cultureCulture5:$scope.cultureCulture5,
                cultureCulture6_title:$scope.cultureCulture6_title,cultureCulture6_des:$scope.cultureCulture6_des,cultureCulture6:$scope.cultureCulture6
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{culture_culture:cultureCulture}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //healthHealth
        $scope.healthHealth1_title=''; $scope.healthHealth1_des=''; $scope.healthHealth1='';
        $scope.healthHealth2_title=''; $scope.healthHealth2_des=''; $scope.healthHealth2='';
        $scope.healthHealth3_title=''; $scope.healthHealth3_des=''; $scope.healthHealth3='';
        $scope.healthHealth4_title=''; $scope.healthHealth4_des=''; $scope.healthHealth4='';
        $scope.healthHealth5_title=''; $scope.healthHealth5_des=''; $scope.healthHealth5='';
        $scope.healthHealth6_title=''; $scope.healthHealth6_des=''; $scope.healthHealth6='';
        $scope.up_healthHealth=function(){
            var healthHealth={
                healthHealth1_title:$scope.healthHealth1_title,healthHealth1_des:$scope.healthHealth1_des,healthHealth1:$scope.healthHealth1,
                healthHealth2_title:$scope.healthHealth2_title,healthHealth2_des:$scope.healthHealth2_des,healthHealth2:$scope.healthHealth2,
                healthHealth3_title:$scope.healthHealth3_title,healthHealth3_des:$scope.healthHealth3_des,healthHealth3:$scope.healthHealth3,
                healthHealth4_title:$scope.healthHealth4_title,healthHealth4_des:$scope.healthHealth4_des,healthHealth4:$scope.healthHealth4,
                healthHealth5_title:$scope.healthHealth5_title,healthHealth5_des:$scope.healthHealth5_des,healthHealth5:$scope.healthHealth5,
                healthHealth6_title:$scope.healthHealth6_title,healthHealth6_des:$scope.healthHealth6_des,healthHealth6:$scope.healthHealth6
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{health_health:healthHealth}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //healthSports
        $scope.healthSports1_title=''; $scope.healthSports1_des=''; $scope.healthSports1='';
        $scope.chealthSports2_title=''; $scope.healthSports2_des=''; $scope.healthSports2='';
        $scope.healthSports3_title=''; $scope.healthSports3_des=''; $scope.healthSports3='';
        $scope.healthSports4_title=''; $scope.healthSports4_des=''; $scope.healthSports4='';
        $scope.healthSports5_title=''; $scope.healthSports5_des=''; $scope.healthSports5='';
        $scope.healthSports6_title=''; $scope.healthSports6_des=''; $scope.healthSports6='';
        $scope.up_healthSports=function(){
            var healthSports={
                healthSports1_title:$scope.healthSports1_title,healthSports1_des:$scope.healthSports1_des, healthSports1:$scope.healthSports1,
                healthSports2_title:$scope.healthSports2_title,healthSports2_des:$scope.healthSports2_des,healthSports2:$scope.healthSports2,
                healthSports3_title:$scope.healthSports3_title,healthSports3_des:$scope.healthSports3_des,healthSports3:$scope.healthSports3,
                healthSports4_title:$scope.healthSports4_title,healthSports4_des:$scope.healthSports4_des,healthSports4:$scope.healthSports4,
                healthSports5_title:$scope.healthSports5_title,healthSports5_des:$scope.healthSports5_des,healthSports5:$scope.healthSports5,
                healthSports6_title:$scope.healthSports6_title,healthSports6_des:$scope.healthSports6_des,healthSports6:$scope.healthSports6
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{health_sports:healthSports}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //healthMental
        $scope.healthMental1_src='';$scope.healthMental1_article='';
        $scope.up_healthMental=function(){
            var healthMental={
                healthMental1_src:$scope.healthMental1_src,healthMental1_article:$scope.healthMental1_article
            };
            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{health_mental:healthMental}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        }

        //liveLive
        $scope.liveLive1_title=''; $scope.liveLive1_des=''; $scope.liveLive1='';
        $scope.liveLive2_title=''; $scope.liveLive2_des=''; $scope.liveLive2='';
        $scope.liveLive3_title=''; $scope.liveLive3_des=''; $scope.liveLive3='';
        $scope.liveLive4_title=''; $scope.liveLive4_des=''; $scope.liveLive4='';
        $scope.liveLive5_title=''; $scope.liveLive5_des=''; $scope.liveLive5='';
        $scope.liveLive6_title=''; $scope.liveLive6_des=''; $scope.liveLive6='';
        $scope.up_liveLive=function(){
            var liveLive={
                liveLive1_title:$scope.liveLive1_title,liveLive1_des:$scope.liveLive1_des,liveLive1:$scope.liveLive1,
                liveLive2_title:$scope.liveLive2_title,liveLive2_des:$scope.liveLive2_des,liveLive2:$scope.liveLive2,
                liveLive3_title:$scope.liveLive3_title,hliveLive3_des:$scope.liveLive3_des,liveLive3:$scope.liveLive3,
                liveLive4_title:$scope.liveLive4_title,liveLive4_des:$scope.liveLive4_des,liveLive4:$scope.liveLive4,
                liveLive5_title:$scope.liveLive5_title,liveLive5_des:$scope.liveLive5_des,liveLive5:$scope.liveLive5,
                liveLive6_title:$scope.liveLive6_title,liveLive6_des:$scope.liveLive6_des,liveLive6:$scope.liveLive6
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{live_live:liveLive}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //liveEmotional
        $scope.liveEmotional1_title=''; $scope.liveEmotional1_des=''; $scope.liveEmotional1='';
        $scope.liveEmotional2_title=''; $scope.liveEmotional2_des=''; $scope.liveEmotional2='';
        $scope.liveEmotional3_title=''; $scope.liveEmotional3_des=''; $scope.liveEmotional3='';
        $scope.liveEmotional4_title=''; $scope.liveEmotional4_des=''; $scope.liveEmotional4='';
        $scope.liveEmotional5_title=''; $scope.liveEmotional5_des=''; $scope.liveEmotional5='';
        $scope.liveEmotional6_title=''; $scope.liveEmotional6_des=''; $scope.liveEmotional6='';
        $scope.up_liveEmotional=function(){
            var liveEmotional={
                liveEmotional1_title:$scope.liveEmotional1_title,liveEmotional1_des:$scope.liveEmotional1_des, liveEmotional1:$scope.liveEmotional1,
                liveEmotional2_title:$scope.liveEmotional2_title,liveEmotional2_des:$scope.liveEmotional2_des,liveEmotional2:$scope.liveEmotional2,
                liveEmotional3_title:$scope.liveEmotional3_title,liveEmotional3_des:$scope.liveEmotional3_des,liveEmotional3:$scope.liveEmotional3,
                liveEmotional4_title:$scope.liveEmotional4_title,liveEmotional4_des:$scope.liveEmotional4_des,liveEmotional4:$scope.liveEmotional4,
                liveEmotional5_title:$scope.liveEmotional5_title,liveEmotional5_des:$scope.liveEmotional5_des,liveEmotional5:$scope.liveEmotional5,
                liveEmotional6_title:$scope.liveEmotional6_title,liveEmotional6_des:$scope.liveEmotional6_des,liveEmotional6:$scope.liveEmotional6
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{live_emotional:liveEmotional}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //livePhoto
        $scope.livePhoto1_src='';$scope.livePhoto1_article='';
        $scope.up_livePhoto=function(){
            var livePhoto={
                livePhoto1_src:$scope.livePhoto1_src,livePhoto1_article:$scope.livePhoto1_article
            };
            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{live_photo:livePhoto}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        }

        //travelDrive
        $scope.travelDrive1_title=''; $scope.travelDrive1_des=''; $scope.travelDrive1='';
        $scope.travelDrive2_title=''; $scope.travelDrive2_des=''; $scope.travelDrive2='';
        $scope.travelDrive3_title=''; $scope.travelDrive3_des=''; $scope.travelDrive3='';
        $scope.travelDrive4_title=''; $scope.travelDrive4_des=''; $scope.travelDrive4='';
        $scope.travelDrive5_title=''; $scope.travelDrive5_des=''; $scope.travelDrive5='';
        $scope.travelDrive6_title=''; $scope.travelDrive6_des=''; $scope.travelDrive6='';
        $scope.up_travelDrive=function(){
            var travelDrive={
                travelDrive1_title:$scope.travelDrive1_title,travelDrive1_des:$scope.travelDrive1_des,travelDrive1:$scope.travelDrive1,
                travelDrive2_title:$scope.travelDrive2_title,travelDrive2_des:$scope.travelDrive2_des,travelDrive2:$scope.travelDrive2,
                travelDrive3_title:$scope.travelDrive3_title,travelDrive3_des:$scope.travelDrive3_des,travelDrive3:$scope.travelDrive3,
                travelDrive4_title:$scope.travelDrive4_title,travelDrive4_des:$scope.travelDrive4_des,travelDrive4:$scope.travelDrive4,
                travelDrive5_title:$scope.travelDrive5_title,travelDrive5_des:$scope.travelDrive5_des,travelDrive5:$scope.travelDrive5,
                travelDrive6_title:$scope.travelDrive6_title,travelDrive6_des:$scope.travelDrive6_des,travelDrive6:$scope.travelDrive6
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{travel_drive:travelDrive}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //travelTravel
        $scope.travelTravel1_title=''; $scope.travelTravel1_des=''; $scope.travelTravel1='';
        $scope.travelTravel2_title=''; $scope.travelTravel2_des=''; $scope.travelTravel2='';
        $scope.travelTravel3_title=''; $scope.travelTravel3_des=''; $scope.travelTravel3='';
        $scope.travelTravel4_title=''; $scope.travelTravel4_des=''; $scope.travelTravel4='';
        $scope.travelTravel5_title=''; $scope.travelTravel5_des=''; $scope.travelTravel5='';
        $scope.travelTravel6_title=''; $scope.travelTravel6_des=''; $scope.travelTravel6='';
        $scope.up_travelTravel=function(){
            var travelTravel={
                travelTravel1_title:$scope.travelTravel1_title,travelTravel1_des:$scope.travelTravel1_des, travelTravel1:$scope.travelTravel1,
                ltravelTravel2_title:$scope.travelTravel2_title,travelTravel2_des:$scope.travelTravel2_des,travelTravel2:$scope.travelTravel2,
                travelTravel3_title:$scope.travelTravel3_title,travelTravel3_des:$scope.travelTravel3_des,travelTravel3:$scope.travelTravel3,
                travelTravel4_title:$scope.travelTravel4_title,travelTravel4_des:$scope.travelTravel4_des,travelTravel4:$scope.travelTravel4,
                travelTravel5_title:$scope.travelTravel5_title,travelTravel5_des:$scope.travelTravel5_des,travelTravel5:$scope.travelTravel5,
                travelTravel6_title:$scope.travelTravel6_title,travelTravel6_des:$scope.travelTravel6_des,travelTravel6:$scope.travelTravel6
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{travel_travel:travelTravel}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //travelNatural
        $scope.travelNatural1_src='';$scope.travelNatural1_article='';
        $scope.up_travelNatural=function(){
            var travelNatural={
                travelNatural1_src:$scope.travelNatural1_src,travelNatural1_article:$scope.travelNatural1_article
            };
            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{travel_natural:travelNatural}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        }

        //sportsNBA
        $scope.sportsNBA1_title=''; $scope.sportsNBA1_des=''; $scope.sportsNBA1='';
        $scope.sportsNBA2_title=''; $scope.sportsNBA2_des=''; $scope.sportsNBA2='';
        $scope.sportsNBA3_title=''; $scope.sportsNBA3_des=''; $scope.sportsNBA3='';
        $scope.sportsNBA4_title=''; $scope.sportsNBA4_des=''; $scope.sportsNBA4='';
        $scope.sportsNBA5_title=''; $scope.sportsNBA5_des=''; $scope.sportsNBA5='';
        $scope.sportsNBA6_title=''; $scope.sportsNBA6_des=''; $scope.sportsNBA6='';
        $scope.up_sportsNBA=function(){
            var sportsNBA={
                sportsNBA1_title:$scope.sportsNBA1_title,sportsNBA1_des:$scope.sportsNBA1_des,sportsNBA1:$scope.sportsNBA1,
                sportsNBA2_title:$scope.sportsNBA2_title,sportsNBA2_des:$scope.sportsNBA2_des,sportsNBA2:$scope.sportsNBA2,
                sportsNBA3_title:$scope.sportsNBA3_title,sportsNBA3_des:$scope.sportsNBA3_des,sportsNBA3:$scope.sportsNBA3,
                sportsNBA4_title:$scope.sportsNBA4_title,sportsNBA4_des:$scope.sportsNBA4_des,sportsNBA4:$scope.sportsNBA4,
                sportsNBA5_title:$scope.sportsNBA5_title,sportsNBA5_des:$scope.sportsNBA5_des,sportsNBA5:$scope.sportsNBA5,
                sportsNBA6_title:$scope.sportsNBA6_title,sportsNBA6_des:$scope.sportsNBA6_des,sportsNBA6:$scope.sportsNBA6
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{sports_NBA:sportsNBA}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //sportsCompetition
        $scope.sportsCompetition1_title=''; $scope.sportsCompetition1_des=''; $scope.sportsCompetition1='';
        $scope.sportsCompetition2_title=''; $scope.sportsCompetition2_des=''; $scope.sportsCompetition2='';
        $scope.sportsCompetition3_title=''; $scope.sportsCompetition3_des=''; $scope.sportsCompetition3='';
        $scope.sportsCompetition4_title=''; $scope.sportsCompetition4_des=''; $scope.sportsCompetition4='';
        $scope.sportsCompetition5_title=''; $scope.sportsCompetition5_des=''; $scope.sportsCompetition5='';
        $scope.sportsCompetition6_title=''; $scope.sportsCompetition6_des=''; $scope.sportsCompetition6='';
        $scope.up_sportsCompetition=function(){
            var sportsCompetition={
                sportsCompetition1_title:$scope.sportsCompetition1_title,sportsCompetition1_des:$scope.sportsCompetition1_des, sportsCompetition1:$scope.sportsCompetition1,
                sportsCompetition2_title:$scope.sportsCompetition2_title,sportsCompetition2_des:$scope.sportsCompetition2_des,sportsCompetition2:$scope.sportsCompetition2,
                sportsCompetition3_title:$scope.sportsCompetition3_title,sportsCompetition3_des:$scope.sportsCompetition3_des,sportsCompetition3:$scope.sportsCompetition3,
                sportsCompetition4_title:$scope.sportsCompetition4_title,sportsCompetition4_des:$scope.sportsCompetition4_des,sportsCompetition4:$scope.sportsCompetition4,
                sportsCompetition5_title:$scope.sportsCompetition5_title,sportsCompetition5_des:$scope.sportsCompetition5_des,sportsCompetition5:$scope.sportsCompetition5,
                sportsCompetition6_title:$scope.sportsCompetition6_title,sportsCompetition6_des:$scope.sportsCompetition6_des,sportsCompetition6:$scope.sportsCompetition6
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{sports_competition:sportsCompetition}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //sportsWonderful
        $scope.sportsWonderful1_src='';$scope.sportsWonderful1_article='';
        $scope.up_sportsWonderful=function(){
            var sportsWonderful={
                sportsWonderful1_src:$scope.sportsWonderful1_src,sportsWonderful1_article:$scope.sportsWonderful1_article
            };
            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{sports_wonderful:sportsWonderful}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        }

        //financeFinance
        $scope.financeFinance1_title=''; $scope.financeFinance1_des=''; $scope.financeFinance1='';
        $scope.financeFinance2_title=''; $scope.financeFinance2_des=''; $scope.financeFinance2='';
        $scope.financeFinance3_title=''; $scope.financeFinance3_des=''; $scope.financeFinance3='';
        $scope.financeFinance4_title=''; $scope.financeFinance4_des=''; $scope.financeFinance4='';
        $scope.financeFinance5_title=''; $scope.financeFinance5_des=''; $scope.financeFinance5='';
        $scope.financeFinance6_title=''; $scope.financeFinance6_des=''; $scope.financeFinance6='';
        $scope.up_financeFinance=function(){
            var financeFinance={
                financeFinance1_title:$scope.financeFinance1_title,financeFinance1_des:$scope.financeFinance1_des,financeFinance1:$scope.financeFinance1,
                financeFinance2_title:$scope.financeFinance2_title,financeFinance2_des:$scope.financeFinance2_des,financeFinance2:$scope.financeFinance2,
                financeFinance3_title:$scope.financeFinance3_title,financeFinance3_des:$scope.financeFinance3_des,financeFinance3:$scope.financeFinance3,
                financeFinance4_title:$scope.financeFinance4_title,financeFinance4_des:$scope.financeFinance4_des,financeFinance4:$scope.financeFinance4,
                financeFinance5_title:$scope.financeFinance5_title,financeFinance5_des:$scope.financeFinance5_des,financeFinance5:$scope.financeFinance5,
                financeFinance6_title:$scope.financeFinance6_title,financeFinance6_des:$scope.financeFinance6_des,financeFinance6:$scope.financeFinance6
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{finance_stock:financeFinance}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //financeFund
        $scope.financeFund1_title=''; $scope.financeFund1_des=''; $scope.financeFund1='';
        $scope.financeFund2_title=''; $scope.financeFund2_des=''; $scope.financeFund2='';
        $scope.financeFund3_title=''; $scope.financeFund3_des=''; $scope.financeFund3='';
        $scope.financeFund4_title=''; $scope.financeFund4_des=''; $scope.financeFund4='';
        $scope.financeFund5_title=''; $scope.financeFund5_des=''; $scope.financeFund5='';
        $scope.financeFund6_title=''; $scope.financeFund6_des=''; $scope.financeFund6='';
        $scope.up_financeFund=function(){
            var financeFund={
                financeFund1_title:$scope.financeFund1_title,financeFund1_des:$scope.financeFund1_des, financeFund1:$scope.financeFund1,
                financeFund2_title:$scope.financeFund2_title,financeFund2_des:$scope.financeFund2_des,financeFund2:$scope.financeFund2,
                financeFund3_title:$scope.financeFund3_title,financeFund3_des:$scope.financeFund3_des,financeFund3:$scope.financeFund3,
                financeFund4_title:$scope.financeFund4_title,financeFund4_des:$scope.financeFund4_des,financeFund4:$scope.financeFund4,
                financeFund5_title:$scope.financeFund5_title,financeFund5_des:$scope.financeFund5_des,financeFund5:$scope.financeFund5,
                financeFund6_title:$scope.financeFund6_title,financeFund6_des:$scope.financeFund6_des,financeFund6:$scope.financeFund6
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{finance_fund:financeFund}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //financeEstate
        $scope.financeEstate1_src='';$scope.financeEstate1_article='';
        $scope.up_financeEstate=function(){
            var financeEstate={
                financeEstate1_src:$scope.financeEstate1_src,financeEstate1_article:$scope.financeEstate1_article
            };
            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{finance_estate:financeEstate}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        }


        //carCar
        $scope.carCar1_title=''; $scope.carCar1_des=''; $scope.carCar1='';
        $scope.carCar2_title=''; $scope.carCar2_des=''; $scope.carCar2='';
        $scope.carCar3_title=''; $scope.carCar3_des=''; $scope.carCar3='';
        $scope.carCar4_title=''; $scope.carCar4_des=''; $scope.carCar4='';
        $scope.carCar5_title=''; $scope.carCar5_des=''; $scope.carCar5='';
        $scope.carCar6_title=''; $scope.carCar6_des=''; $scope.carCar6='';
        $scope.up_carCar=function(){
            var carCar={
                carCar1_title:$scope.carCar1_title,carCar1_des:$scope.carCar1_des,carCar1:$scope.carCar1,
                carCar2_title:$scope.carCar2_title,carCar2_des:$scope.carCar2_des,carCar2:$scope.carCar2,
                carCar3_title:$scope.carCar3_title,carCar3_des:$scope.carCar3_des,carCar3:$scope.carCar3,
                carCar4_title:$scope.carCar4_title,carCar4_des:$scope.carCar4_des,carCar4:$scope.carCar4,
                carCar5_title:$scope.carCar5_title,carCar5_des:$scope.carCar5_des,carCar5:$scope.carCar5,
                carCar6_title:$scope.carCar6_title,carCar6_des:$scope.carCar6_des,carCar6:$scope.carCar6
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{car_car:carCar}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //carSports
        $scope.carSports1_title=''; $scope.carSports1_des=''; $scope.carSports1='';
        $scope.carSports2_title=''; $scope.carSports2_des=''; $scope.carSports2='';
        $scope.carSports3_title=''; $scope.carSports3_des=''; $scope.carSports3='';
        $scope.carSports4_title=''; $scope.carSports4_des=''; $scope.carSports4='';
        $scope.carSports5_title=''; $scope.carSports5_des=''; $scope.carSports5='';
        $scope.carSports6_title=''; $scope.carSports6_des=''; $scope.carSports6='';
        $scope.up_carSports=function(){
            var carSports={
                carSports1_title:$scope.carSports1_title,carSports1_des:$scope.carSports1_des, carSports1:$scope.carSports1,
                carSports2_title:$scope.carSports2_title,carSports2_des:$scope.carSports2_des,carSports2:$scope.carSports2,
                carSports3_title:$scope.carSports3_title,carSports3_des:$scope.carSports3_des,carSports3:$scope.carSports3,
                carSports4_title:$scope.carSports4_title,carSports4_des:$scope.carSports4_des,carSports4:$scope.carSports4,
                carSports5_title:$scope.carSports5_title,carSports5_des:$scope.carSports5_des,carSports5:$scope.carSports5,
                carSports6_title:$scope.carSports6_title,carSports6_des:$scope.carSports6_des,carSports6:$scope.carSports6
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{car_sports:carSports}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //financeEstate
        $scope.carShow1_src='';$scope.carShow1_article='';
        $scope.up_carShow=function(){
            var carShow1={
                carShow1_src:$scope.carShow1_src,carShow1_article:$scope.carShow1_article
            };
            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{car_show:carShow1}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        }


        //carCar
        $scope.update11_title=''; $scope.update11_des=''; $scope.update11='';
        $scope.update12_title=''; $scope.update12_des=''; $scope.update12='';
        $scope.update13_title=''; $scope.update13_des=''; $scope.update13='';
        $scope.update14_title=''; $scope.update14_des=''; $scope.update14='';
        $scope.update15_title=''; $scope.update15_des=''; $scope.update15='';
        $scope.update16_title=''; $scope.update16_des=''; $scope.update16='';
        $scope.up_update1=function(){
            var update1={
                update11_title:$scope.update11_title,cupdate11_des:$scope.update11_des,update11:$scope.update11,
                update12_title:$scope.update12_title,update12_des:$scope.update12_des,update12:$scope.update12,
                update13_title:$scope.update13_title,update13_des:$scope.update13_des,update13:$scope.update13,
                update14_title:$scope.update14_title,update14_des:$scope.update14_des,update14:$scope.update14,
                update15_title:$scope.update15_title,update15_des:$scope.update15_des,update15:$scope.update15,
                update16_title:$scope.update16_title,update16_des:$scope.update16_des,update16:$scope.update16
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{update_one:update1}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //update2
        $scope.update21_title=''; $scope.update21_des=''; $scope.update21='';
        $scope.update22_title=''; $scope.update22_des=''; $scope.update22='';
        $scope.update23_title=''; $scope.update23_des=''; $scope.update23='';
        $scope.update24_title=''; $scope.update24_des=''; $scope.update24='';
        $scope.update25_title=''; $scope.update25_des=''; $scope.update25='';
        $scope.update26_title=''; $scope.update26_des=''; $scope.update26='';
        $scope.up_update2=function(){
            var update2={
                update21_title:$scope.update21_title,update21_des:$scope.update21_des,update21:$scope.update21,
                update22_title:$scope.update22_title,update22_des:$scope.update22_des,update22:$scope.update22,
                update23_title:$scope.update23_title,update23_des:$scope.update23_des,update23:$scope.update23,
                update24_title:$scope.update24_title,update24_des:$scope.update24_des,update24:$scope.update24,
                update25_title:$scope.update25_title,update25_des:$scope.update25_des,update25:$scope.update25,
                update26_title:$scope.update26_title,update26_des:$scope.update26_des,update26:$scope.update26
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{update_two:update2}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };
        //update3
        $scope.update31_title=''; $scope.update31_des=''; $scope.update31='';
        $scope.update32_title=''; $scope.update32_des=''; $scope.update32='';
        $scope.update33_title=''; $scope.update33_des=''; $scope.update33='';
        $scope.update34_title=''; $scope.update34_des=''; $scope.update34='';
        $scope.update35_title=''; $scope.update35_des=''; $scope.update35='';
        $scope.update36_title=''; $scope.update36_des=''; $scope.update36='';
        $scope.up_update3=function(){
            var update3={
                update31_title:$scope.update31_title,update31_des:$scope.update31_des,update31:$scope.update31,
                update32_title:$scope.update32_title,update32_des:$scope.update32_des,update32:$scope.update32,
                update33_title:$scope.update33_title,update33_des:$scope.update33_des,update33:$scope.update33,
                update34_title:$scope.update34_title,update34_des:$scope.update34_des,update34:$scope.update34,
                update35_title:$scope.update35_title,update35_des:$scope.update35_des,update35:$scope.update35,
                update36_title:$scope.update36_title,update36_des:$scope.update36_des,update36:$scope.update36
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{update_three:update3}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //update4
        $scope.update41_title=''; $scope.update41_des=''; $scope.update41='';
        $scope.update42_title=''; $scope.update42_des=''; $scope.update42='';
        $scope.update43_title=''; $scope.update43_des=''; $scope.update43='';
        $scope.update44_title=''; $scope.update44_des=''; $scope.update44='';
        $scope.update45_title=''; $scope.update45_des=''; $scope.update45='';
        $scope.update46_title=''; $scope.update46_des=''; $scope.update46='';
        $scope.up_update4=function(){
            var update4={
                update41_title:$scope.update41_title,update41_des:$scope.update41_des,update41:$scope.update41,
                update42_title:$scope.update42_title,update42_des:$scope.update42_des,update42:$scope.update42,
                update43_title:$scope.update43_title,update43_des:$scope.update43_des,update43:$scope.update43,
                update44_title:$scope.update44_title,update44_des:$scope.update44_des,update44:$scope.update44,
                update45_title:$scope.update45_title,update45_des:$scope.update45_des,update45:$scope.update45,
                update46_title:$scope.update46_title,update46_des:$scope.update46_des,update46:$scope.update46
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{update_four:update4}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };
        //update5
        $scope.update51_title=''; $scope.update51_des=''; $scope.update51='';
        $scope.update52_title=''; $scope.update52_des=''; $scope.update52='';
        $scope.update53_title=''; $scope.update53_des=''; $scope.update53='';
        $scope.update54_title=''; $scope.update54_des=''; $scope.update54='';
        $scope.update55_title=''; $scope.update55_des=''; $scope.update55='';
        $scope.update56_title=''; $scope.update56_des=''; $scope.update56='';
        $scope.up_update5=function(){
            var update5={
                update51_title:$scope.update51_title,update51_des:$scope.update51_des,update51:$scope.update51,
                update52_title:$scope.update52_title,update52_des:$scope.update52_des,update52:$scope.update52,
                update53_title:$scope.cupdate53_title,update53_des:$scope.update53_des,update53:$scope.update53,
                update54_title:$scope.update54_title,update54_des:$scope.update54_des,update54:$scope.update54,
                update55_title:$scope.update55_title,update55_des:$scope.update55_des,update55:$scope.update55,
                update56_title:$scope.update56_title,update56_des:$scope.update56_des,update56:$scope.update56
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{update_five:update5}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //update6
        $scope.update61_title=''; $scope.update61_des=''; $scope.update61='';
        $scope.update62_title=''; $scope.update62_des=''; $scope.update62='';
        $scope.update63_title=''; $scope.update63_des=''; $scope.update63='';
        $scope.update64_title=''; $scope.update64_des=''; $scope.update64='';
        $scope.update65_title=''; $scope.update65_des=''; $scope.update65='';
        $scope.update66_title=''; $scope.update66_des=''; $scope.update66='';
        $scope.up_update6=function(){
            var update6={
                update61_title:$scope.update61_title,update61_des:$scope.update61_des,update61:$scope.update61,
                update62_title:$scope.update62_title,update62_des:$scope.update62_des,update62:$scope.update62,
                update63_title:$scope.update63_title,update63_des:$scope.update63_des,update63:$scope.update63,
                update64_title:$scope.update64_title,update64_des:$scope.update64_des,update64:$scope.update64,
                update65_title:$scope.update65_title,update65_des:$scope.update65_des,update65:$scope.update65,
                update66_title:$scope.update66_title,update66_des:$scope.update66_des,update66:$scope.update66
            };

            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,field:{update_six:update6}},
                method:'POST',
                withCredentials: true
            }).then(function(result){

            }).catch(function(err){
                console.log(err)
            })
        };

        //visual
        $scope.visual1_title='';$scope.visual1_photo='';$scope.visual1_url='';$scope.visual1_type='';
        $scope.visual2_title='';$scope.visual2_photo='';$scope.visual2_url='';$scope.visual2_type='';
        $scope.visual3_title='';$scope.visual3_photo='';$scope.visual3_url='';$scope.visual3_type='';
        $scope.visual4_title='';$scope.visual4_photo='';$scope.visual4_url='';$scope.visual4_type='';
        $scope.visual5_title='';$scope.visual5_photo='';$scope.visual5_url='';$scope.visual5_type='';

        $scope.up_visual=function(){
            var visual=[
                {title:$scope.visual1_title,photo:$scope.visual1_photo,url:$scope.visual1_url,type:$scope.visual1_type},
                {title:$scope.visual2_title,photo:$scope.visual2_photo,url:$scope.visual2_url,type:$scope.visual2_type},
                {title:$scope.visual3_title,photo:$scope.visual3_photo,url:$scope.visual3_url,type:$scope.visual3_type},
                {title:$scope.visual4_title,photo:$scope.visual4_photo,url:$scope.visual4_url,type:$scope.visual4_type},
                {title:$scope.visual5_title,photo:$scope.visual5_photo,url:$scope.visual5_url,type:$scope.visual5_type}];
                console.log(visual)
            visual=JSON.stringify(visual)
            $http({url:'http://www.yblog.site:3000/up_home',
                data:{time:home.time,visual:visual},
                method:'POST',
                withCredentials: true
            }).then(function(result){


            }).catch(function(err){
                console.log(err)
            })

        }



    }]);