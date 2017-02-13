angular
.module('ngSamples')
.filter('samplesFilter', function() {

  return function(listings, tagP){

    var filtered = [];
    var keepLink = false;

    angular.forEach(listings, function(listing){

      console.log('Flier Loading: ' + listing.language);
      // code copied from MyCatalog - filter by categories and languages
      if (tagP.includeTags.length == 0) {
        keepLink = true;
      } else {
        keepLink = true;
        tagP.includeTags.forEach(function (tag) {
          if (!listing.tags || listing.tags.indexOf(tag) < 0) {
            keepLink = false;
          }
        });
      }

      tagP.excludeTags.forEach(function (tag) {
        if (!listing.tags || listing.tags.indexOf(tag) >= 0) {
          keepLink = false;
        }
      });

      tagP.includeTags.forEach(function (tag) {
        if (!listing.tags || listing.tags.indexOf(tag) < 0) {
          keepLink = false;
        }
      });

      if (keepLink) {
        filtered.push(listing);
      }
      // END - filter by categories and languages


    });

    return filtered;
  }
});
