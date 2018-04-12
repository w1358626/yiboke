'use strict';

angular.module('myApp.home.list', ['ui.router'])


    .controller('HomeListCtrl', ['$rootScope','$scope','locals','$stateParams','$state','$compile',function($rootScope,$scope,locals,$stateParams,$state,$compile) {
        $scope.userName=$stateParams.name;

    }])