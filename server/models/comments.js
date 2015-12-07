var mongoose = require('mongoose-q')(require('mongoose'), {
    spread: true
});
var Schema = mongoose.Schema;


var Comment = new Schema({
    who: Object,
    what: String,
    type: String,
    patient: String,
    notes: String,
    answers: Array,
    created: Date,
    updated: Date,
    emoji: Object
})
module.exports = mongoose.model('Comments', Comment);