// import express from "express";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import multer from "multer";
// import helmet from "helmet";
// import morgan from "morgan";
// import path from "path";
// import { register } from "./models/registers"
// import { fileURLToPath } from "url";
// // import authRoutes from "./routes/auth.js";
// // import userRoutes from "./routes/users.js";
// import { error } from "console";
// // import { verifyToken } from "./middleware/auth.js";

require('dotenv').config();

const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');



require("./db/conn.js");
const Register = require("./models/registers");

// Middlewares
const auth = require('./middleware/auth');
const { log } = require('console');

const port = process.env.PORT || 3000;
const expires = process.env.JWT_Expires;

// All the paths required for web
const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(static_path));
app.set("view engine", ".hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);


app.get("/", (req, res) => {
    res.render("index")

});

app.get("/secret", auth, (req, res) => {
    // console.log(`Cookie: ${req.cookies.jwt}`);
    res.render("secret")

});

app.get("/logout", auth, async(req, res) => {
    try {
        // console.log(req.user);
        console.log(`Loggout out from ${req.user.firstName}'s account!!`);
        res.clearCookie('jwt');


        await req.user.save();
        res.render("login")
    } catch (error) {
        res.status(500).send(error);
    }
});


// enter the data from login to db
app.post("/register", async(req, res) => {
    try {
        const password = req.body.password;
        const cPassword = req.body.confirmPassword;

        if (password === cPassword) {
            const registerCustomers = new Register({

                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email,
                password: password,
                confirmPassword: cPassword
            })

            console.log("the success part: " + registerCustomers);

            const token = await registerCustomers.generateAuthToken();
            console.log(`The required token is ${token}`);

            console.log("Ahi too pochi gayo!")


            // console.log(cookie);

            const registered = await registerCustomers.save();
            // console.log(`The page part ${registerCustomers}`);

            res.status(201).render("login");
        } else {
            res.send("Password not matching!!")
        }

    } catch (error) {
        res.status(400).send(error);
    }

})



app.get("/register", (req, res) => {
    res.render("register")
})



app.get("/login", (req, res) => {
    res.render("login")
})

// login check  
app.post("/login", async(req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const userEmail = await Register.findOne({ email: email });
        const isMatch = await bcrypt.compare(password, userEmail.password);

        const token = await userEmail.generateAuthToken();
        console.log(`The required token is ${token}`);

        // Creating cookies
        res.cookie("jwt", token, {
            expires: process.env.JWT_Expires,
            httpOnly: true
        });

        // console.log("Hu ahi pochu chu!");
        // console.log(`Cookie: ${req.cookies.jwt}`);


        if (isMatch) {
            res.status(201).render("index");
        } else {
            res.send("invalid login details!!")
        }
    } catch (error) {
        console.log(error)
        res.status(400).send("Invalid login details")
            // res.status(201).render("index");
    }
})

//Redirecting to about us page
app.get("/about", (req, res) => {
    res.render("aboutUs")
})

//Redirecting to error page
app.use(function(req, res) {
    res.status(404).render('notFound');
});




app.listen(port, () => {
    console.log(`Server is running at port no ${port}`);
})

// 
// app.use(express.favicon("../templates/images/Tiffin.png"));