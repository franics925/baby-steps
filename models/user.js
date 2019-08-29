var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const eventSchema = new Schema ({
    evTitle: {
        type: String,    },
    evDate: Date,
    evType: {
        type: String,
        enum: ['Communication', 'Motor', 'Sensory', 'Growth', 'Feeding', 'Other'],
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
    evDetails: {
        type: String,
    },
    child: {
        type: Schema.Types.ObjectId,
        ref: 'Child',
    },
}, {
    timestamps: true
});


const childSchema = new Schema ({
    childName: {
        type: String,
    },
    dob: {
        type: Date,
    },
    age: {
        type: Number,
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
    milestones: {
        type: Array,
    },
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    // },
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

const User = mongoose.model('User', userSchema);
const Child = mongoose.model('Child', childSchema);
const Event = mongoose.model('Event', eventSchema);

module.exports = mongoose.model('User', userSchema);
module.exports = mongoose.model('Child', childSchema);
module.exports = mongoose.model('Event', eventSchema);