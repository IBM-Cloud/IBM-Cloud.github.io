// listen for request sent over XHR and automatically show/hide spinner
angular.module('ngLoadingSpinner', ['angularSpinners'])
.directive('spinner', ['$http', 'spinnerService', function ($http, spinnerService) {
  return {
    link: function (scope, elm, attrs) {
      scope.isLoading = function () {
        return $http.pendingRequests.length > 0;
      };
      scope.$watch(scope.isLoading, function (loading) {
        if (loading) {
          spinnerService.show('spinner');
        } else {
          spinnerService.hide('spinner');
        }
      });
    }
  };
}]);

var catalogApp = angular.module('catalogApp', ['ngLoadingSpinner', 'ngSanitize']);

catalogApp.filter("filterPanel", function () {
  return function (links, filterConfiguration) {
    var sortbyMostViewed = filterConfiguration.sort;

    var results = [];
    var keepLink = false;

    links.forEach(function (link)
    {

      if(link.MostClicked == sortbyMostViewed && link.MostClicked != ""){
        keepLink = true;
      }

      if (link.Added == sortbyMostViewed && link.Added != ""){
        keepLink = true;
        console.log(sortbyMostViewed);
      }

      // if no tag checked, show everything
      if (filterConfiguration.includeTags.length == 0 && filterConfiguration.excludeTags.length == 0) {
        keepLink = true;
      }



      // if no include, assume all included and let the exclude tag remove some
      if (filterConfiguration.includeTags.length == 0) {
        keepLink = true;
      } else {
        keepLink = true;
        filterConfiguration.includeTags.forEach(function (tag) {
          if (!link.tags || link.tags.indexOf(tag) < 0) {
            keepLink = false;
          }
        });
      }

      filterConfiguration.excludeTags.forEach(function (tag) {
        if (!link.tags || link.tags.indexOf(tag) >= 0) {
          keepLink = false;
        }
      });

      filterConfiguration.includeTags.forEach(function (tag) {
        if (!link.tags || link.tags.indexOf(tag) < 0) {
          keepLink = false;
        }
      });

      if (keepLink) {
        results.push(link);
      }

    });
    return results;
  }
});




catalogApp.controller('MainController', function ($scope, $http) {
  console.info("Initializing MainController");
  $scope.links = [];

  $scope.filterConfiguration = {
    enabled: true,
    includeTags: [],
    excludeTags: []
  };

  $scope.toggleTagConfiguration = function (tag, status) {
    var tagSet = status ? $scope.filterConfiguration.includeTags : $scope.filterConfiguration.excludeTags;
    var position = tagSet.indexOf(tag);
    if (position >= 0) {
      tagSet.splice(position, 1);
    } else {
      tagSet.push(tag);
    }
  }

  $scope.tagFilter = function (tag) {
    if (categories.indexOf(tag) >= 0) {
      return tag;
    } else {
      return null;
    }
  };

  [
    {
      url: "./data/main.json"
    }
  ].forEach(function (source) {
    var i = 0;
    $http.get(source.url).success(function (links) {
      links.forEach(function (link) {
        if (!link.tags) {
          link.tags = [];
        }
        link.tags = link.tags.concat(source.tags);

        if (link.language) {
          link.tags.push(link.language);
        }
        if (link.category) {
          link.tags.push(link.category);
        }
        if (link.MostClicked) {
          link.tags.push(link.MostClicked);
        }
        if (link.search) {
          link.tags.push(link.MostClicked);
        }
        // if state is live
        if (link.State == "live") {
          keepLink = false;
        }
      })
      // view the links randomly everytime, to get better track of top clicks of the links
      $scope.random = function() {
        $(".hrefLink").each(function( index ) {
          if (!$(this).attr('href')){
            $(this).hide();
          }
        });

        return 0.5 - Math.random();
      }

      $scope.links = $scope.links.concat(links);
      $scope.links.sort(function (link1, link2) {
        return link1.name.localeCompare(link2.name);
      });
    });


  });
});
