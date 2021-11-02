/* eslint-disable indent */
/* eslint-disable quotes */
const fs = require("fs");
const path = require("path");

const readable = fs.createReadStream(path.join(__dirname, "text.txt"));

readable.on("data", (chunk) => {
	process.stdout.write(chunk.toString());
});
