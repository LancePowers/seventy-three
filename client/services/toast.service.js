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
        console.log($mdToast)
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
        toast.showSimpleToast = function () {
            $mdToast.show(
                $mdToast.simple()
                .content('Simple Toast!')
                .position(toast.getToastPosition())
                .hideDelay(3000)
            );
        };
        toast.showActionToast = function () {
            var toast = $mdToast.simple()
                .textContent('Action Toast!')
                .action('OK')
                .highlightAction(false)
                .position(toast.getToastPosition());
            $mdToast.show(toast).then(function (response) {
                if (response == 'ok') {
                    alert('You clicked \'OK\'.');
                }
            });
        };
        //        toast.setMessage = function (cb) {
        //            toast.sendMessage = cb;
        //        }
        return toast;
    }
})();