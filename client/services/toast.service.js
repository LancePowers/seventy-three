(function () {
    'use strict'
    angular.module('app')
        .factory('toast', toast);

    toast.$inject = ['$mdToast', '$document'];


    function toast($mdToast, $document) {
        var toast = {};
        var last = {
            bottom: false,
            top: true,
            left: false,
            right: true
        };
        toast.toastPosition = angular.extend({}, last);
        toast.getToastPosition = function () {
            sanitizePosition();
            return Object.keys(toast.toastPosition)
                .filter(function (pos) {
                    return toast.toastPosition[pos];
                })
                .join(' ');
        };

        function sanitizePosition() {
            var current = toast.toastPosition;
            if (current.bottom && last.top) current.top = false;
            if (current.top && last.bottom) current.bottom = false;
            if (current.right && last.left) current.left = false;
            if (current.left && last.right) current.right = false;
            last = angular.extend({}, current);
        }
        toast.showCustomToast = function (text) {
            var element = `<md-toast class="toast">
    <span flex>` + text + `</span>
</md-toast>`
            $mdToast.show({
                template: element,
                parent: $document[0].querySelector('#content'),
                hideDelay: 6000,
                position: toast.getToastPosition(),
                locals: {
                    message: 'message'
                }
            })
        };

        return toast;
    }
})();