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
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'client', 'build')));

//Connect to DB
mongoose.connect(
    process.env.MONGDODB_URI || 'mongodb://localhost:27017/epicRPG',
    { useNewUrlParser: true },
    () => console.log("Connected to the DB")
);

//Routes

//Error Handler

//Heroku Deployment
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
});

//Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));