//const {Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
    createdBy: {
        type: String,
        required: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        required: true,
        //unique: true, do we need author to be unique? May have many books by same author
    },
    desc: {
        type: String,
        required: false,
    },
    //url string for image
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
        required:false,
        default: false,
    },
    toRead: {
        type: Boolean,
        required: true,
        default: true,
    },
    isReading: {
        type: Boolean,
        required: false,
        default: false,
    },
    bookRating: {
        type: Number,
        required: false,
        default: 0,
        minlength: 0,
        maxlength: 5,
    },
    bookComment: [
        {
            commentText: {
            type: String,
            required: false,
            minlength: 4,
            maxlength: 280,
            },
            bookCommentCreator: {
            type: String,
            required: true,    
            },
        },
    ]
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;