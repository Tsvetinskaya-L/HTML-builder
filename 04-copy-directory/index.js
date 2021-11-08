/* eslint-disable indent */
/* eslint-disable quotes */

const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "files");
const dstDir = path.join(__dirname, "files-copy");

fs.promises.rm(dstDir, { force: true, recursive: true }).then(() => {
	copyDir("");
});

function copyDir() {
	const allSrcPath = path.join(srcDir);
	const allDstPath = path.join(dstDir);

	fs.promises.mkdir(allDstPath).then(() => {
		fs.promises
			.readdir(allSrcPath, { withFileTypes: true })
			.then((fileList) => {
				for (let file of fileList) {
					if (file.isFile()) {
						const srcFilePath = path.join(allSrcPath, file.name);
						const dstFilePath = path.join(allDstPath, file.name);
						fs.promises
							.copyFile(srcFilePath, dstFilePath)
							.catch((err) => console.log(err));
					} else if (file.isDirectory()) {
						copyDir(path.join(file.name));
					}
				}
			});
	});
}
