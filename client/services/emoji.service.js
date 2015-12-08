(function () {
    'use strict'
    angular.module('app')
        .factory('emojis', emojis);

    emojis.$inject = [];

    function emojis() {
        var emojis = [
            {
                unicode: '😀'
            },
            {
                unicode: '😁'
            },
            {
                unicode: '😂'
            },
            {
                unicode: '😃'
            },
            {
                unicode: '😄'
            },
            {
                unicode: '😅'
            },
            {
                unicode: '😆'
            },
            {
                unicode: '😊'
            },
            {
                unicode: '😋'
            },
            {
                unicode: '😐'
            },
            {
                unicode: '😥'
            },
            {
                unicode: '😮'
            },
            {
                unicode: '😯'
            },
            {
                unicode: '😪'
            },
            {
                unicode: '😫'
            },
            {
                unicode: '😴'
            },
            {
                unicode: '😌'
            },
            {
                unicode: '😛'
            },
            {
                unicode: '😜'
            },
            {
                unicode: '😝'
            },
            {
                unicode: '😒'
            },
            {
                unicode: '😓'
            },
            {
                unicode: '😔'
            },
            {
                unicode: '😕'
            },
            {
                unicode: '😖'
            },
            {
                unicode: '😞'
            },
            {
                unicode: '😟'
            },
            {
                unicode: '😤'
            },
            {
                unicode: '😢'
            },
            {
                unicode: '😭'
            },
            {
                unicode: '😦'
            },
            {
                unicode: '😧'
            },
            {
                unicode: '😨'
            },
            {
                unicode: '😩'
            },
            {
                unicode: '😬'
            },
            {
                unicode: '😰'
            },
            {
                unicode: '😱'
            },
            {
                unicode: '😳'
            },
            {
                unicode: '😡'
            },
            {
                unicode: '😠'
            }];

        emojis.forEach(function (emoji) {
            emoji.src = angular.element(emojione.unicodeToImage(emoji.unicode))[0].src
        });

        return emojis;
    }
})();