const launches = new Map();

let launchID = 100;

const launch = {
	launchId: launchID,
	customer: ["ZTM", "NASA"],
	upcoming: true,
	success: true,
	mission: "Kepler Exploration X",
	rocket: "Exploration IS1",
	destination: "Kepler-442 b",
	launchDate: new Date("12-27-2030"),
};
launches.set(launch.launchId, launch);

function getLaunches() {
	const arrayOfMapLaunches = Array.from(launches.values());
	return arrayOfMapLaunches;
}

function addLaunch(launch) {
	const launchId = launchID++;
	let newLaunch = Object.assign(launch, {
		launchId,
		customer: [""],
		upcoming: true,
		success: true,
	});

	launches.set(launch.launchId, newLaunch);
}

function launchListHaveFlightWithId(launchId) {
	return launches.has(launchId);
}

function removeLaunchFromList(launchId) {
	const deletedLaunch = launches.get(launchId);
	launches.delete(launchId);
	return deletedLaunch;
}

module.exports = {
	getLaunches,
	addLaunch,
	launchListHaveFlightWithId,
	removeLaunchFromList,
};
