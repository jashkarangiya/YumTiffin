const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn.js");
const port = process.env.PORT || 3000;

// All the paths required for web
const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));
app.set("view engine", ".hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);


app.get("/", (req, res) => {
    res.render("index")

});

app.get("/register", (req, res) => {
    res.render("register")
})

app.get("/login", (req, res) => {
    res.render("login")
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