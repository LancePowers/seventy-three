(function () {
    'use strict';
    angular.module('app.components.commentForm')
        .directive('commentForm', [commentFormDirective]);

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

    function CommentFormLink(scope, element, attrs, controller, transcludeFn) {
        console.log(attrs.type)
        controller.setType(attrs.type);
    }

    CommentFormController.$inject = ['user', '$http', 'comments'];

    function CommentFormController(user, $http, comments) {
        var vm = this;
        vm.setType = function (type) {
            vm.type = type;
        }
        vm.submit = function () {
            vm.comment.who = user;
            vm.comment.type = vm.type;
            vm.comment.patient = user.patient;
            $http.post('/comments', vm.comment)
                .then(function (result) {
                    comments.update(result.data[0]);
                    console.log(result);
                })
            console.log(vm.comment)
        }
        vm.comment = {
            what: '',
            notes: ''
        }

    }
})();