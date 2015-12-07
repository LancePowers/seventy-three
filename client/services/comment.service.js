(function () {
    'use strict';
    angular.module('app')
        .factory('comments', comments);

    comments.$inject = ['$http'];

    function comments($http) {
        var comments = {};
        var watchers = [];

        comments.update = function (comment) {
            watchers.forEach(function (watcher) {
                watcher(comment);
            })
        }
        comments.set = function (patient, group, watcher, cb) {
            watchers.push(watcher);
            console.log('comments set is', group);
            $http.get('/comments/' + patient)
                .then(function (results) {
                    comments.comments = results.data;
                    var filtered = comments.filterComments(results.data, group);
                    cb(filtered);
                })
        }

        comments.filterComments = function (comments, filter) {
            var arr = [];
            comments.forEach(function (comment) {
                if (comment.type === filter) {
                    arr.push(comment);
                }
            })
            return arr;
        }


        return comments
    }

})();