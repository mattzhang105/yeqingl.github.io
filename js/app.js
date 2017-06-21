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

    .state('projects.doki', {
      url:'/doki',
      templateUrl: 'templates/projects/doki.html'
    })

    .state('projects.aqua', {
      url:'/aqua',
      templateUrl: 'templates/projects/aqua.html'
    })

    .state('projects.ambient', {
      url:'/ambient',
      templateUrl: 'templates/projects/ambient.html'
    })

    .state('projects.surf', {
      url:'/surf',
      templateUrl: 'templates/projects/surf.html'
    })



    .state('projects.echo', {
      url:'/echo',
      templateUrl: 'templates/punch/echo.html'
    })

    .state('projects.share', {
      url:'/share',
      templateUrl: 'templates/punch/share.html'
    })

    .state('projects.infoviz', {
      url:'/infoviz',
      templateUrl: 'templates/punch/infoviz.html'
    })

    .state('projects.more', {
      url:'/more',
      templateUrl: 'templates/punch/more.html'
    })
});

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

// projects.controller('ScrollCtrl', function($scope, $location, $anchorScroll) {
//   $scope.scrollTo = function(id) {
//     $location.hash(id);
//     $anchorScroll();
//     $anchorScroll.yOffset = 80;
//   };
// });


projects.service('anchorSmoothScroll', function(){
    
    this.scrollTo = function(eID) {

        var startY = currentYPosition();
        var stopY = elmYPosition(eID) - 80;
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
        
        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }
        
        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };
    
});

projects.controller('ScrollCtrl', function($scope, $location, anchorSmoothScroll) {
    
    $scope.gotoElement = function (eID){
      $location.hash(eID);
      anchorSmoothScroll.scrollTo(eID);
      $anchorScroll.yOffset = 80;
    };
  });