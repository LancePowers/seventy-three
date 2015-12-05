(function () {
    'use strict';
    angular.module('app.components.chat')
        .directive('chat', [chatDirective]);

    function chatDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/chat/chat.html',
            scope: {},
            controller: ChatController,
            controllerAs: 'vm',
            bindToController: true
        }
    }


    ChatController.$inject = [];

    function ChatController() {
        var vm = this;

        vm.comments = [{
                face: '../../img/lanceProfile.jpg',
                who: 'Lance',
                what: 'Appointment Schedule',
                notes: 'Does anyone have availability to take joe to his psychiatrist appointment on Thursday? Something came up at work, and I won\'t be able to take him.'
        },
            {
                face: '../../img/lanceProfile.jpg',
                who: 'Lance',
                what: 'Appointment Schedule',
                notes: 'Does anyone have availability to take joe to his psychiatrist appointment on Thursday? Something came up at work, and I won\'t be able to take him.'
        },
            {
                face: '../../img/lanceProfile.jpg',
                who: 'Lance',
                what: 'Appointment Schedule',
                notes: 'Does anyone have availability to take joe to his psychiatrist appointment on Thursday? Something came up at work, and I won\'t be able to take him.'
        },
            {
                face: '../../img/lanceProfile.jpg',
                who: 'Lance',
                what: 'Appointment Schedule',
                notes: 'Does anyone have availability to take joe to his psychiatrist appointment on Thursday? Something came up at work, and I won\'t be able to take him.'
        }]
    }
})();