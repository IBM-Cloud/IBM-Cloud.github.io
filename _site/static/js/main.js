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
    if (filterConfiguration.enabled) {
      var results = [];
      links.forEach(function (link) {
        var keepLink = false;

        // if no tag checked, show everything
        if (filterConfiguration.includeTags.length == 0 &&
          filterConfiguration.excludeTags.length == 0) {
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

        if (keepLink) {
          results.push(link);
        }
      });
      return results;
    } else {
      return links;
    }
  }
});

catalogApp.filter("emoji", function () {
  return function (input) {
    return input ? emojione.toImage(input) : input;
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
      url: "./data/ANTON.json",
      tags: ["curated"]
    },
    {
      url: "./data/FREDERIC.json",
      tags: ["curated"]
    },
    {
      url: "./data/Jake.json",
      tags: ["curated"]
    },
    {
      url: "./data/Other.json",
      tags: ["curated"]
    },
    {
      url: "./data/Ram.json",
      tags: ["curated"]
    },
    {
      url: "./data/Twana.json",
      tags: ["curated"]
    },
    {
      url: "./data/Vidyasagar.json",
      tags: ["curated"]
    }
  ].forEach(function (source) {
    $http.get(source.url).success(function (links) {
      links.forEach(function (link) {
        if (!link.tags) {
          link.tags = [];
        }
        link.tags = link.tags.concat(source.tags);

        if (link.language) {
          link.tags.push(link.language);
        }
        if (link.catogary) {
          link.tags.push(link.catogary);
        }
      })

      $scope.links = $scope.links.concat(links);
      $scope.links.sort(function (link1, link2) {
        return link1.name.localeCompare(link2.name);
      });
    });
  });
});
