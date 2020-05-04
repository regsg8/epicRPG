// const { Router } = require("express");
// const {
//     getTrackersByUserId,
//     getTrackerById,
//     editTracker,
//     postTracker,
//     deleteTracker
// } = require("../controllers/trackerControllers");

// const trackerRoutes = Router();

// // trackers by user ID
// trackerRoutes
//     .route("/:_id")
//     .get(getTrackersByUserId)
//     .post(postTracker);

// // get, delete, edit by tracker ID
// trackerRoutes
//     .route("/tracker/:_id")
//     .put(editTracker)
//     .get(getTrackerById)
//     .delete(deleteTracker);

//     module.exports = trackerRoutes;

const express = require('express');
const testTrackerRouter = express.Router();
const Tracker = require('../models/tracker');


// Tracker test                         FIXME
testTrackerRouter.post("/", (req, res, next) => {
    const newTracker = new Tracker(req.body)
    newTracker.save((err, newSavedTracker) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201)
            .send(newSavedTracker)
    })
})

//GET all
testTrackerRouter.get('/', (req, res, next) => {
    Tracker.find((err, trackers) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200)
        .send(trackers)
    })
})

module.exports = testTrackerRouter;