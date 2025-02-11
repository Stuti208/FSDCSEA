const fs = require('fs');
fs.writeFile("data.txt", "Welcome to FSD session", () => {
	console.log("data written successfully");
})

fs.readFile("data.txt", (err, data) => {
	if (err) {
		console.log("Error while reading the data:" + err);
	}
	console.log(data.toString());
})

fs.appendFile("data.txt", " append in file", () => {
	console.log("data appended successfully");
})

fs.unlink("data.txt", () => {
	console.log("file deleted successfully");
})

