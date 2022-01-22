const express = require("express");

const { httpGetPlanets } = require("./planets.controller");

const PlanetsRouter = express.Router();

PlanetsRouter.get("/", httpGetPlanets);

module.exports = PlanetsRouter;
