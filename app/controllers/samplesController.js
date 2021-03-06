angular
    .module('ngSamples')
    .controller('samplesController', function ($scope, solutionFactory) {

        $scope.scrollToRight = function () {
            console.log('scrollToRight');
        }

        $scope.scrollToLeft = function () {
            console.log('scrollToLeft');
        }

        // load solutions from the factory
        solutionFactory.getSolutions().then(function (data) {
            $scope.groups = data.data.categories;


        }).catch(function (error) {
            console.log(error);
        });

    });





