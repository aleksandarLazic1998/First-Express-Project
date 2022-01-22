const express = require("express");
const { httpPostLaunch } = require("./launches.controller");

const LaunchesRouter = express.Router();

LaunchesRouter.post("/", httpPostLaunch);

module.exports = LaunchesRouter;
