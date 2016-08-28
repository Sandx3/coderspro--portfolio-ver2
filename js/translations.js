angular.module('myApp').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('en', {"Hi! My name is":"Hi! My name is","I'm a":"I'm a","and a":"and a","future frontend developer!":"future frontend developer!","junior web developer":"junior web developer"});
    gettextCatalog.setStrings('pl_PL', {"About Me":"O mnie","Contact":"Kontakt","Hi! My name is":"Cześć! Nazywam się","I'm a":"Jestem","Language":"Język","My Page - Sandra Ptaszek":"Moja strona - Sandra Ptaszek","Portfolio":"Portfolio","Skills":"Umiejętności","and a":"oraz","future frontend developer!":"przyszłym Frontend Developerem","junior web developer":"Junior Web Developerem"});
/* jshint +W100 */
}]);