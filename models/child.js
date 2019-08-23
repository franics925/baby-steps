var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const childSchema = new Schema ({
    name: String,
    email: String,
    avatar: String,
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Child', childSchema);