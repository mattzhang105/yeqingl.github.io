var projects = angular.module('projects', ['ui.router'])
projects.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url:'/home',
      templateUrl: 'templates/home.html'
    })

    .state('home.projects', {
      url:'/projects',
      templateUrl: 'templates/projects.html'
    })

    .state('home.projects.share', {
      url:'/share',
      templateUrl: 'templates/share.html'
    })

    .state('home.projects.surf', {
      url:'/surf',
      templateUrl: 'templates/surf.html'
    })

    .state('home.projects.aqua', {
      url:'/aqua',
      templateUrl: 'templates/aqua.html'
    })
    .state('home.projects.bridge', {
      url:'/bridge',
      templateUrl: 'templates/bridge.html'
    })
});

projects.run(function ($rootScope, $state, $stateParams) {
  $rootScope.$on('$stateChangeSuccess', function() {
    window.scrollTo(0,0);
  });
});