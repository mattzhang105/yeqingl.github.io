var projects = angular.module('projects', ['ui.router']);

projects.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/main');

  $stateProvider
    .state('main', {
      url:'/main',
      templateUrl: 'templates/main.html'
    })

    .state('main.about', {
      url:'/about',
      templateUrl: 'templates/about.html'
    })

    .state('main.hidden', {
      url:'/hidden',
      templateUrl: 'templates/hidden.html'
    })

    .state('projects', {
      url:'/projects',
      templateUrl: 'templates/projects.html',
    })

    .state('projects.autelrobotics', {
      url:'/autelrobotics',
      templateUrl: 'templates/projects/autelrobotics.html'
    })

    .state('projects.share', {
      url:'/share',
      templateUrl: 'templates/projects/share.html'
    })

    .state('projects.surf', {
      url:'/surf',
      templateUrl: 'templates/projects/surf.html'
    })

    .state('projects.aqua', {
      url:'/aqua',
      templateUrl: 'templates/projects/aqua.html'
    })

    .state('projects.echo', {
      url:'/echo',
      templateUrl: 'templates/projects/echo.html'
    })

    .state('projects.kc', {
      url:'/korean-cuban',
      templateUrl: 'templates/projects/korean-cuban.html'
    })
});

// projects.run(['$rootScope', '$location', '$window', function ($rootScope, $state, $stateParams, $location, $window) {
//   $window.ga('create', 'UA-75575300-1', 'auto');
//   $rootScope.$on('$stateChangeSuccess', function (event) {
//       window.scrollTo(0,0);
//       $window.ga('send', 'pageview', $location.path());
//   });
// }]);
projects.run(function ($rootScope, $state, $stateParams, $location, $window) {
  $window.ga('create', 'UA-75575300-1', 'auto');
  $rootScope.$on('$stateChangeSuccess', function (event) {
      window.scrollTo(0,0);
      $window.ga('send', 'pageview', $location.path());
  });
});

projects.controller("myCtrl", function($scope) {
    $scope.painting = [
        "img/punch/a.jpg", "img/punch/b.jpg", "img/punch/c.jpg", "img/punch/d.jpg"
    ]

    $scope.cook = [
        "img/punch/1.jpg", "img/punch/2.jpg", "img/punch/3.jpg", "img/punch/4.jpg",
        "img/punch/5.jpg", "img/punch/6.jpg", "img/punch/7.jpg", "img/punch/8.jpg",
        "img/punch/9.jpg", "img/punch/10.jpg"
    ]

    $scope.comic = [
        "img/punch/p1.jpg", "img/punch/p2.jpg", "img/punch/p3.jpg", "img/punch/p4.jpg"
    ]
});