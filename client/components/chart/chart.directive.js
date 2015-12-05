(function () {
    'use strict';
    angular.module('app.components.chart')
        .directive('chart', [chartDirective]);

    function chartDirective() {
        console.log('here')
        return {
            restrict: 'E',
            templateUrl: 'components/chart/chart.html',
            scope: {},
            controller: ChartController,
            controllerAs: 'vm',
            bindToController: true
        }
    }


    ChartController.$inject = [];

    function ChartController() {
        var vm = this;
        console.log('chart controller')
    }
})();