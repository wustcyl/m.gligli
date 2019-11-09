const express = require("express");
const Router = express.Router();
const genDB  = require("../dataBase");
const animeDB = genDB("anime");
const greateAnimeDB = genDB("greateAnime");
const cardDB = genDB("card");

//精品漫画
Router.get("/fetch/greatevideo", function (req, res, next) {
    greateAnimeDB.find({}, function(err, doc) {
        res.send(doc);
    }).limit(12);
})
//爬虫漫画
Router.get("/fetch/spidervideo", function(req, res, next) {
    animeDB.find({}, function(err, doc) {
        res.send(doc);
    }).limit(12);
})
Router.get("/fetch/card", function(req, res, next) {
    cardDB.find({}, function(err, doc) {
        res.send(doc);
    }).limit(12);
})
module.exports = Router;