const mongoose = require('mongoose');
const { Schema } = mongoose;

const titleSchema = new Schema({
    openValue: {
        type: Number,
        require: true
    },
    originalValue: {
        type: Number,
        require: true
    },
    closingDate: {
        type: Date,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    discount: {
        type: Number,
        require: true
    },
    interest: {
        type: Number,
        require: true
    },
    document: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('titles', titleSchema);