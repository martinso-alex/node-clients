const mongoose = require("mongoose");
mongoose.Promise = Promise;

module.exports = (uri) => {
	mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
	const conn = mongoose.connection;

	conn.on("error", (err) =>
		console.log("\n Mongoose! Connection error: " + err)
	);

	process.on("SIGINT", () =>
		conn.close(() => {
			console.log("\n Mongoose! Disconnected by application termination");
			process.exit(0);
		})
	);
};
