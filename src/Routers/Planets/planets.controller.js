const { planets, getPlanetById } = require("../../Models/planets.model");

function httpGetPlanets(_, res) {
	return res.status(200).json(planets);
}

function httpGetPlanet(req, res) {
	const planetId = req.params.id;

	let responseStatus = 200;
	let response;
	if (getPlanetById(planetId)) {
		response = getPlanetById(planetId);
	} else {
		responseStatus = 404;
		response = { error: `Planet With id: ${planetId} Not Found` };
	}
	return res.status(responseStatus).json(response);
}

module.exports = {
	httpGetPlanets,
	httpGetPlanet,
};
