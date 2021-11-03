/* eslint-disable indent */
/* eslint-disable quotes */

const fs = require("fs");
const path = require("path");

function fileHandler(text) {
	fs.appendFile(path.join(__dirname, "text.txt"), text, (err) => {
		if (err) throw err;
	});
}

const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on("line", function (answer) {
	console.log("curent line:", answer);
	if (answer === "exit") {
		console.log("Thank you for being with us !");
		// process.exit();
		rl.close();
	} else {
		fileHandler(answer + "\n");
	}
});

console.log("Enter text ... or 'exit'");
