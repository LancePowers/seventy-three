(function () {
    'use strict'
    angular.module('app')
        .factory('group', group);

    group.$inject = [];

    function group() {
        var group = [];
        var names = ['Brad', 'Julie', 'Anna', 'Doug', 'Johnathon', 'Tim', 'Madelyn'];
        var roles = ['Psychiatrist', 'Therapist', 'Insurance Agent', 'On-Call', 'Companion', 'Ally', 'Ally'];
        var numbers = ['719-238-1373', '719-238-1373', '719-238-1373', '719-238-1373', '719-238-1373', '719-238-1373', '719-238-1373']

        function populateGroup() {
            for (var i = 0; i < 7; i++) {
                var survivor = {
                    name: names[i],
                    image: 'img/survivors/survivor' + i + '.jpg',
                    role: roles[i],
                    phone: numbers[i]
                }
                group.push(survivor);
            }
        }
        populateGroup();
        console.log(group)

        return group;
    }
})();