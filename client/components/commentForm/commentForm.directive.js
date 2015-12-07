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
        var config = JSON.parse(attrs.config);
        console.log(config)
        controller.init(config);
    }


    //    CONTROLLER
    CommentFormController.$inject = ['user', '$http', 'comments', '$mdDialog'];

    function CommentFormController(user, $http, comments, $mdDialog) {
        var vm = this;


        vm.init = function (config) {
            vm.new = false;
            vm.type = config.type;
            if (config.comment === 'new') {
                vm.comment = {
                    what: '',
                    notes: ''
                }
                vm.submit = vm.submitComment;
                vm.new = true;
            } else {
                vm.comment = config.comment;
                if (!vm.comment.answers) {
                    vm.comment.answers = [];
                }
                vm.newAnswer = {
                    who: user.first,
                    face: user.face,
                    answer: '',
                    created: Date.now()
                }
                vm.submit = vm.submitAnswer;
            }
        }

        vm.submitComment = function () {
            vm.comment.who = user;
            vm.comment.type = vm.type;
            vm.comment.patient = user.patient;
            vm.comment.created = Date.now();
            vm.comment.updated = Date.now();
            $http.post('/comments', vm.comment)
                .then(function (result) {
                    comments.update(result.data[0]);
                    $mdDialog.cancel('comment-form');
                })
        }

        vm.submitAnswer = function () {
            vm.comment.answers.push(vm.newAnswer);
            vm.comment.updated = Date.now;
            $http.put('/comments', vm.comment)
                .then(function (result) {
                    console.log(result);
                    comments.update(result.data);
                    $mdDialog.cancel('comment-form');
                })
                .catch(function (err) {
                    console.log(err);
                })
        }



    }
})();