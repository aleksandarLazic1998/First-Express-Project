const fs = require("fs");
const { parse } = require("csv-parse");

const API_URL = require("../Routes");

const planets = [];

function loadPlanetsData() {
	return new Promise((resolve, reject) => {
		fs.createReadStream(`${API_URL.CSV_PATH}/planets_data.csv`).pipe(
			parse({ columns: true, comment: "#" })
				.on("data", (data) => {
					planets.push(data);
				})
				.on("error", (error) => {
					reject(error);
				})
				.on("end", () => {
					resolve();
				})
		);
	});
}

function getPlanetById(id) {
	const planet = planets.find((planet) => planet.kepid === id);
	return planet;
}

module.exports = {
	planets,
	loadPlanetsData,
	getPlanetById,
};
