const path = require("path");

const API_URL = {
	BASE_URL: `https://localhost:${process.env.PORT}`,
	CSV_PATH: path.join(__dirname, "Data"),
	PLANETS_URL: {
		BASE_URL: "/planets",
	},
};

module.exports = API_URL;
