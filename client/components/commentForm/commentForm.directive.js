(function () {
    'use strict';
    angular.module('app.components.commentForm')
        .directive('commentForm', [commentFormDirective]);

    //    DIRECTIVE
    function commentFormDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/commentForm/commentForm.html',
            scope: {},
            controller: CommentFormController,
            controllerAs: 'vm',
            bindToController: true,
            link: CommentFormLink
        }
    }

    //    LINK
    function CommentFormLink(scope, element, attrs, controller, transcludeFn) {
        controller.init(attrs.type);
    }


    //    CONTROLLER
    CommentFormController.$inject = ['user', '$http', 'comments', '$mdDialog'];

    function CommentFormController(user, $http, comments, $mdDialog) {
        var vm = this;
        console.log(close, vm.close);
        vm.init = function (type) {
            vm.type = type;
        }
        vm.submit = function () {
            vm.comment.who = user;
            vm.comment.type = vm.type;
            vm.comment.patient = user.patient;
            $http.post('/comments', vm.comment)
                .then(function (result) {
                    comments.update(result.data[0]);
                    $mdDialog.cancel('comment-form');
                })
            console.log(vm.comment)
        }
        vm.comment = {
            what: '',
            notes: ''
        }

    }
})();