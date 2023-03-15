const {Schema, model } = require("mongoose");
const bcrypt = require("bcrpyt");

const userProfileSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        uniqure: true,
        match: [/.+@.+\..+/, "Please make sure you have provided a correct Email address!"]
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
        type:Date,
        required: false,
    },
    bookCompleted: {
        type: Number,
        default: 0,
    },
});

// pre-save middle ware for password creation
userProfileSchema.pre("save", async function (next){
    if(this.isNew || this.isModified("password")) {
        const saltRounds = 10
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
})

// code to compare incomming password with hashed password
userProfileSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

const userProfile = model("userProfile", userProfileSchema);

module.exports = userProfile