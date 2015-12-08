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
            bindToController: true,
            link: TabContainerLink
        }
    }

    function TabContainerLink(scope, element, attrs, controller, transcludeFn) {
        controller.init(attrs.config);
    }

    TabContainerController.$inject = ['treatments'];

    function TabContainerController(treatments) {
        var vm = this;
        vm.init = function (config) {
            if (config === 'communication') {
                vm.initComm();
            } else if (config === 'treatment') {
                vm.initTreat();
            }
        }

        vm.initComm = function () {
            vm.title = 'Team Communication';
            vm.commVisible = true;
            vm.tabs = [{
                label: "Questions",
                group: "questions"
                    }, {
                label: "Check-Ins",
                group: "checkins"
                    }, {
                label: "Messages",
                group: "messages"
                    }]
        }

        vm.initTreat = function () {
            vm.title = 'Common Treatments';
            vm.treatVisible = true;
            vm.tabs = treatments;
            vm.tabs.forEach(function (tab) {
                tab.label = tab.title;
            });
        }

    }
})();