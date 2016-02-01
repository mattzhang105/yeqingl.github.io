$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();

        // change background color
        if(scroll_pos < 100) {
            $("body").css('background-color', '#AFE8FF');
        } else if(scroll_pos < 850) {
            $("body").css('background-color', '#a4d2f4');
        } else if(scroll_pos < 1200) {
            $("body").css('background-color', '#9cc1ec');
        } else {
            $("body").css('background-color', '#91abe1');
        }

        // change banner display
        if(scroll_pos < 400) {
            $('#nav').fadeOut(100);
        } else {
            $('#nav').fadeIn();
        }
    });

    $(function () {
        $('#backToTop').click(function () {
            $('body, html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $('#goToContact').click(function () {
            $('body,html').animate({
                scrollTop: $(document).height()
            }, 800);
            return false;
        });

        $('#goToAbout').click(function () {
            $('body,html').animate({
                scrollTop: 550
            }, 800);
            return false;
        });

        $('#goToWork').click(function () {
            $('body,html').animate({
                scrollTop: 900
            }, 800);
            return false;
        });
    });
});

var projects = angular.module('projects', ['ui.router'])
projects.config(function($stateProvider, $urlRouterProvider) {
    // $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('surf', {
            url:'/surf',
            templateUrl: 'templates/surf.html',
        })

        .state('aqua', {
            url:'/aqua',
            templateUrl: 'templates/aqua.html',
        })
});