(function () {
    'use strict';
    angular.module('app')
        .factory('healthFacilities', healthFacilities);

    healthFacilities.$inject = ['$http'];

    function healthFacilities($http) {

        console.log($http.get('http://demo.ckan.org/api/3/action/group_list', {
                headers: {
                    api_key: 'Pu9Y6eTI8FyPmh6x3RZYhhV2lPoCKRpjiYsSia6n'
                },
                params: {
                    id: 'explorer'
                }
            })
            .then(function (results, error, request) {
                console.log(request)
                console.log(results, error)
            }))






        return healthFacilities
    }

})();