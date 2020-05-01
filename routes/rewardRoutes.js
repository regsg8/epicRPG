const { Router } = require("express");
const {
    getRewardsByUserId,
    getRewardById,
    editReward,
    postReward,
    deleteReward
} = require("../controllers/rewardControllers");

const rewardRoutes = Router();

// Rewards by user ID
rewardRoutes
    .route("/:_id")
    .get(getRewardsByUserId)
    .post(postReward);

// get, delete, edit by Reward ID
rewardRoutes
    .route("/reward/:_id")
    .put(editReward)
    .get(getRewardById)
    .delete(deleteReward);

    module.exports = rewardRoutes;