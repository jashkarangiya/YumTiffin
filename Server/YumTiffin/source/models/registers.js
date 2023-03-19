const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require('dotenv').config();


// Decalring the user schema
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


// generating functions
usersSchema.methods.generateAuthToken = async function() {
    try {
        console.log(this._id);
        const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
        console.log("The required token is " + token);

        return token;


    } catch (error) {
        res.send("The error part " + error);
        console.log("The error part " + error);
    }
}


// Hasing the password
usersSchema.pre("save", async function(next) {

    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
        console.log(`the current password is ${this.password}`);
        this.confirmPassword = undefined;
    }
    // const passwordHash = await bcrypt.hash(password, 10);
    next();
})



// Creating collections:
const Register = new mongoose.model("Register", usersSchema);
module.exports = Register;