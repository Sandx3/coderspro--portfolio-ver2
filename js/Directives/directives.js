var ngApp = angular.module('myApp');

ngApp.directive('menuNav', function () {
    return {
        templateUrl: 'components/nav/nav.html',
        scope: {},
        controller: function ($scope) {

        }
    }
});

ngApp.directive('introSection', function () {
    return {
        templateUrl: 'components/intro/intro.html',
        scope: {},
        controller: function ($scope) {

        }
    }
});

ngApp.directive('aboutmeSection', function () {
    return {
        templateUrl: 'components/aboutme/aboutme.html',
        scope: {},
        controller: function ($scope) {

        }
    }
});

ngApp.directive('skillsSection', function () {
    return {
        templateUrl: 'components/skills/skills.html',
        scope: {},
        controller: function ($scope) {

        }
    }
});

ngApp.directive('portfolioSection', function () {
    return {
        templateUrl: 'components/portfolio/portfolio.html',
        scope: {},
        controller: function ($scope) {

        }
    }
});

ngApp.directive('contactSection', function () {
    return {
        templateUrl: 'components/contact/contact.html',
        scope: {},
        controller: function ($scope) {

        }
    }
});

ngApp.directive('changeLanguage', function () {
    return {
        templateUrl: 'components/language/language.html',
        scope: {},
        controller: function ($scope, languageFactory) {
            $scope.changeLanguage = function(language){
                languageFactory.setActiveLanguage(language);
            };

            $scope.languageList = languageFactory.languages;
        }
    }
});


ngApp.directive('changeLanguageImg', function () {
    return {
        templateUrl: 'components/language/languageimg.html',
        scope: {},
        controller: function ($scope, gettextCatalog) {
            $scope.changeLanguage = function(language){
                gettextCatalog.setCurrentLanguage(language);
                document.title = gettextCatalog.getString('My Page - Sandra Ptaszek')
            };

            $scope.languageList = [
                {
                    code: 'pl_PL',
                    label: 'Polski',
                    image: 'assets/images/pl.png'
                },
                {
                    code: 'en',
                    label: 'English',
                    image: 'assets/images/en.png'
                }
            ];
        }
    }
});