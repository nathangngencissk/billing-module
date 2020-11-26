const mongoose = require('mongoose');
const { Schema } = mongoose;

const documentSchema = new Schema({
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
    }
});

module.exports = mongoose.model('documents', documentSchema);