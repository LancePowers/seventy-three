(function () {
    'use strict'
    angular.module('app')
        .factory('user', user);

    user.$inject = [];

    function user() {
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

        return user;
    }

})();