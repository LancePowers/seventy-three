angular.module('app').config(function ($mdThemingProvider) {
    var customPrimary = {
        '50': '#00a4d7',
        '100': '#0091be',
        '200': '#007da4',
        '300': '#006a8b',
        '400': '#005671',
        '500': '#004358',
        '600': '#00303e',
        '700': '#001c25',
        '800': '#00090b',
        '900': '#000000',
        'A100': '#00b7f1',
        'A200': '#0bc5ff',
        'A400': '#25cbff',
        'A700': '#000000'
    };
    $mdThemingProvider
        .definePalette('customPrimary',
            customPrimary);

    var customAccent = {
        '50': '#58b15c',
        '100': '#4da350',
        '200': '#449247',
        '300': '#3c813f',
        '400': '#346f36',
        '500': '#2C5E2E',
        '600': '#244d25',
        '700': '#1c3b1d',
        '800': '#142a14',
        '900': '#0b180c',
        'A100': '#6ab96d',
        'A200': '#7bc17e',
        'A400': '#8dc98f',
        'A700': '#030703'
    };
    $mdThemingProvider
        .definePalette('customAccent',
            customAccent);

    var customWarn = {
        '50': '#ffb97d',
        '100': '#ffab64',
        '200': '#ff9d4a',
        '300': '#ff8f31',
        '400': '#ff8217',
        '500': '#FD7400',
        '600': '#e36800',
        '700': '#ca5d00',
        '800': '#b05100',
        '900': '#974500',
        'A100': '#ffc797',
        'A200': '#ffd4b0',
        'A400': '#ffe2ca',
        'A700': '#7d3a00'
    };
    $mdThemingProvider
        .definePalette('customWarn',
            customWarn);

    //    var customBackground = {
    //        '50': '#ffffff',
    //        '100': '#ffffff',
    //        '200': '#ffffff',
    //        '300': '#ffffff',
    //        '400': '#ffffff',
    //        '500': '#fff',
    //        '600': '#f2f2f2',
    //        '700': '#e6e6e6',
    //        '800': '#d9d9d9',
    //        '900': '#cccccc',
    //        'A100': '#ffffff',
    //        'A200': '#ffffff',
    //        'A400': '#ffffff',
    //        'A700': '#bfbfbf'
    //    };
    //    $mdThemingProvider
    //        .definePalette('customBackground',
    //            customBackground);

    $mdThemingProvider.theme('default')
        .primaryPalette('customPrimary')
        .accentPalette('customAccent')
        .warnPalette('customWarn')
        //        .backgroundPalette('customBackground')
});