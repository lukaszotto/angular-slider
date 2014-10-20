var sliderApp, host, rate;
//globals
sliderApp = angular.module('sliderApp', []);
host = 'http://localhost/ng-slider';
rate = 1000;
//controller
sliderApp.controller('sliderController', function ($scope, $http, $timeout) {
    $http.get(host + '/images.json').success(function (data) {
        $scope.images = data;
        // Initially the index is at the first image
        $scope.currentIndex = 0; 
         
        $scope.images.forEach(function(image) {
            // make every image invisible
            image.visible = false; 
        });     
        // make the current image visible
        $scope.images[$scope.currentIndex].visible = true; 
        //initial timeout for first slide
        interval = $timeout(function () {
            var counter = $scope.currentIndex;
            counter++;
            $scope.changeSlide(counter);
        }, rate);
        //function to change slide
        $scope.changeSlide = function (slideNumber) {
            //cancel existing timeout
            $timeout.cancel(interval);
            //change slide
            $scope.images[$scope.currentIndex].visible = false;
            $scope.currentIndex = slideNumber;
            $scope.images[slideNumber].visible = true;
            //after slide changed set new interval for next slide
            interval = $timeout(function () {
                var counter = $scope.currentIndex;
                counter++;
                if (counter == $scope.images.length) {
                    counter = 0;
                }
                $scope.changeSlide(counter);
            }, rate);
        };
        
    });


});
