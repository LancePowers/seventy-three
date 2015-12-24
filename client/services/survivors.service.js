(function () {
    'use strict'
    angular.module('app')
        .factory('survivors', survivors);

    survivors.$inject = [];

    function survivors() {
        var survivors = [];
        var names = ['Oliver', 'Lisa', 'Glennon', 'Vikram', 'Sherwin', 'Thomas', 'Eleanor', 'Kevin', 'Stephen', 'Simon', 'Olivia', 'Darren', 'Jess'];

        var advice = ['Never let go of hope!', 'Remember at night that things will seem better in the morning.', 'It\'s not a matter of being happy or sad, depression is something else entirely', 'If your child had Cancer, would you think \'This is all my fault\'', 'Baby steps and Patience', 'Do what you need to take care of yourself. You\'re no use to someone if you\'ve drained yourself', 'It\'s better to say, "I agree, this sucks" than to lie and say everything is okay', 'If you tell ten people what you\'re going through, I promise at least three will have gone through something similar', 'Don\'t feel guilty for getting pissed! Just make sure you know that anger is towards the disease, not the person', 'Enlist the support of everyone you can. No matter how strong you are, no one can go it alone.', 'These diseases are really very treatable. With the right care, odds are things will get much better'];

        var videos = ['https://youtu.be/o8ab7NrRr04?list=PLw8TLvRgeKJ7YFbklnGNn1CT46hxsLB86', 'https://www.youtube.com/watch?v=QQBXXAciKzg', 'https://www.youtube.com/watch?v=NHHPNMIK-fY', 'https://www.youtube.com/watch?v=yzm4gpAKrBk&list=PLAnaLI5PdtdEPjFPoEaUgOAfwJv-TEoh4', "https://youtu.be/oEZrAGdZ1i8", 'https://youtu.be/PeZ-U0pj9LI?list=PLAnaLI5PdtdEPjFPoEaUgOAfwJv-TEoh4', 'https://youtu.be/syjEN3peCJw?list=PLAnaLI5PdtdEPjFPoEaUgOAfwJv-TEoh4', 'https://youtu.be/-Qe8cR4Jl10?list=PLAnaLI5PdtdEPjFPoEaUgOAfwJv-TEoh4', 'https://youtu.be/OPxHTZRwXX8', 'https://youtu.be/tdRNhg51ZyM?list=PLw8TLvRgeKJ7YFbklnGNn1CT46hxsLB86', 'https://youtu.be/HJK9Vv9f9T4', 'https://youtu.be/AgI-c2je-60?list=PLw8TLvRgeKJ7YFbklnGNn1CT46hxsLB86', 'https://youtu.be/e7vjb8gZmh4?list=PLw8TLvRgeKJ7YFbklnGNn1CT46hxsLB86'];
        console.log(videos.length, names.length)

        function onPlayerReady(event) {
            console.log(event.target)
            event.target.setVolume(0);
            event.target.playVideo();
        }

        function populateSurvivors() {
            for (var i = 0; i < names.length; i++) {

                var survivor = {
                    name: names[i],
                    background: 'img/survivors/survivor' + i + '.jpg',
                    video: videos[i],
                    player: null,
                    vars: {
                        controls: 1,
                        volume: 0,
                        autoplay: 1,
                        start: 15,
                        loop: 1
                    },
                    advice: advice[i],
                    span: {
                        row: 1,
                        col: 1
                    }
                }
                if (i === 1 || i === 5 || i === 9 || i === 10) {
                    survivor.span = {
                        row: 2,
                        col: 2
                    }
                }
                survivors.push(survivor);
            }
        }

        populateSurvivors();




        return survivors;
    }
})();