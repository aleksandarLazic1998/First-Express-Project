const launches = new Map();

let launchDefaultId = 1000;

function checkIfLaunchIsValid(requestBody) {
	return !requestBody.name || !requestBody.date || !requestBody.description;
}

function addLaunch(requestBody) {
	const newLaunch = Object.assign(requestBody, { id: (launchDefaultId += 1) });

	launches.set(requestBody.id, newLaunch);
	return newLaunch;
}

function deleteLaunch(launchId) {
	let response;
	if (launches.get(launchId)) {
		launches.delete(launchId);
		response = { message: "Item Successfully Deleted" };
	} else {
		response = { error: `'Item With id: ${launchId} was not found'` };
	}

	return response;
}

function getLaunches() {
	return Array.from(launches.values());
}

function getLaunch(launchId) {
	let response;
	if (launches.get(launchId)) response = launches.get(launchId);
	else response = { error: `Launch With Id: ${launchId} Does Not Exist` };

	return response;
}

module.exports = {
	checkIfLaunchIsValid,
	addLaunch,
	deleteLaunch,
	getLaunches,
	getLaunch,
};
