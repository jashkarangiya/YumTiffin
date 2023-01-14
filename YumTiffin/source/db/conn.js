const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost:27017/YumTiffinDB",
    err => {
        if (err) throw err;
        console.log('Connected to MongoDB');
    })

//The server might be running but got no clue because "Connection successful is not printed"