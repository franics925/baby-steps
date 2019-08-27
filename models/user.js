var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const eventSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    date: Date,
    type: {
        type: String,
        enum: ['firsts', 'health', 'general'],
        required: true,
        default: 'general'
    },
    description: String
});

const childSchema = new Schema ({
    name: String,
    dob: Date,
    age: Number,
    events: [eventSchema]
}, {
    timestamps: true
});


const userSchema = new Schema ({
    name: String,
    email: String,
    // avatar: String,
    googleId: String,
    child: [childSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);