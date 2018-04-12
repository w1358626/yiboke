'use strict';
angular.module("myApp.regSuccess",['ui.router']).
controller("RegSuccess",['$scope','$state','$interval','locals',function($scope,$state,$interval,locals){
    $scope.counts=7;
    var timer=$interval(function(){
        if($scope.counts>0){
            $scope.counts--;
        }else{
             $interval.cancel(timer);
            locals.set('name','');//清空用户名，重新加载
            $state.go("home.headline");
        }
    },1000);

}]);