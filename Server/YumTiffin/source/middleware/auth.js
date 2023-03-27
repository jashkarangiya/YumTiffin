const jwt = require('jsonwebtoken');
const Register = require('../models/registers');

const auth = async(req, res, next) => {
    try {
        // console.log("Hello from auth");
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(verifyUser);

        const user = await Register.findOne({ _id: verifyUser._id });
        // console.log(user.firstName);
        req.token = token;
        req.user = user;
        next();

    } catch (error) {
        res.status(401).send(`Please login to visit this page. \n Error: ${error}`);
    }
}

module.exports = auth;