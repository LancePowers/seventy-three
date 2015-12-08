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
            user.face = info.face;
            if (user.isPatient()) {
                user.patient = info._id;
            } else {
                user.patient = info.patient;
            }
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