(function () {
    'use strict';
    angular.module('app')
        .factory('comments', comments);

    comments.$inject = ['$http'];

    function comments($http) {
        var comments = {};

        comments.set = function (patient, group, cb) {
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