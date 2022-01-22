const express = require("express");

const { httpGetPlanets, httpGetPlanet } = require("./planets.controller");

const PlanetsRouter = express.Router();

PlanetsRouter.get("/", httpGetPlanets);
PlanetsRouter.get("/:id", httpGetPlanet);

module.exports = PlanetsRouter;
