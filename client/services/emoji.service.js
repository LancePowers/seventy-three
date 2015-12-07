(function () {
    'use strict'
    angular.module('app')
        .factory('emojis', emojis);

    emojis.$inject = [];

    function emojis() {
        var emojis = [
            {
                shortcode: ':stuck_out_tongue:'
        }, {
                shortcode: ':smiley:'
        }, {
                shortcode: ':grinning:'
        }, {
                shortcode: ':slight_frown:'
        }, {
                shortcode: ':unamused:'
        }, {
                shortcode: ':pensive:'
        }, {
                shortcode: ':worried:'
        }, {
                shortcode: ':angry:'
        }, {
                shortcode: ':cry:'
        }, {
                shortcode: ':frowning:'
        }, {
                shortcode: ':anguished:'
        }, {
                shortcode: ':tired_face:'
        }, {
                shortcode: ':sob:'
        }, {
                shortcode: ':sleeping:'
        }];

        emojis.forEach(function (emoji) {
            emoji.src = angular.element(emojione.shortnameToImage(emoji.shortcode))[0].src
        });

        return emojis;
    }
})();