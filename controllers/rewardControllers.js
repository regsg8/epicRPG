const mongoose = require("mongoose");
const Reward = require("../models/Reward");
const User = require("../models/user");

const getRewardsByUserId = async (req, res, next) => {
    try {
        const rewards = await Reward.findOne({ user: req.user._id });
        return res.status(200).send(rewards);
    } catch (err) {
        res.status(500);
        next(err);
    }
};

const getRewardById = async (req, res, next) => {
    try {
        const reward = await Reward.findOne({ _id: req.params._id }); //FIXME add query check against user { _id: req.params._id, user: req.user._id }
        return res.status(200).send(reward);
    } catch (err) {
        res.status(500);
        next(err);
    }
};

const editReward = async (req, res, next) => {
    try {
        const updatedReward = await Reward.findOneAndUpdate(
            { _id = req.params._id },  //FIXME add query check against user { _id: req.params._id, user: req.user._id }
            req.body,
            { new: true }
        );
        return res.status(200).send(updatedReward);
    } catch (err) {
        res.status(500);
        next(err);
    }
};

const postReward = async (req, res, next) => {
    try {
        const newReward = new Reward(req.body);
        //FIXME add user ID newReward.user = mongoose.Types.ObjectId(req.params._id);
        const reward = await newReward.save(newReward);
        //FIXME push reward into user's array of Rewards 
        // const updatedUser = await User.findOneAndUpdate(
        //     { _id: req.user._id },
        //     { $push: { rewards: mongoose.Types.ObjectId(Reward._id) } },
        //     { new: true }
        //   );
        return res.status(200).send(reward)
    } catch (err) {
        res.status(500);
        next(err);
    }
};

const deleteReward = async (req, res, next) => {
    try {
        const reward = await Reward.findOneAndRemove({
            _id: req.params._id,
            //user: req.user._id FIXME
        });
        //FIXME remove from user's array of Rewards
        // const updatedUser = await User.findOneAndUpdate(
        //     { _id: req.user._id },
        //     { $pull: { rewards: mongoose.Types.ObjectId(board._id) } }
        //   );
        return res.status(200).send(reward);
    } catch (err) {
        res.status(500);
        next(err);
    }
};

module.exports = {
    getRewardsByUserId,
    getRewardById,
    editReward,
    postReward,
    deleteReward
};