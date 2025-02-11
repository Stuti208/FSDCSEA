const fs = require('fs');

function dataWrite() {
	try {
		fs.writeFileSync("data.txt", "Hello nodejs using fs module");
		console.log("data written successfully");
	}
	catch (err) {
		console.log("Error while writing the data:" + err);
	}
}

function dataRead() {
	try {
		const data = fs.readFileSync("data.txt", { encoding: 'utf-8' })
		console.log(data)
	}
	catch (err) {
		console.log("Error while reading the data:" + err);
	}
}

function dataAppend() {
	try {
		fs.appendFileSync("data.txt", " appending using fs module");
		console.log("data appended successfully");
	}
	catch (err) {
		console.log("Error while writing the data:" + err);
	}

}

function deleteFile() {
	try {
		fs.unlinkSync("data.txt");
		console.log("file deleted successfully");
	}
	catch (err) {
		console.log("Error while deleting the file:" + err);
	}
}

const obj = {
	dataWrite,
	dataRead,
	dataAppend,
	deleteFile
}

module.exports = obj;