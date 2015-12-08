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

    InviteFormController.$inject = ['$timeout', '$q', 'user'];

    function InviteFormController($timeout, $q, user) {
        var vm = this;
        vm.emails = [];
        vm.patientID = user.patient;
        vm.isReadOnly = false;
        vm.isDisabled = false;
        vm.mailTo = function () {
            return "mailto:" + vm.emails.join(',') + "?subject=SeventyTwo%20Invite&body=Thank%20you%20for%20joining%20my%20support%20team.%20My%20patient%20Id%20is" + vm.patientID;
        }

        console.log(vm.test)

    }
})();