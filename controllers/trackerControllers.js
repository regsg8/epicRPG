const mongoose = require("mongoose");
const Tracker = require("../models/tracker");
const User = require("../models/user");

const getTrackersByUserId = async (req, res, next) => {
    try {
        const trackers = await Tracker.findOne({ user: req.user._id });
        return res.status(200).send(trackers);
    } catch (err) {
        res.status(500);
        next(err);
    }
};

const getTrackerById = async (req, res, next) => {
    try {
        const tracker = await Tracker.findOne({ _id: req.params._id }); //FIXME add query check against user { _id: req.params._id, user: req.user._id }
        return res.status(200).send(tracker);
    } catch (err) {
        res.status(500);
        next(err);
    }
};

const editTracker = async (req, res, next) => {
    console.log("Fix edit Tracker")
    // try {
    //     const updatedTracker = await Tracker.findOneAndUpdate(
    //         { _id = req.params._id },  //FIXME add query check against user { _id: req.params._id, user: req.user._id }
    //         req.body,
    //         { new: true }
    //     );
    //     return res.status(200).send(updatedTracker);
    // } catch (err) {
    //     res.status(500);
    //     next(err);
    // }
};

const postTracker = async (req, res, next) => {
    try {
        const newTracker = new Tracker(req.body);
        //FIXME add user ID newTracker.user = mongoose.Types.ObjectId(req.params._id);
        const tracker = await newTracker.save(newTracker);
        //FIXME push tracker into user's array of trackers 
        // const updatedUser = await User.findOneAndUpdate(
        //     { _id: req.user._id },
        //     { $push: { trackers: mongoose.Types.ObjectId(tracker._id) } },
        //     { new: true }
        //   );
        return res.status(200).send(tracker)
    } catch (err) {
        res.status(500);
        next(err);
    }
};

const deleteTracker = async (req, res, next) => {
    try {
        const tracker = await Tracker.findOneAndRemove({
            _id: req.params._id,
            //user: req.user._id FIXME
        });
        //FIXME remove from user's array of trackers
        // const updatedUser = await User.findOneAndUpdate(
        //     { _id: req.user._id },
        //     { $pull: { trackers: mongoose.Types.ObjectId(board._id) } }
        //   );
        return res.status(200).send(tracker);
    } catch (err) {
        res.status(500);
        next(err);
    }
};

module.exports = {
    getTrackersByUserId,
    getTrackerById,
    editTracker,
    postTracker,
    deleteTracker
};