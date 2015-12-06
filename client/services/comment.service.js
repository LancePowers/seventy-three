(function () {
    'use strict';
    angular.module('app')
        .factory('comments', comments);

    comments.$inject = [];

    function comments() {
        var comments = [{
                face: '../../img/lanceProfile.jpg',
                who: 'Lance',
                what: 'Appointment Schedule',
                notes: 'Does anyone have availability to take joe to his psychiatrist appointment on Thursday? Something came up at work, and I won\'t be able to take him.',
                group: 'questions'

        },
            {
                face: '../../img/lanceProfile.jpg',
                who: 'Lance',
                what: 'Why only one in an array?',
                notes: 'Does anyone have availability to take joe to his psychiatrist appointment on Thursday? Something came up at work, and I won\'t be able to take him.',
                group: 'questions'
        },
            {
                face: '../../img/lanceProfile.jpg',
                who: 'Lance',
                what: 'Phone Call',
                notes: 'I just got off the phone with Joe and he seems to be doing much better.',
                group: 'checkins'
        },
            {
                face: '../../img/lanceProfile.jpg',
                who: 'Lance',
                what: 'Menninger Clinic',
                notes: 'I spoke with Menninger today, and they have availability for Joe in February. I\'m still waiting to hear back from Cedar Springs.',
                group: 'messages'
        }];
        comments.get = function (filter) {
            var arr = [];
            comments.forEach(function (comment) {
                if (comment.group === filter) {
                    arr.push(comment);
                }
            })
            return arr;
        }
        return comments
    }

})();