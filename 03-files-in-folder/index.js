/* eslint-disable indent */
/* eslint-disable quotes */

const fs = require("fs");
const path = require("path");

function listDir(dir) {
	fs.readdir(dir, { withFileTypes: true }, (err, files) => {
		if (err) {
			console.log(err);
			throw err;
		}

		console.log("\nCurrent directory files:");

		files.forEach((file) => {
			if (!file.isDirectory()) {
				printFile(dir, file);
			}
		});
	});
}

function printFile(dir, file) {
	let fullPath = `${dir}\\${file.name}`;
	return fs.stat(fullPath, (err, info) => {
		if (err) {
			console.log(err);
			throw err;
		}
		const size = Math.floor(info.size / 1024) + "Kb";
		console.log(
			`${file.name.split(".").slice(0, -1).join(".")} - ${path
				.extname(file.name)
				.substring(1)} - ${size}`
		); //=
	});
}

listDir(path.join(__dirname, "secret-folder"));
