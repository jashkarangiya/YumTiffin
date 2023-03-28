const mongoose = require("mongoose")
const express = require("express");

const MONGO_URL = "mongodb://0.0.0.0:27017/YumTiffinDB"

mongoose.set("strictQuery", false);

mongoose.connect(MONGO_URL)
    .then(console.log(`DB Connection is success!`))
    .catch((error) => {
        console.log(`DB connection is Failed!`)
        console.log(error);
    })

// YumTiffinDB.services.insert()