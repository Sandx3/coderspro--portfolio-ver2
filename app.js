var app = angular.module("myApp", ['ui.router', 'duScroll','gettext']);

app.run(function (gettextCatalog) {
	gettextCatalog.setCurrentLanguage('en');
});

app.config(function($stateProvider){
	$stateProvider
		.state('nav', {
			url: '/nav',
			templateUrl: 'components/nav.html'
		})
		.state('intro', {
			url: '/intro',
			template: 'components/intro.html'
		})
		.state('aboutme', {
			url: '/aboutme',
			template: 'components/aboutme.html'
		})
		.state('interests', {
			url: '/interests',
			template: 'components/interests.html'
		})
});
