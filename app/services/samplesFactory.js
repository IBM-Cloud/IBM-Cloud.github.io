angular
  .module('ngSamples')
  .factory('solutionFactory', function($http){
    function getSolutions(){
      // return $http.get('data/tutorials.json');
      return $http.get('https://raw.githubusercontent.com/ibm-cloud-docs/solution-tutorials/master/tutorials.json');
    }
    return{
      getSolutions: getSolutions
    }
  });
