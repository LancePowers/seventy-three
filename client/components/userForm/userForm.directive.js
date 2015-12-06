(function () {
    'use strict';
    angular.module('app.components.userForm')
        .directive('userForm', [userFormDirective]);

    function userFormDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/userForm/userForm.html',
            scope: {},
            controller: UserFormController,
            controllerAs: 'vm',
            bindToController: true
        }
    }


    UserFormController.$inject = ['$http', '$auth', '$window', '$location', 'user', 'toast'];

    function UserFormController($http, $auth, $window, $location, user, toast) {
        var vm = this;

        vm.user = {
            email: '',
            password: '',
            first: '',
            last: '',
            phone: '',
            role: '',
            firstLogin: true,
            patient: ''
        };

        // *** Handle switching from login to signup *** //
        vm.type = 'Login'
        vm.changeType = function () {
            vm.type = 'Sign Up';
        }
        vm.roles = ['Patient', 'Ally', 'Professional']
        vm.submit = function () {
            if (vm.type === 'Login') {
                vm.login();
            } else {
                vm.signup();
            }
        }

        // *** $auth functions *** //
        vm.login = function () {

            $auth.login(vm.user)
                .then(function (response) {
                    console.log('login returned: ', response);
                    $window.localStorage.currentUser = JSON.stringify(response.data.user);
                    user.set(response.data.user);
                    //                    $rootScope.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    $location.path('/home');
                    console.log(user)
                })
                .catch(function (response) {
                    toast.showCustomToast(response.data.message.email || response.data.message);
                    console.log(response);
                });
        };

        vm.authenticate = function (provider) {

            $auth.authenticate(provider)
                .then(function (response) {
                    console.log('google returned: ', response);
                    $window.localStorage.currentUser = JSON.stringify(response.data.user);
                    user.set(response.data.user);
                    //                    $rootScope.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    console.log(response);
                    $location.path('/home');
                })
                .catch(function (response) {
                    toast.showCustomToast(response.data.message);
                    console.log(response);
                });

        }

        vm.signup = function () {

            $auth.signup(vm.user)
                .then(function (response) {
                    console.log('signup returned: ', response);
                    vm.type = ('Login');
                })
                .catch(function (response) {
                    toast.showCustomToast(response.data.message);
                    console.log(response.data);
                });

        }

    }
})();