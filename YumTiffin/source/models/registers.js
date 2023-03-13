const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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

// Hasing the password

usersSchema.pre("save", async function(next) {

    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);

        this.confirmPassword = undefined;
    }
    // const passwordHash = await bcrypt.hash(password, 10);

    next();
})

// Creating collections:
const Register = new mongoose.model("Register", usersSchema);

module.exports = Register;