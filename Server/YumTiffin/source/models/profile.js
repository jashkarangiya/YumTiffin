const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require('dotenv').config();


// Declaring the profile schema
const profileSchema = new mongoose.Schema({
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
    address: {
        type: String,
        min: 20,
        max: 200
    },
    orders: [{
        order: {
            type: String,
            required: true
        }
    }]
})


// Creating collections:
const Profile = new mongoose.model("Profile", profileSchema);
module.exports = Profile;