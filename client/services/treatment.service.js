(function () {
    'use strict'
    angular.module('app')
        .factory('treatments', treatments);

    treatments.$inject = [];

    function treatments() {

        var treatments = [{
            title: 'Medications',
            description: "Antidepressant medications are often the first line of treatment used for clinical depression, and they are prescribed alone or in addition to talk therapy. Because there are so many different kinds of antidepressants, finding the one that works for you can sometimes take time. But don't let that discourage you. Six out of 10 people will begin to feel better with the first antidepressant that they are prescribed (U.S. Department of Health and Human Services). Medication provides a relief from symptoms, and this can give patients the boost they need to take an active part in their recovery. Although some people will see mood improvements within a couple of weeks, others will need to take an antidepressant for at least six weeks to experience the full effect. It's important to remember, however, that many people taking antidepressants experience at least one undesirable side effect from the drug—always use medications only as prescribed by a medical professional. Learn more about the different kinds of depression drugs."
                }, {
            title: 'Talk Therapy',
            description: "If you've never been to a therapist, you might be surprised by your experience. Just as there are many types of antidepressants, there are also a few different kinds of therapy. Counseling can help you get things off your chest that you didn't realize were bothering you, help you identify destructive thoughts that get you down, help you understand where these feelings come from, and teach you how to cope with those feelings. A lot of people may feel hesitant about talking to a stranger about their emotions, but many studies show that talk therapy very effective. Plus, you don't have to deal with the side effects of taking pills."
        }, {
            title: 'Cognitive Behavioral Therapy',
            description: "Cognitive behavioral therapy (CBT) helps people find new ways of dealing with negative thoughts and behaviors. Instead of delving into the past to determine where a feeling or emotion comes from, CBT helps patients become more aware of how their beliefs or actions are contributing to depression. Once those are identified, a therapist will work with his or her patient to replace those negative attitudes with more positive ones. There may be daily or weekly exercises and guidance involved to help patients apply the skills they learn in therapy to the real world. Research has shown that many people who undergo CBT for depression see significant improvement."

}, {
            title: 'Interpersonal Psychotherapy',
            description: "Interpersonal psychotherapy (IPT) for depression focuses on relationships. It addresses specific conflicts within your relationships and looks at how you relate to people—including family, friends, coworkers, and even strangers. Short-term IPT usually involves up to 20 weekly hour-long sessions and some studies show that it is as effective as antidepressants."

}, {
            title: 'Psychodynamic Therapy',
            description: "When most people think of therapy, psychodynamic is the type that comes to mind. It involves getting to the psychological root of your depression. To do so, patients are asked to engage in a significant amount of self-examination and reflection on the past. One of the goals is to help people identify troublesome relationship patterns in their lives and understand where they come from. This can help patients see why they behave in certain ways and remove guilt or self-blame so they can move forward with their lives."

}, {
            title: 'Electroconvulsive Therapy',
            description: "Electroconvulsive therapy (ECT), known to some as shock treatment, is used to treat severely depressed or suicidal people who don't respond to other forms of treatment or can't take antidepressants. A small electric current is delivered to the patient's brain while he is sedated under general anesthesia. The current, which lasts for about 40 seconds, causes seizure activity in the brain and typically brings immediate relief. Experts aren't sure why it works. Some people may suffer from temporary confusion and memory loss. ECT is usually administered once every two to five days, for a total of six to 12 sessions."

}, {
            title: 'Deep Brain Stimulation',
            description: "Originally used as a treatment for Parkinson's disease, deep brain stimulation (DBS) is still considered experimental in its use for depression. With DBS, two electrodes are surgically implanted into an area of the brain that is overactive in people with depression. The electrodes provide continual electric stimulation via a generator that is embedded in the chest. Researchers believe the electric pulses reset the brain and help it to function normally."

}, {
            title: 'Vagus Nerve Stimulation',
            description: "Like deep brain stimulation, vagus nerve stimulation (VNS) is a type of brain-stimulating therapy that uses an implanted device to send electric currents to the brain. Instead of putting a set of electrodes in the brain, one electrode is embedded just underneath the skin along the vagus nerve in the neck. The vagus nerve transmits messages from the brain to some major organs, such as the heart, lungs, and intestines, as well as to select parts of the brain. Stimulating this nerve appears to alter the levels of neurotransmitters (brain chemicals) associated with mood regulation. As with DBS, a pulse generator implanted in the chest controls the electrode. VNS is an experimental treatment, and the long-term side effects of its use are currently unknown. It is used only in cases of severe or chronic depression when other treatments fail."

}, {
            title: 'Alternative/Complementary Therapies',
            description: "In addition to or instead of medications and talk-based therapies, alternative treatments are helpful for many people battling depression. For instance, some vitamin and herbal supplements are believed to affect mood—St. John’s wort is one such herbal supplement; however, research on its efficacy are mostly inconclusive. (Always consult with your healthcare providers before taking any supplements.) Exercise has been shown to improve mood and alleviate some depression symptoms(Mayo Clinic).Many people believe that the body - mind connection is one reason that yoga and massage can be effective treatments for depression. Other alternative treatments include acupuncture and pet therapy."
}]
        console.log(treatments)
        return treatments;
    }
})();