// const mongoose = require("mongoose");

// mongoose.set("strictQuery", false);

// mongoose.connect("mongodb://localhost:27017/YumTiffinDB",
//     err => {
//         if (err) throw err;
//         console.log('Connected to MongoDB');
//     })

//The server might be running but got no clue because "Connection successful is not printed"


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


// exports.connect = () => {
//     mongoose.connect(MONGO_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         })
//         .then(console.log(`DB Connection is success!`))
//         .catch((error) => {
//             console.log(`DB connection is Failed!`)
//             console.log(error);
//             process.exit(1)
//         })
// }