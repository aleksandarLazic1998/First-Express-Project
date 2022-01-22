const { planets } = require("../../Models/planets.model");

function httpGetPlanets(_, res) {
	return res.status(200).json(planets);
}

module.exports = {
	httpGetPlanets,
};
