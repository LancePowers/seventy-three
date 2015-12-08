var path = require('path');
var express = require('express');
var router = express.Router();

var Comment = require('../models/comments.js')
var twilio = require('../utilities/twilio.utility.js')


router.get('/comments/:id', function (req, res, err) {

    Comment.findQ({
            patient: req.params.id
        })
        .then(function (result) {
            res.json(result);
        })
        .catch(function (err) {
            console.log(err);
            res.json(err);
        })
        .done();
});

router.post('/comments', function (req, res, err) {
    new Comment({
            who: req.body.who,
            what: req.body.what,
            type: req.body.type,
            patient: req.body.who.patient,
            notes: req.body.notes,
            created: req.body.created,
            emoji: req.body.emoji
        }).saveQ()
        .then(function (result) {
            if (result[0].type === 'checkins') {
                var message = result[0].what + result[0].emoji.unicode + '\n -' + result[0].who.first;
                twilio.sendUpdates(result[0].patient, message);
            }
            console.log(result)
            res.json(result);
        })
        .catch(function (err) {
            console.log(err)
            res.json(err);
        })
        .done();
})

router.put('/comments', function (req, res, err) {
    console.log(req.body);
    Comment.findOneAndUpdateQ({
            _id: req.body._id
        }, req.body)
        .then(function (result) {
            console.log(result)
            res.json(result);
        })
        .catch(function (err) {
            console.log(err)
            res.json(err);
        })
        .done();
})


router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
});

module.exports = router;