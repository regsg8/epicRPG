const express = require('express');
const app = express();
require('dotenv').config()
const morgan = require('morgan');
const mongoose = require('mongoose');
const expressJwt = require('express-jwt');
const PORT = process.env.PORT || 4300;
const secret = process.env.SECRET || "November Evergreen Victor Ember React";
const path = require('path');

//Global middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'client', 'build')));

//Connect to DB
mongoose.connect(
    process.env.MONGDODB_URI || 'mongodb://localhost:27017/tracker',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    () => console.log("Connected to the DB")
);

//Routes

//Error Handler
app.use((err, req, res, next) => {
    console.log(err);
    if (err.name === "UnauthorizedError") {
        res.status(err.status);
    }
    return res.send({ errMsg: err.message });
});

//Heroku Deployment
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
});

//Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));