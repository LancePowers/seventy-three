(function () {
    'use strict';
    angular.module('app.components.tabContainer')
        .directive('tabContainer', [tabContainerDirective]);

    function tabContainerDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/tabContainer/tabContainer.html',
            scope: {},
            controller: TabContainerController,
            controllerAs: 'vm',
            bindToController: true
        }
    }

    TabContainerController.$inject = [];

    function TabContainerController() {
        var vm = this;
    }
})();