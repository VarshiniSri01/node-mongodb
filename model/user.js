const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name must require"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "email must require"],
        unique: true,
        lowercase: true,
        validator: [validator.isEmail,"please provide a valid email"]
    },
    phoneNumber: {
        type: String,
        required: [true, "phoneNumber must require"],
        unique: true,
        trim: true,
        minlength: 10,
        maxlength: 10,
    },
    dob: {
        type: String,
       required: [true, "dob must require"],
    },
});


const User = mongoose.model("User",userSchema);
module.exports = User;


