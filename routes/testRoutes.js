const express = require('express');
const testRouter = express.Router();
const Jar = require('../models/jar');


// jar test                         FIXME
testRouter.post("/", (req, res, next) => {
    const newJar = new Jar(req.body)
    newJar.save((err, newSavedJar) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201)
            .send(newSavedJar)
    })
})

//GET all
testRouter.get('/', (req, res, next) => {
    Jar.find((err, jars) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200)
        .send(jars)
    })
})

module.exports = testRouter;