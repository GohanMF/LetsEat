﻿var app = angular.module('LetsEatApp', ['ionic', 'angularCharts', ])
.controller('LetsEatController', ['$scope' ,'$ionicSideMenuDelegate', '$ionicLoading', function ($scope, $ionicSideMenuDelegate, $ionicLoading) {

    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };


    $scope.config = {
        title: '',
        tooltips: true,
        labels: false,
        width: "100%",
        mouseover: function () { },
        mouseout: function () { },
        click: function (d) {


            $ionicLoading.show({
                template: d.data.tooltip,
                duration: 2000
            });

            $scope.winner = d.data.tooltip;

        },
        legend: {
            display: true,
            //could be 'left, right'
            position: 'left',
            htmlEnabled: false
        }
    };

    $scope.data = {
        series: ['Sales', 'Income', 'Expense', 'Laptops', 'Keyboards'],
        data: [{
            x: "Kebab",
            y: [1],
            tooltip: "Kebab"
        }, {
            x: "pans",
            y: [1],
            tooltip: "pans"
        }, {
            x: "pizza",
            y: [1],
            tooltip: "pizza"
        }, {
            x: "sopa",
            y: [1],
            tooltip: "sopa"
        }]
    };


    $scope.startSpin = function () {

        var time1 = Math.floor((Math.random() * 5000) + 5000);
        var degree1 = Math.random() + 1;


        AnimateRotate(time1, degree1);

    }


    function AnimateRotate(duration, angle) {

        var $elem = $('svg');
        var leftRight
        if ((Math.floor(Math.random() * 100) % 2) == 0) {
            leftRight = "-"
        }
        else {
            leftRight = "+"
        }
        $({ deg: 0 }).animate({ deg: leftRight + ((duration) * angle) },
            {
                duration: duration,
                step: function (now) {
                    $elem.css({ transform: 'rotate(' + now + 'deg)' });
                },
                complete: function () {

                    var idLeftLower = 0
                    var numberLeftLower = 90000

                    var pieItems = $('g>g')

                    for (var a = 0 ; a <= pieItems.length - 1 ; a++)

                        if (angular.element(pieItems[a]).position().left < numberLeftLower) {
                            numberLeftLower = angular.element(pieItems[a]).position().left;
                            idLeftLower = a;



                        }

                    $(".winner").text(pieItems[idLeftLower].__data__.data.tooltip);


                }



            });


    }


}])

.controller('letsGetPlaces', ['$scope','getPlaces', '$routeParams', function($scope, getPlaces, $routeParams) {
    console.log("im in lista")
  
}])
.controller('letsGetPlace', ['$scope','getPlace', '$routeParams', function($scope, getPlaces, $routeParams) {
    console.log("im in item")
  
}]);

