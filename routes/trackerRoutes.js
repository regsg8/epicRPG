const { Router } = require("express");
const {
    getTrackersByUserId,
    getTrackerById,
    editTracker,
    postTracker,
    deleteTracker
} = require("../controllers/trackerControllers");

const trackerRoutes = Router();

// trackers by user ID
trackerRoutes
    .route("/:_id")
    .get(getTrackersByUserId)
    .post(postTracker);

// get, delete, edit by tracker ID
trackerRoutes
    .route("/tracker/:_id")
    .put(editTracker)
    .get(getTrackerById)
    .delete(deleteTracker);

    module.exports = trackerRoutes;