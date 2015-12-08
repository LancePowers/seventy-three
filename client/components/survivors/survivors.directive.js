(function () {
    'use strict';
    angular.module('app.components.survivors')
        .directive('survivors', [survivorsDirective]);

    function survivorsDirective() {
        console.log('here')
        return {
            restrict: 'E',
            templateUrl: 'components/survivors/survivors.html',
            scope: {},
            controller: SurvivorsController,
            controllerAs: 'vm',
            bindToController: true
        }
    }


    SurvivorsController.$inject = ['survivors'];

    function SurvivorsController(survivors) {
        var vm = this;
        vm.survivors = survivors;
    }
})();