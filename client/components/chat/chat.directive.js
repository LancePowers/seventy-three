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
        controller.init(attrs.group);
    }


    ChatController.$inject = ['$http', '$mdDialog', 'comments', 'user'];

    function ChatController($http, $mdDialog, comments, user) {
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

        vm.init = function (group) {
            vm.group = group;
            comments.set(user.patient, vm.group, function (results) {
                console.log(results)
                vm.comments = results;
            });
        }




    }



    function ChatDialogController($mdDialog, group) {
        var vm = this;
        vm.group = group;

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