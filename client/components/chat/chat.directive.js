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
        vm.expandComment = function (ev, comment) {
            vm.config.comment = comment;
            $mdDialog.show({
                parent: angular.element(document.body),
                controller: ChatDialogController,
                controllerAs: 'vm',
                templateUrl: 'components/chat/chatDialog.html',
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    config: vm.config
                }
            })
        }

        vm.init = function (group) {
            vm.config = {};
            vm.config.type = group;
            var watcher = function (comment) {
                if (comment.type === vm.config.type) {
                    vm.comments.push(comment);
                }
            }
            comments.set(user.patient, vm.config.type, watcher, function (results) {
                vm.comments = results;
            });
        }




    }



    function ChatDialogController($mdDialog, config) {
        var vm = this;
        vm.config = config;

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