var app = angular.module('app', ['ngRoute', 'satellizer']);

app.config(function ($routeProvider, $authProvider, $locationProvider) {

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
            controller: 'loginCtrl'
        })
        .when('/signup', {
            templateUrl: 'partials/signup.html',
            controller: 'signupCtrl'
        })
        .otherwise('/');

});