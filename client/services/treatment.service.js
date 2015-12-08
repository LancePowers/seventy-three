(function () {
    'use strict'
    angular.module('app')
        .factory('treatments', treatments);

    treatments.$inject = [];

    function treatments() {

        var treatments = [{
            title: 'Medications',
            description: "Antidepressant medications are often the first line of treatment used for clinical depression, and they are prescribed alone or in addition to talk therapy. Because there are so many different kinds of antidepressants, finding the one that works for you can sometimes take time. But don't let that discourage you. Six out of 10 people will begin to feel better with the first antidepressant that they are prescribed (U.S. Department of Health and Human Services). Medication provides a relief from symptoms, and this can give patients the boost they need to take an active part in their recovery. Although some people will see mood improvements within a couple of weeks, others will need to take an antidepressant for at least six weeks to experience the full effect. It's important to remember, however, that many people taking antidepressants experience at least one undesirable side effect from the drug—always use medications only as prescribed by a medical professional. Learn more about the different kinds of depression drugs."
                }]

        return treatments;
    }
})();