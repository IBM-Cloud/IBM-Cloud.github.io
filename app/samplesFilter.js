angular
.module('ngSamples')
.filter('samplesFilter', function() {

  return function(listings, tagP){

    var filtered = [];

    console.log('Applying filter', tagP.languages, tagP.categories);

    angular.forEach(listings, function(listing){
      var keepLink = false;

      // listing should at least one of the tags
      if (tagP.languages.length === 0) {
        keepLink = true;
      } else {
        keepLink = false;
        tagP.languages.forEach(function(language) {
          if (listing.language && listing.language.indexOf(language) >= 0) {
            keepLink = true;
          }
        });
      }

      // and listing should contain at least one category
      if (keepLink) {
        if (tagP.categories.length > 0) {
          keepLink = (tagP.categories.indexOf(listing.category) >= 0
            || tagP.categories.indexOf(listing.Subcategory) >= 0);
        }
      }

      if (keepLink) {
        filtered.push(listing);
      }
      // END - filter by categories and languages


    });

    return filtered;
  }
});
