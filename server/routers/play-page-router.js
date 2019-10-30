const express = require("express");
const Router = express.Router();

Router.get("/fetch/vedio", function(req, res, next) {
    res.json({ src: "https://gss3.baidu.com/6LZ0ej3k1Qd3ote6lo7D0j9wehsv/tieba-smallvideo/60_51dda2571a6e1b2aa9409ffd709a9211.mp4" });
})

module.exports = Router;