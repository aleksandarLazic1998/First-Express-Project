const http = require("http");

const app = require("./app");
const { loadPlanetsData } = require("./Models/planets.model");

const PORT = process.env.PORT;
const server = http.createServer(app);

const loadAllData = async () => {
	/* List Of All Data That Needs To Load Before Server Run */
	await loadPlanetsData();

	server.listen(PORT, () => {
		console.log(`Listening On Port ${PORT}`);
	});
};

loadAllData();
