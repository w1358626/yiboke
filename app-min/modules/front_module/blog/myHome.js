'use strict';

angular.module('myApp.myHome',['ui.router'])

    .controller('MyHomeCtrl',['$scope','locals','$state','$stateParams','$http',function($scope,locals,$state,$stateParams,$http){
        $scope.userName=$stateParams.name;

    }])