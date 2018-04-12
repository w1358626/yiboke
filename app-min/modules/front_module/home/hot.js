'use strict';

angular.module('myApp.home.hot', ['ui.router'])


    .controller('HomeHotCtrl', ['$rootScope','$scope','locals','$stateParams','$state','$compile',function($rootScope,$scope,locals,$stateParams,$state,$compile) {
        $scope.userName=$stateParams.name;
    }])