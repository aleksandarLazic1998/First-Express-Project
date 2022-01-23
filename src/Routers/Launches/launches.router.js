const express = require("express");
const {
	httpPostLaunch,
	httpDeleteLaunch,
	httpGetLaunches,
	httpGetLaunch,
} = require("./launches.controller");

const LaunchesRouter = express.Router();

LaunchesRouter.get("/", httpGetLaunches);
LaunchesRouter.get("/:id", httpGetLaunch);
LaunchesRouter.post("/", httpPostLaunch);
LaunchesRouter.delete("/:id", httpDeleteLaunch);

module.exports = LaunchesRouter;
