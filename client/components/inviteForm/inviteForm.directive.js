(function () {
    'use strict';
    angular.module('app.components.inviteForm')
        .directive('inviteForm', [inviteFormDirective]);

    function inviteFormDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/inviteForm/inviteForm.html',
            scope: {},
            controller: InviteFormController,
            controllerAs: 'vm',
            bindToController: true
        }
    }

    InviteFormController.$inject = ['$timeout', '$q'];

    function InviteFormController($timeout, $q) {
        var vm = this;
        vm.emails = [];
        vm.isReadOnly = false;

        vm.inviteEmail = "mailto:someone@yoursite.com?cc=someoneelse@theirsite.com, another@thatsite.com, me@mysite.com&bcc=lastperson@theirsite.com&subject=Big%20News&body=Body-goes-here"
        console.log(vm.test)

    }
})();