const https = require("https");

const app = require("./app");

const PORT = process.env.PORT;
const server = https.createServer(app);

server.listen(PORT, () => {
	console.log(`Listening On Port ${PORT}`);
});
