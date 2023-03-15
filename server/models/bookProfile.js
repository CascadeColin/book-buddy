const {Schema, model } = require("mongoose");

const bookProfileSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        required: true,
        uniqure: true,
    },
    desc: {
        type: String,
        required: false,
        minlength: 8,
    },
    bookCover: {
        type: String,
        required: false,
    },
    isbn: {
        type: String,
        required: false,
    },
    isRead: {
        type: Boolean,
        default: false,
    },
    toRead: {
        type: Boolean,
        default: true,
    },
    isReading: {
        type: Boolean,
        default: false,
    },
    bookRating: {
        type: Number,
        required: false,
        default: 0,
        minlength: 0,
        maxlength: 5,
    },
    bookComment: {
        type: String,
        required: false,
        minlength: 4,
    },
});

const bookProfile = model("bookProfile", bookProfileSchema);

module.exports = bookProfile