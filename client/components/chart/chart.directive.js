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

        vm.title = "Insurance Report"
        vm.chart = nv.models.multiBarChart();

        d3.select('#chart svg').datum([
            {
                key: "Out-Of-Pocket",
                color: "#BD362F",

                values: [{
                    x: "Talk Therapy",
                    y: 1000
                    }, {
                    x: "Intensive Outpatient",
                    y: 3500
                    }, {
                    x: "Medications",
                    y: 1500
                    }, {
                    x: "Inpatient",
                    y: 8000
                    }, {
                    x: "Electro-Convulsive",
                    y: 8000
                    }]
            },
            {
                key: "Insurance",
                color: "#51A351",
                values: [{
                    x: "Talk Therapy",
                    y: 1500
                    }, {
                    x: "Intensive Outpatient",
                    y: 5000
                    }, {
                    x: "Medications",
                    y: 3500
                    }, {
                    x: "Inpatient",
                    y: 13000
                    }, {
                    x: "Electro-Convulsive",
                    y: 9000
                    }]
            }]).transition().duration(500).call(vm.chart);

    }
})();