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
        enum: ['Communications', 'Motor', 'Sensory', 'Feeding', 'Other'],
    },
    curHtFt: {
        type: Number,
    },
    curHtIn: {
        type: Number,
        min: 0,
        max: 11,
    },
    curWtLbs: {
        type: Number,
        min: 0,
    },
    curWtOz: {
        type: Number,
        min: 0,
        max: 15,
    },
    addDet: {
        type: String,
    },
}, {
    timestamps: true
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
        min: 0,
    },
    birHtIn: {
        type: Number,
        min: 0,
        max: 11,
    },
    birWtLbs: {
        type: Number,
        min: 0,
    },
    birWtOz: {
        type: Number,
        min: 0,
        max: 15,
    },
    curHtFt: {
        type: Number,
        min: 0,
    },
    curHtIn: {
        type: Number,
        min: 0,
        max: 11,
    },
    curWtLbs: {
        type: Number,
        min: 0,
    },
    curWtOz: {
        type: Number,
        min: 0,
        max: 15,
    },
    hospital: {
        type: String,
    },
    physician: {
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
        min: 00000,
        max: 99999,
    },
    addDet: {
        type: String,
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