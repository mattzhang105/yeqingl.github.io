var projects = angular.module('projects', ['ui.router'])
projects.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url:'/home',
      templateUrl: 'templates/home.html'
    })

    .state('projects', {
      url:'/projects',
      templateUrl: 'templates/projects.html'
    })

    .state('projects.share', {
      url:'/share',
      templateUrl: 'templates/share.html'
    })

    .state('projects.surf', {
      url:'/surf',
      templateUrl: 'templates/surf.html'
    })

    .state('projects.aqua', {
      url:'/aqua',
      templateUrl: 'templates/aqua.html'
    })

    .state('projects.bridge', {
      url:'/bridge',
      templateUrl: 'templates/bridge.html'
    })

    .state('projects.kc', {
      url:'/korean-cuban',
      templateUrl: 'templates/korean-cuban.html'
    })
});

projects.run(function ($rootScope, $state, $stateParams) {
  $rootScope.$on('$stateChangeSuccess', function() {
    window.scrollTo(0,0);
  });
});
