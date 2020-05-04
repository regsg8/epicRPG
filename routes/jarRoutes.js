// const express = require('express');
// const jarRoutes = express.Router();
// // const {
// //     getJarsByUserId,
// //     getJarById,
// //     editJar,
// //     postJar,
// //     deleteJar
// // } = require("../controllers/jarControllers");
// const Jar = require('../models/jar');




// // Post Jars w/out user         //FIXME
//  jarRoutes.post("/", (req, res, next) => {
//     const newJar = new Jar(req.body)
//     newJar.save((err, newSavedJar) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(201)
//             .send(newSavedJar)
//     })
// })

// jarRoutes.get('/', (req, res, next) => {
//     Jar.find((err, jars) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200)
//         .send(jars)
//     })
// })

// // Jars by user ID
// // jarRoutes
// //     .route("/:_id")
// //     .get(getJarsByUserId)
// //     .post(postJar);

// // // get, delete, edit by Jar ID
// // jarRoutes
// //     .route("/jar/:_id")
// //     .put(editJar)
// //     .get(getJarById)
// //     .delete(deleteJar);

// module.exports = jarRoutes;

const express = require('express');
const jarRouter = express.Router();
const Jar = require('../models/jar');


// jar test                         FIXME
jarRouter.post("/", (req, res, next) => {
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
jarRouter.get('/', (req, res, next) => {
    Jar.find((err, jars) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200)
        .send(jars)
    })
})

module.exports = jarRouter;