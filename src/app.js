const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors({ origin: `${process.env.CORS_WHITE_LIST}` }));
app.use(morgan("combined"));
app.use(express.json());

module.exports = app;
