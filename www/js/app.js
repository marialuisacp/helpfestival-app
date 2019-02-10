/*
 *
 *		Aplicativo Help Festival			
 *		----------------------------------------------------
 *		Desenvolvido por marialuisaufmg@gmail.com
 *
 *
 *
 */

angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform, $ionicHistory) {
	$ionicPlatform.ready(function() {
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
	$ionicHistory.nextViewOptions({
		disableAnimate: true,
		disableBack: true
	});
})

/*
 *
 *			MENU 
 *			------------------
 *
 *			Quem somos
 *			Programa
 *			Bandas
 *			Oficinas
 *			Preletores
 *			Localização
 *			Notícias
 *
 *
 */ 

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'app/components/menu/menu.html',
		controller: 'MenuController'
	})

	.state('app.about', {
		url: '/about',
		views: {
			'menuContent': {
				templateUrl: 'app/pages/about/about.html',
				controller: 'AboutController'
			}
		}
	})

	.state('app.bands', {
			url: '/bands',
			views: {
				'menuContent': {
					templateUrl: 'app/pages/bands/bands.html',
					controller: 'BandsController'
				}
			}
	})
	.state('app.home', {
			url: '/home',
			views: {
				'menuContent': {
					templateUrl: 'app/pages/home/home.html',
					controller: 'HomeController'
				}
			}
	})
	.state('app.lecturers', {
			url: '/lecturers',
			views: {
				'menuContent': {
					templateUrl: 'app/pages/lecturers/lecturers.html',
					controller: 'LecturersController'
				}
			}
	})
	.state('app.news', {
			url: '/news',
			views: {
				'menuContent': {
					templateUrl: 'app/pages/news/news.html',
					controller: 'NewsController'
				}
			}
	})
	.state('app.place', {
			url: '/place',
			views: {
				'menuContent': {
					templateUrl: 'app/pages/place/place.html',
					controller: 'PlaceController'
				}
			}
	})
	.state('app.programming', {
			url: '/programming',
			views: {
				'menuContent': {
					templateUrl: 'app/pages/programming/programming.html',
					controller: 'ProgrammingController'
				}
			}
	})
	.state('app.workshops', {
			url: '/workshops',
			views: {
				'menuContent': {
					templateUrl: 'app/pages/workshops/workshops.html',
					controller: 'WorkshopsController'
				}
			}
	})
	.state('app.partners', {
			url: '/partners',
			views: {
				'menuContent': {
					templateUrl: 'app/pages/partners/partners.html',
					controller: 'PartnersController'
				}
			}
	})
	.state('app.questionary', {
			url: '/questionary',
			views: {
				'menuContent': {
					templateUrl: 'app/pages/questionary/questionary.html',
					controller: 'QuestionaryController'
				}
			}
	})
	.state('app.faq', {
			url: '/faq',
			views: {
				'menuContent': {
					templateUrl: 'app/pages/faq/faq.html',
					controller: 'FaqController'
				}
			}
	})
	.state('app.contact', {
			url: '/contact',
			views: {
				'menuContent': {
					templateUrl: 'app/pages/contact/contact.html',
					controller: 'ContactController'
				}
			}
	});

	$urlRouterProvider.otherwise('/app/home');
});


/* 
 * 
 * 
 * 		Declaracao dos controllers
 * 
 * 
 */
var controllers = angular.module('starter.controllers', []);
