const launches = new Map();

let launchDefaultId = 1000;

function checkIfLaunchIsValid(requestBody) {
	return !requestBody.name || !requestBody.date || !requestBody.description;
}

function addLaunch(requestBody) {
	const newLaunch = Object.assign(requestBody, {
		id: (launchDefaultId += 1),
	});

	launches.set(requestBody.id, newLaunch);
	return newLaunch;
}

module.exports = { checkIfLaunchIsValid, addLaunch };
