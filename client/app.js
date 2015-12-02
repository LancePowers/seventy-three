var app = angular.module('MyApp', ['ngRoute', 'satellizer']);

app.config(function($routeProvider, $authProvider, $locationProvider) {

  // *** satellizer settings *** //
  $authProvider.github({
    url: '/auth/github',
    clientId: '7c5a4a88e8fdce8e653c',
    redirectUri: window.location.origin
  });

  $authProvider.google({
    url: '/auth/google',
    clientId: '481835593158-9fdttvs962fhs69jbuh64hrgimhr0mrc.apps.googleusercontent.com',
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
