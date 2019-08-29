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
    name: {
        type: String,
    },
    dob: {
        type: Date,
    },
    sex: {
        type: String,
        enum: ['', 'Boy', 'Girl', 'Other']
    },
    birHtFt: {
        type: Number,
    },
    birHtIn: {
        type: Number,
    },
    birWtLbs: {
        type: Number,
    },
    birWtOz: {
        type: Number,
    },
    curHtFt: {
        type: Number,
    },
    curHtIn: {
        type: Number,
    },
    curWtLbs: {
        type: Number,
    },
    curWtOz: {
        type: Number,
    },
    addDet: {
        type: String,
    },
    birStreet: {
        type: String,
    },
    birCity: {
        type: String,
    },
    birState: {
        type: String,
    },
    birZip: {
        type: Number,
    },
    events: [eventSchema],
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