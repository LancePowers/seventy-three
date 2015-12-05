(function () {
    'use strict';
    angular.module('app.components.navbar')
        .directive('navbar', [navbarDirective]);

    function navbarDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/navbar/navbar.html',
            scope: {},
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        }
    }


    NavbarController.$inject = [];

    function NavbarController() {
        var vm = this;
    }
})();