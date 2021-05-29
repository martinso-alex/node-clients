const mongoose = require("mongoose");

const schema = mongoose.Schema({
	nome: {
		type: String,
		required: true,
	},
	estado: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Cidade", schema);
