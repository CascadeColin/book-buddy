//const {Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const Book = require("./Book");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    //unique: true, don't think name should be unique could be 2 john smiths just need unique email?
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /.+@.+\..+/,
      "Please make sure you have provided a valid Email address!",
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  bookGoal: {
    type: Number,
    default: 0,
  },
  goalDate: {
    type: Date,
    required: false,
  },
  bookCompleted: {
    type: Number,
    default: 0,
  },
  books: [Book.schema],
});

// pre-save middle ware for password creation
userSchema.pre("save", async function (next){
    if(this.isNew || this.isModified("password")) {
        const saltRounds = 10
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
})

// code to compare incomming password with hashed password
userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User