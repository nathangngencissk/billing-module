const mongoose = require('mongoose');
const { Schema } = mongoose;

const movementSchema = new Schema({
    title: {
        type: Schema.Types.ObjectId,
        ref: "Title"
    },
    type: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    originalValue: {
        type: Number,
        require: true
    },
    interest: {
        type: Number,
        require: true
    },
    fine: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('movements', movementSchema);