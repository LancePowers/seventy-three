(function () {
    'use strict';
    angular.module('app')
        .factory('comments', comments);

    comments.$inject = ['$http'];

    function comments($http) {
        var comments = {};
        var watchers = [];

        comments.update = function (comment) {
            console.log(watchers);
            watchers.forEach(function (watcher) {
                console.log(comment)
                watcher(comment);
            })
        }
        comments.set = function (patient, group, watcher, cb) {
            watchers.push(watcher);
            $http.get('/comments/' + patient)
                .then(function (results) {
                    console.log(results.data)
                    comments.comments = results.data;
                    var filtered = comments.filterComments(results.data, group);
                    console.log(filtered)
                    cb(filtered);
                })
        }

        comments.filterComments = function (comments, filter) {
            var arr = [];
            console.log()
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