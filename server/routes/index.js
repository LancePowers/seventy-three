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
            console.log(result);
            res.json(result);
        })
        .catch(function (err) {
            console.log(err);
            res.json(err);
        })
        .done();
});

router.post('/comments', function (req, res, err) {
    console.log(req.body);

    new Comment({
            who: req.body.who.first,
            what: req.body.what,
            type: req.body.type,
            patient: req.body.who.patient,
            phone: req.body.who.phone,
            notes: req.body.notes,
            face: req.body.face
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