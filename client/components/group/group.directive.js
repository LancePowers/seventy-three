(function () {
    'use strict';
    angular.module('app.components.group')
        .directive('group', [groupDirective]);

    function groupDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/group/group.html',
            scope: {},
            controller: GroupController,
            controllerAs: 'vm',
            bindToController: true
        }
    }


    GroupController.$inject = ['group', '$mdDialog'];

    function GroupController(group, $mdDialog) {
        var vm = this;
        vm.people = group;
        vm.goToPerson = function (person, event) {
            console.log(person)
            $mdDialog.show(
                $mdDialog.alert()
                .title(person.role)
                .textContent(person.name + ' - ' + person.phone)
                .ariaLabel('Person Inspect')
                .ok('Close')
                .targetEvent(event)
            );
        };
    }
})();