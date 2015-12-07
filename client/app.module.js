(function () {
    'use strict';

    angular.module('app', ['ngRoute', 'satellizer', 'ngMaterial', 'app.components', 'ngMdIcons'])

    .config(function ($routeProvider, $authProvider, $locationProvider) {
        // *** satellizer settings *** //
        $authProvider.google({
            url: '/auth/google',
            clientId: '972802546491-0rimk5mjv882obi6v0b33ekjki60nupr.apps.googleusercontent.com',
            redirectUri: window.location.origin
        });
        $routeProvider
            .when('/', {
                templateUrl: 'partials/welcome.html'
            })
            .when('/home', {
                templateUrl: 'partials/home.html'
            })
            .when('/login', {
                templateUrl: 'partials/login.html',
            })
            .when('/patient', {
                templateUrl: 'partials/patient.html',
            })
            .otherwise('/');

    });

})();