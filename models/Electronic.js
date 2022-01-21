const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
},{
    timestamps: true
});

const electronicSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    comments: [commentSchema]
}, {
    timestamps: true
});


module.exports = mongoose.model('Electronic', electronicSchema);