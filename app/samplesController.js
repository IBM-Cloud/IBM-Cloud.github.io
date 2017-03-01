angular
    .module('ngSamples')
    .controller('samplesController', function ($scope, samplesFactory, $cookieStore) {

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
            //$scope.LanChecked = language;
            //$scope.LanChecked = 'myLanguage';
        }

        $scope.toggleCategory = function(category) {
            toggleTag($scope.tagP.categories, category);
            //$scope.CatChecked = 'myCategory';
        }

        // Randomly display the samples
        $scope.random = function(){
            return 0.5 - Math.random();
        };

        // Create and then delete cookie - cookies must be enabled to use analytics
        $scope.areCookiesEnabled = false;
        $cookieStore.put("TestCookie", "Test Cookie added!");
        $scope.cookieValue = $cookieStore.get("TestCookie");

        console.log($scope.cookieValue);
        if ($scope.cookieValue) {
            $cookieStore.remove("TestCookie");
            $scope.areCookiesEnabled = true;
        }



        // load data from the factory
        samplesFactory.getSamples().then(function(data) {
            $scope.samples = data.data;
        }).catch(function(error) {
            console.log(error);
        });


    });
