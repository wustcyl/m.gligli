const express = require("express");
const genDB  = require("../dataBase");
const Router = express.Router();
const animeDB = genDB("anime");
const greateAnimeDB = genDB("greateAnime")

Router.get("/fetch/greatevideo", function(req, res, next) {
    const params = req.query;
    greateAnimeDB.find({ _id: params._id}, function (err, doc) {
        const tags = doc[0].tags;
        if (tags.length) {
            greateAnimeDB.find({ tags: {$in: tags[0] }}, function (err, ans) {
                doc = doc.concat(ans);
                res.send(doc);
            }).limit(5);
        } else {
            greateAnimeDB.aggregate([{ $sample: { size: 5 } }], function (err, ans) {
                doc = doc.concat(ans);
                res.send(doc);
            }).limit(5);
        }
    })
})
Router.get("/fetch/animevideo", function(req, res, next) {
    const params = req.query;
    animeDB.find({ _id: params._id}, function (err, doc) {
        animeDB.aggregate([{ $sample: { size: 5 } }], function (err, ans) {
            doc = doc.concat(ans);
            res.send(doc);
        })
    })
})

 
module.exports = Router;