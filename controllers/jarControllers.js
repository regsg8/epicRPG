const mongoose = require("mongoose");
const Jar = require("../models/jar");
const User = require("../models/user");

const getJarsByUserId = async (req, res, next) => {
    try {
        const jars = await Jar.findOne({ user: req.user._id });
        return res.status(200).send(jars);
    } catch (err) {
        res.status(500);
        next(err);
    }
};

const getJarById = async (req, res, next) => {
    try {
        const jar = await Jar.findOne({ _id: req.params._id }); //FIXME add query check against user { _id: req.params._id, user: req.user._id }
        return res.status(200).send(jar);
    } catch (err) {
        res.status(500);
        next(err);
    }
};

const editJar = async (req, res, next) => {
    console.log("fix edit jar")
    // try {
    //     const updatedJar = await Jar.findOneAndUpdate(
    //         { _id = req.params._id },  //FIXME add query check against user { _id: req.params._id, user: req.user._id }
    //         req.body,
    //         { new: true }
    //     );
    //     return res.status(200).send(updatedJar);
    // } catch (err) {
    //     res.status(500);
    //     next(err);
    // }
};

const postJar = async (req, res, next) => {
    try {
        const newJar = new Jar(req.body);
        //FIXME add user ID newJar.user = mongoose.Types.ObjectId(req.params._id);
        const jar = await newJar.save(newJar);
        //FIXME push Jar into user's array of Jars 
        // const updatedUser = await User.findOneAndUpdate(
        //     { _id: req.user._id },
        //     { $push: { Jars: mongoose.Types.ObjectId(Jar._id) } },
        //     { new: true }
        //   );
        return res.status(200).send(jar)
    } catch (err) {
        res.status(500);
        next(err);
    }
};

const deleteJar = async (req, res, next) => {
    try {
        const jar = await Jar.findOneAndRemove({
            _id: req.params._id,
            //user: req.user._id FIXME
        });
        //FIXME remove from user's array of Jars
        // const updatedUser = await User.findOneAndUpdate(
        //     { _id: req.user._id },
        //     { $pull: { Jars: mongoose.Types.ObjectId(board._id) } }
        //   );
        return res.status(200).send(jar);
    } catch (err) {
        res.status(500);
        next(err);
    }
};

module.exports = {
    getJarsByUserId,
    getJarById,
    editJar,
    postJar,
    deleteJar
};