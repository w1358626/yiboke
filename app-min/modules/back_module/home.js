'use strict';

angular.module('myApp.backHome', ['ui.router',[
        "bower_components/Chart.js",
        "bower_components/angular-bootstrap/ui-bootstrap-csp.css",
        "bower_components/bootstrap.js",
        "bower_components/angular-bootstrap/ui-bootstrap.min.js"
]])


    .controller('BackHomeCtrl', ['$rootScope','$scope','locals','$stateParams','$state','$compile',function($rootScope,$scope,locals,$stateParams,$state,$compile) {
        $scope.userName=$stateParams.name;


    }])
    .directive('myChart',[function() {
        return {
            scope: {},
            restrict: 'AE',
            template: '<canvas id="canvas" class="col-md-12" responsive="{responsive:true}"></canvas>',
            link: function ($scope, elm, attr, $interval) {


            },
            controller: function ($scope, $element, $attrs, locals, $timeout, $http, $stateParams) {
                var lineChartData = {
                    //X坐标数据
                    labels : ["周一","周二","周三","周四","周五","周六","周末"],
                    datasets : [
                        {
                            //统计表的背景颜色
                            fillColor : "rgba(0,0,255,0.5)",
                            //统计表画笔颜色
                            strokeColor : "#f60",
                            //点的颜色
                            pointColor : "#000;",
                            //点边框的颜色
                            pointStrokeColor : "red",
                            //鼠标触发时点的颜色
                            pointHighlightFill : "red",
                            //鼠标触发时点边框的颜色
                            pointHighlightStroke : "#000",
                            //Y坐标数据
                            data : [300,555,655,714,899,905,1000]
                        },{
                            fillColor : "rgba(0,255,0,0.5)",
                            strokeColor : "rgba(92, 184, 92, 1)",
                            pointColor : "rgba(23, 126, 23, 1)",
                            pointStrokeColor : "#fff",
                            pointHighlightFill : "#fff",
                            pointHighlightStroke : "rgba(151,187,205,1)",
                            data : [314,455,755,814,999,905,1000]
                        }
                        ,{
                            fillColor : "rgba(255,0,0,0.5)",
                            strokeColor : "blue",
                            pointColor : "rgba(23, 126, 23, 1)",
                            pointStrokeColor : "#fff",
                            pointHighlightFill : "#fff",
                            pointHighlightStroke : "rgba(151,187,205,1)",
                            data : [114,255,455,414,599,605,500]
                        }
                    ]

                };

                    var ctx =document.getElementById('canvas');
                        ctx=ctx.getContext("2d");
                    window.myLine = new Chart(ctx).Line(lineChartData, $scope.$eval($attrs.responsive))

            }
        }
    }])
