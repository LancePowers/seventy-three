var config = require('../../_config');
var client = require('twilio')(config.TWILIO_SID, config.TWILIO_TOKEN);
var User = require('../models/user.js');

function sendUpdates(patient, message) {
    console.log('fn send updates', patient, message);
    User.findQ({
            patient: patient
        })
        .then(function (results) {
            results.forEach(function (user) {
                console.log('sendUpdate returns', user)
                sendMessage(user.phone, message);
            })
        })
}

function sendMessage(number, message) {
    console.log('send message to', number, message)
    client.messages.create({
        to: number,
        from: "+17203707677",
        body: message,
    }, function (err, message) {
        if (err) {
            console.log('error', err)
        } else {
            console.log('message', message);
        }
    });
}

module.exports = {
    sendUpdates: sendUpdates
};