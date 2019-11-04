const express = require("express");
const path = require("path");
const middlewareConfig = require("./config");
const mainPageRouter = require("./routers/main-page-router");
const playPageRouter = require("./routers/play-page-router");
const searchPageRouter = require("./routers/search-page-router");
const app = express();

middlewareConfig(app);
app.use(express.static(path.join(__dirname, '../build'))); 

app.use("/api/mainpage", mainPageRouter);
app.use("/api/playpage", playPageRouter);
app.use("/api/searchpage", searchPageRouter);
app.get("/*", function (req, res, next) {
    res.sendFile(path.join(__dirname, '../build', './index.html'));
})

app.listen(8080, () => {
    console.log("GliGli 后端服务启动！启动端口8080")
})