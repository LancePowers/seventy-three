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
            bindToController: true,
            link: ChatLink
        }
    }

    function ChatLink(scope, element, attrs, controller, transcludeFn) {
        controller.setGroup(attrs.group);
    }


    ChatController.$inject = ['$http', '$mdDialog', 'comments'];

    function ChatController($http, $mdDialog, comments) {
        var vm = this;
        vm.expandComment = function (ev) {
            $mdDialog.show({
                parent: angular.element(document.body),
                controller: ChatDialogController,
                controllerAs: 'vm',
                templateUrl: 'components/chat/chatDialog.html',
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    group: vm.group
                }
            })
        }
        vm.setGroup = function (group) {
            vm.group = group;
            vm.comments = comments.get(group);
        }

    }



    function ChatDialogController($mdDialog, group) {
        var vm = this;
        vm.group = group;
        console.log(vm.group)
        vm.hide = function () {
            $mdDialog.hide();
        };
        vm.cancel = function () {
            $mdDialog.cancel();
        };
        vm.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }
})();