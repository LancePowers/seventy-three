var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');


var User = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        select: false
    },
    first: {
        type: String
    },
    last: {
        type: String
    },
    phone: {
        type: String
    },
    role: {
        type: String
    },
    googleProfileID: {
        type: String
    },
    firstLogin: {
        type: Boolean
    },
    patient: {
        type: String
    },
    face: {
        type: String
    }
});


// hash before saving to database
User.pre('save', function (next) {
    var user = this;

    // only hash if the password is new or modified
    if (!user.isModified('password')) return next();

    // generate salt
    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);
        // hash the password along with the salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            // overwrite the plain-text password with the hashed one
            user.password = hash;
            next();
        });
    });
});

// verify for plain-text and hashed passwords
User.methods.comparePassword = function (password, done) {
    bcrypt.compare(password, this.password, function (err, isMatch) {
        done(err, isMatch);
    });
};

module.exports = mongoose.model('users', User);