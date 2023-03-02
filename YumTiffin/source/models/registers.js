const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    phoneNumber: {
        type: Number,
        required: true,
        max: 10
    },

    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },

    password: {
        type: String,
        required: true,
        min: 8,
        max: 20
    },

    confirmPassword: {
        type: String,
        required: true,
        min: 8,
        max: 20
    }


})

// Creating collections:
const Register = new mongoose.model("Register", usersSchema);

module.exports = Register;