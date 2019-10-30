const express = require("express");
// express 中间件配置
const middlewareConfig = require("./config");
const mainPageRouter = require("./routers/main-page-router");
const playPageRouter = require("./routers/play-page-router");
const app = express();

middlewareConfig(app);

//设置路由
app.use("/api/mainpage", mainPageRouter);
app.use("/api/playpage", playPageRouter);

app.listen(8080, () => {
    console.log("GliGli 后端服务启动！启动端口8080")
})