const express = require('express');
const app = express();
require('dotenv').config()
const morgan = require('morgan');
const mongoose = require('mongoose');
//const expressJwt = require('express-jwt'); FIXME
const PORT = process.env.PORT || 4300;
//const secret = process.env.SECRET || "November Evergreen Victor Ember React"; FIXME
const path = require('path');
const trackerRoutes = require("./routes/trackerRoutes");
const jarRoutes = require("./routes/jarRoutes");
const rewardRoutes = require("./routes/rewardRoutes");

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
//FIXME add user login/register routes
//FIXME add jwt verification to api routes
// main resource routes
app.use("/api/trackers", trackerRoutes);
app.use("/api/jars", jarRoutes);
app.use("/api/rewards", rewardRoutes);

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