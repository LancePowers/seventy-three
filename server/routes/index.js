var path = require('path');
var express = require('express');
var router = express.Router();
var Comment = require('../models/comments.js')



router.get('/comments/:id', function (req, res, err) {

    console.log(req.params.id)
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
    console.log(req.body.who.face);
    new Comment({
            who: req.body.who,
            what: req.body.what,
            type: req.body.type,
            patient: req.body.who.patient,
            notes: req.body.notes,
        }).saveQ()
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