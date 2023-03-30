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
const Profile = require('./models/profile');
const Services = require("./models/tiffinService");
const services = require('./db/data/services');



// Middlewares
const auth = require('./middleware/auth');
const { log } = require('console');

const port = process.env.PORT || 3000;
const expires = process.env.JWT_expiresIn;


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
        console.log(`Logged-out out from ${req.user.firstName}'s account!!`);
        res.clearCookie('jwt');

        await req.user.save();
        res.redirect("login")
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

            const token = await registerCustomers.generateAuthToken();

            // console.log(`The required token is ${token}`);
            // console.log("Ahi too pochi gayo!")
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
        console.log(`Expires in: ${process.env.JWT_Expires * 90 * 24 * 60 * 60 * 1000}`);
        // Creating cookies
        res.cookie("jwt", token, {
            expires: new Date(Date.now() + process.env.JWT_Expires * 90 * 24 * 60 * 60 * 1000),
            httpOnly: true
        });

        // console.log("Hu ahi pochu chu!");
        // console.log(`Cookie: ${req.cookies.jwt}`);


        if (isMatch) {
            // console.log(req.user);
            res.status(201).redirect("home");
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

//Redirecting to home page
app.get("/home", auth, (req, res) => {
    if (auth) {
        Services.find({ city: "Ahemdabad" }, function(err, Services) {
            if (err) console.warn(err);
            console.warn(services);
        });

        // console.log(req.services);
        console.log(req.user.firstName);
        // console.log(req.services.name);
        // const newUser = new Profile({
        //     firstName: req.user.firstName
        // })
        // console.log(firstName);

        // new profile = newUser.save();
        res.render("home", { data: req.user.firstName });
    } else {
        console.log(req.cookies.jwt);
        res.status(400).send("Please login!")
    }

})

//Redirecting to profile page
app.get("/profile", auth, async(req, res) => {

    try {
        // console.log(`Name: ${req.user.firstName}`);

        res.render("profile", {
            post: {
                firstName: req.user.firstName,
                lastName: req.user.lastName,
                phoneNumber: req.user.phoneNumber,
                email: req.user.email
            }
        })
    } catch (error) {
        res.status(500).send(error);

    }


})

//Redirecting to error page
app.use(function(req, res) {
    res.status(404).render('notFound');
});


app.listen(port, () => {
    console.log(`Server is running at port no ${port}`);
})

// app.use(express.favicon("../templates/images/Tiffin.png"));