const Cidade = require("../models/Cidade");

module.exports = {
	criar: async (req, res) => {
		const { nome, estado } = req.body;

		const cidade = await Cidade.create({ nome, estado });

		res.status(201).json(cidade);
	},

	buscar: async (req, res) => {
		const { nome, estado } = req.query;
		let params = {};

		if (nome) params = { ...params, nome };
		if (estado) params = { ...params, estado };

		const cidades = await Cidade.find(params);

		res.json(cidades);
	},
};
