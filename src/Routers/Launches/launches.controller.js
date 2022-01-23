const {
	checkIfLaunchIsValid,
	addLaunch,
	deleteLaunch,
	getLaunches,
	getLaunch,
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

function httpDeleteLaunch(req, res) {
	const launchId = +req.params.id;
	let responseStatus = 200;
	let response = deleteLaunch(launchId);

	if (deleteLaunch(launchId).error) responseStatus = 404;

	return res.status(responseStatus).json(response);
}

function httpGetLaunches(_, res) {
	return res.status(200).json(getLaunches());
}

function httpGetLaunch(req, res) {
	const launchId = +req.params.id;
	let responseStatus = 200;
	let response = getLaunch(launchId);

	if (getLaunch(launchId)) responseStatus = 404;

	return res.status(responseStatus).json(response);
}

module.exports = {
	httpPostLaunch,
	httpDeleteLaunch,
	httpGetLaunches,
	httpGetLaunch,
};
