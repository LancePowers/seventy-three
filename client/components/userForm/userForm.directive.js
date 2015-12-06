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


    UserFormController.$inject = ['$http', '$auth', '$window', '$location', 'user', 'toast', 'comments'];

    function UserFormController($http, $auth, $window, $location, user, toast, comments) {
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
            } else if (vm.type === 'Update') {
                vm.update();
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
                    $window.localStorage.currentUser = JSON.stringify(response.data.user);
                    user.set(response.data.user);
                    console.log('user set to: ', user);
                    // $rootScope.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    console.log(response.data.user.firstLogin);
                    if (response.data.user.firstLogin) {
                        toast.showCustomToast('Success! Please complete the sign-up process.');
                        vm.type = 'Update';
                    } else {
                        $location.path('/home');
                    }
                })
                .catch(function (response) {
                    toast.showCustomToast(response.data.message);
                    console.log(response);
                });

        }

        vm.update = function () {
            var data = {
                email: user.email,
                phone: vm.user.phone,
                role: vm.user.role,
                patient: vm.user.patient
            }
            $http.put('/auth/update', data)
                .then(function (response) {
                    console.log(response.data);
                    user.set(response.data.user);
                    $location.path('/home');
                })
                .catch(function (response) {
                    toast.showCustomToast(response.data.message);
                    console.log(response.data);
                });
        }

        vm.signup = function () {

            $auth.signup(vm.user)
                .then(function (response) {
                    toast.showCustomToast('Success! Please login.');
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