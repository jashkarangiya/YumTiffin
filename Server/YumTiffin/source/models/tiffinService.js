const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

require('dotenv').config();

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 10
    },
    description: {
        type: String,
        min: 20,
        max: 200
    },
    city: {
        type: String,
        required: true
    },
    tiffins: [{
        tiffin: {
            type: String
        }
    }],
    owner: {
        type: String,
        required: true
    }
})

const Services = new mongoose.model("Services", serviceSchema);
module.exports = Services;