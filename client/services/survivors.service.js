(function () {
    'use strict'
    angular.module('app')
        .factory('survivors', survivors);

    survivors.$inject = [];

    function survivors() {
        var survivors = [];
        var names = ['Brad', 'Julie', 'Anna', 'Doug', 'Johnathon', 'Tim', 'Madelyn', 'Amanda', 'Susan', 'Philip', 'Kristen'];
        var advice = ['Never let go of hope!', 'Remember at night that things will seem better in the morning.', 'It\'s not a matter of being happy or sad, depression is something else entirely', 'If your child had Cancer, would you think \'This is all my fault\'', 'Baby steps and Patience', 'Do what you need to take care of yourself. You\'re no use to someone if you\'ve drained yourself', 'It\'s better to say, "I agree, this sucks" than to lie and say everything is okay', 'If you tell ten people what you\'re going through, I promise at least three will have gone through something similar', 'Don\'t feel guilty for getting pissed! Just make sure you know that anger is towards the disease, not the person', 'Enlist the support of everyone you can. No matter how strong you are, no one can go it alone.', 'These diseases are really very treatable. With the right care, odds are things will get much better']

        function populateSurvivors() {
            for (var i = 0; i < 11; i++) {
                var survivor = {
                    name: names[i],
                    background: 'img/survivors/survivor' + i + '.jpg',
                    advice: advice[i],
                    span: {
                        row: 1,
                        col: 1
                    }
                }
                if (i === 1 || i === 5 || i === 9) {
                    survivor.span = {
                        row: 2,
                        col: 2
                    }
                }
                survivors.push(survivor);
            }
        }
        populateSurvivors();
        console.log(survivors)




        return survivors;
    }
})();