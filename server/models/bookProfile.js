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
});

const bookProfile = model("bookProfile", bookProfileSchema);

module.exports = bookProfile