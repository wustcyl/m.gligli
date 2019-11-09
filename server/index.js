const express = require("express");
const path = require("path");
const middlewareConfig = require("./config");
const mainPageRouter = require("./routers/main-page-router");
const playPageRouter = require("./routers/play-page-router");
const searchPageRouter = require("./routers/search-page-router");
const cardPageRouter = require("./routers/card-page-router");
const app = express();

let page_views = 0;

middlewareConfig(app);
app.use(express.static(path.join(__dirname, '../build'))); 

app.use("/api/mainpage", mainPageRouter);
app.use("/api/playpage", playPageRouter);
app.use("/api/searchpage", searchPageRouter);
app.use("/api/cardpage", cardPageRouter);
app.get("/api/getpageviews", function(req, res) {
    res.header("Cache-Control", "max-age=0")
    res.json({page_views: page_views, id: +Date.now()});
})
app.get("/*", function (req, res, next) {
    page_views++;
    res.sendFile(path.join(__dirname, '../build', './index.html'));
})
 

app.listen(8080, () => {
    console.log("GliGli 后端服务启动！启动端口8080")
})