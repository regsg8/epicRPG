const { Router } = require("express");
const {
    getJarsByUserId,
    getJarById,
    editJar,
    postJar,
    deleteJar
} = require("../controllers/jarControllers");

const jarRoutes = Router();

// Jars by user ID
jarRoutes
    .route("/:_id")
    .get(getJarsByUserId)
    .post(postJar);

// get, delete, edit by Jar ID
jarRoutes
    .route("/jar/:_id")
    .put(editJar)
    .get(getJarById)
    .delete(deleteJar);

    module.exports = jarRoutes;