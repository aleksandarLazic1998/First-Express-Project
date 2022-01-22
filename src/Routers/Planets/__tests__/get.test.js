const request = require("supertest");

const app = require("../../../app");
const API_URL = require("../../../Routes");

describe("GET /planets", () => {
	test("should respond with status 200 and return data", async () => {
		const response = await request(app)
			.get(API_URL.PLANETS_URL.BASE_URL)
			.expect("Content-Type", /json/)
			.expect(200);
	});
});
