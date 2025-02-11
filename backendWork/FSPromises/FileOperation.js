const promise = require('fs').promises;

const fsp = promise.writeFile("data.txt", "Hello using fs promises");
fsp.then(() => {
	console.log("data written successfully");
}).catch((err) => {
	
}).finally(() => {
	
})
