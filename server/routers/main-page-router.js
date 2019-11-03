const express = require("express");
const Router = express.Router();
const genDB  = require("../dataBase");
const animeDB = genDB("anime");
const greateAnimeDB = genDB("greateAnime")

//精品漫画
Router.get("/fetch/greatevideo", function (req, res, next) {
    greateAnimeDB.find({}, function(err, doc) {
        res.send(doc);
    }).limit(12);
})
//爬虫漫画
Router.get("/fetch/spidervideo", function(req, res, next) {
    animeDB.find({}, function(err, doc) {
        const cnt = Math.floor(Math.random() * 85);
        res.send(doc.slice(cnt, cnt + 12));
    }).limit(100)
})

module.exports = Router;