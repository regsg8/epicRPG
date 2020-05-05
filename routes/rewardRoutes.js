// const { Router } = require("express");
// const {
//     getRewardsByUserId,
//     getRewardById,
//     editReward,
//     postReward,
//     deleteReward
// } = require("../controllers/rewardControllers");

// const rewardRoutes = Router();

// // Rewards by user ID
// rewardRoutes
//     .route("/:_id")
//     .get(getRewardsByUserId)
//     .post(postReward);

// // get, delete, edit by Reward ID
// rewardRoutes
//     .route("/reward/:_id")
//     .put(editReward)
//     .get(getRewardById)
//     .delete(deleteReward);

//     module.exports = rewardRoutes;

const express = require('express');
const rewardRouter = express.Router();
const Reward = require('../models/Reward');


// Reward test                         FIXME
rewardRouter.post("/", (req, res, next) => {
    const newReward = new Reward(req.body)
    newReward.save((err, newSavedReward) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201)
            .send(newSavedReward)
    })
})

//GET all
rewardRouter.get('/', (req, res, next) => {
    Reward.find((err, rewards) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200)
        .send(rewards)
    })
})

module.exports = rewardRouter;