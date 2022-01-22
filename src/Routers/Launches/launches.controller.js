const {
	checkIfLaunchIsValid,
	addLaunch,
} = require("../../Models/launches.model");

function httpPostLaunch(req, res) {
	let responseStatus = 201;
	let response;
	const launch = req.body;

	if (checkIfLaunchIsValid(launch)) {
		responseStatus = 404;
		response = { error: "Must Enter All Parameters" };
	} else {
		if (isNaN(new Date(launch.date))) {
			responseStatus = 404;
			response = { error: "Date Must Be In Proper Date Format" };
		} else {
			const newLaunchObject = addLaunch(launch);
			newLaunchObject.date = new Date(launch.date);
			response = newLaunchObject;
		}
	}

	return res.status(responseStatus).json(response);
}

module.exports = {
	httpPostLaunch,
};
