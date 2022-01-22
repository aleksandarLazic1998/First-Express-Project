const request = require("supertest");

const app = require("../../../app");
const API_URL = require("../../../Routes");

describe("POST /planets", () => {
	test("should respond with status 200 and return data", async () => {
		const requestBody = {
			name: "Test 1",
			date: "1998-11-11",
			description: "Test Description",
		};

		const expectedResponse = {
			name: "Test 1",
			date: "1998-11-11T00:00:00.000Z",
			description: "Test Description",
			id: 1001,
		};

		await request(app)
			.post(API_URL.LAUNCHES_URL.BASE_URL)
			.set("Accept", /application\/json/)
			.send(requestBody)
			.expect(201, expectedResponse);
	});
});
