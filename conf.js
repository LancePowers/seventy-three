exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        chart: 'client/components/chart/chart.spec.js',
        form: 'client/components/userForm/userForm.spec.js',
        grid: 'client/components/grid/grid.spec.js'
    }
}