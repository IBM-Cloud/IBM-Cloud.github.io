angular
  .module('ngSamples')
  .controller('samplesController', function ($scope, samplesFactory) {

    $scope.samples = [];

    $scope.tagP = {
      all: "live",
      enabled: true,
      includeTags: [],
      excludeTags: []
    }


    // code copied from MyCatalog - filter by categories and languages
    $scope.toggleTagConfiguration = function (tag, status) {
      var tagSet = status ? $scope.tagP.includeTags : $scope.tagP.excludeTags;
      var position = tagSet.indexOf(tag);
      if (position >= 0) {
        tagSet.splice(position, 1);
      } else {
        tagSet.push(tag);
      }
    }
    // END - filter by categories and languages



    // Randomly disply the samples
    /*
    $scope.random = function(){
        return 0.5 - Math.random();
    };
    */

    // load data from the factory
    samplesFactory.getSamples().then(function(data) {
      $scope.samples = data.data;
    }).catch(function(error) {
      //console.log(error);
    });


});
