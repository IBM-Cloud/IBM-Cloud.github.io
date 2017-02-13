angular
  .module('ngSamples')
  .controller('samplesController', function ($scope, samplesFactory) {

    $scope.samples = [];

    $scope.tagP = {
      all: "live",
      enabled: true,
      languages: [],
      categories: []
    }

    function toggleTag(tagSet, tag) {
      var position = tagSet.indexOf(tag);
      if (position >= 0) {
        tagSet.splice(position, 1);
      } else {
        tagSet.push(tag);
      }
    }

    $scope.toggleLanguage = function(language) {
      toggleTag($scope.tagP.languages, language);
    }

    $scope.toggleCategory = function(category) {
      toggleTag($scope.tagP.categories, category);
    }

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
