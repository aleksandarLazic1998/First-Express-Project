const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const API_URL = require("./Routes");
const PlanetsRouter = require("./Routers/Planets/planets.router");
const LaunchesRouter = require("./Routers/Launches/launches.router");

const app = express();

/* MIDDELWARES */
app.use(cors({ origin: `${process.env.CORS_WHITE_LIST}` }));
app.use(morgan("combined"));
app.use(express.json());

/* HTTP Method */
app.use(API_URL.PLANETS_URL.BASE_URL, PlanetsRouter);
app.use(API_URL.LAUNCHES_URL.BASE_URL, LaunchesRouter);

module.exports = app;
