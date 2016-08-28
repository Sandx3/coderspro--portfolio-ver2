var ngApp = angular.module('myApp');

ngApp.factory('languageFactory', function (gettextCatalog) {
     var languages = [
         {
             code: 'pl_PL',
             label: 'Polski'
         },
         {
             code: 'en',
             label: 'English'
         }
     ];

    var setActiveLanguage = function (language) {
        gettextCatalog.setCurrentLanguage(language);
        document.title = gettextCatalog.getString('My Page - Sandra Ptaszek');
    };

    return {
        languages: languages,
        setActiveLanguage: setActiveLanguage
    }
});