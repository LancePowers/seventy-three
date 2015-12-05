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
    }
})();