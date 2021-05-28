const mongoose = require("mongoose");

const schema = mongoose.Schema({
	nome: {
		type: String,
		required: true,
	},
	sexo: {
		type: String,
		required: false,
	},
	dtNascimento: {
		type: Date,
		required: true,
	},
	idade: {
		type: Number,
		required: true,
	},
	cidade: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Cidade",
	},
});

module.exports = mongoose.model("Cliente", schema);
