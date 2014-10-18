var sliderApp = angular.module('sliderApp', []);

sliderApp.controller('sliderController', function ($scope, $http, $interval) {

    $http.get('/ng-slider/images.json').success(function (data) {
        $scope.images = data;
        
        $scope.currentIndex = 0; // Initially the index is at the first image
         
        $scope.images.forEach(function(image) {
            image.visible = false; // make every image invisible
        });     
        $scope.images[$scope.currentIndex].visible = true; // make the current image visible
        $scope.changeSlide = function (slideNumber) {
            $scope.images[$scope.currentIndex].visible = false;
            $scope.currentIndex = slideNumber;
            $scope.images[slideNumber].visible = true;
        };
        $interval(function () {
            var counter = $scope.currentIndex;
            counter++;
            if (counter == $scope.images.length) {
                counter = 0;
            }
            $scope.changeSlide(counter);
        }, 3000);
    });


});
