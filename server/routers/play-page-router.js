const express = require("express");
const genDB  = require("../dataBase");
const Router = express.Router();
const animeDB = genDB("anime");
const greateAnimeDB = genDB("greateAnime")

Router.get("/fetch/greatevideo", function(req, res, next) {
    const params = req.query;
    greateAnimeDB.find({ _id: params._id}, function (err, doc) {
        res.send(doc);
    })
})
Router.get("/fetch/animevideo", function(req, res, next) {
    const params = req.query;
    animeDB.find({ _id: params._id}, function (err, doc) {
        res.send(doc);
    })
})

module.exports = Router;