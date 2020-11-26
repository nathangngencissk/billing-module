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
        enum: ['ABERTO',
            'SUBSTITUIDO',
            'LIQUIDADO',
            'CANCELADO'],
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
    transaction: {
        type: String,
        require: true
    },
    recipient: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('titles', titleSchema);