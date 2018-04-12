'use strict';

angular.module('myApp.home.visual', ['ui.router'])


    .controller('HomeVisualCtrl', ['$rootScope','$scope','locals','$stateParams','$state','$compile',function($rootScope,$scope,locals,$stateParams,$state,$compile) {
        $scope.userName=$stateParams.name;

    }])