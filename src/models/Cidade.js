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
	clientes: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Cliente",
		},
	],
});

module.exports = mongoose.model("Cidade", schema);
