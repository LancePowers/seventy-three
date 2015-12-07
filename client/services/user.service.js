(function () {
    'use strict'
    angular.module('app')
        .factory('user', user);

    user.$inject = ['$auth'];

    function user($auth) {
        var user = {};

        user.set = function (info) {
            user.first = info.first;
            user.last = info.last;
            user.email = info.email;
            user.phone = info.phone;
            user.role = info.role;
            user.firstLogin = info.firstLogin;
            user.patient = info.patient;
            user.face = info.face;
        }
        user.isAuthenticated = function () {
            return $auth.isAuthenticated();
        };
        user.isPatient = function () {
            return (user.role === 'Patient');
        };
        user.isAlly = function () {
            return (user.role === 'Ally');
        };
        console.log(user.isAuthenticated());

        return user;
    }

})();