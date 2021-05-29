const Cliente = require("../models/Cliente");
const moment = require("moment");

module.exports = {
	criar: async (req, res) => {
		let { nome, sexo, dtNascimento, idade, cidade } = req.body;

		dtNascimento = dtNascimento
			? moment(dtNascimento, "DD/MM/YYYY").format("YYYY-MM-DD")
			: null;

		const cliente = await Cliente.create({
			nome,
			sexo,
			dtNascimento,
			idade,
			cidade,
		});

		res.status(201).json(cliente);
	},

	buscar: async (req, res) => {
		const { nome, _id } = req.query;
		let params = {};

		if (nome) params = { ...params, nome };
		if (_id) params = { ...params, _id };

		const clientes = await Cliente.find(params).populate("cidade");

		res.json(clientes);
	},

	deletar: async (req, res) => {
		const { _id } = req.params;

		await Cliente.deleteOne({ _id });

		res.status(204).json();
	},

	atualizar: async (req, res) => {
		const { _id } = req.params;

		let { nome, sexo, dtNascimento, idade, cidade } = req.body;

		dtNascimento = dtNascimento
			? moment(dtNascimento, "DD/MM/YYYY").format("YYYY-MM-DD")
			: null;

		let params = {};

		if (nome) params = { ...params, nome };
		if (sexo) params = { ...params, sexo };
		if (dtNascimento) params = { ...params, dtNascimento };
		if (idade) params = { ...params, idade };
		if (cidade) params = { ...params, cidade };

		await Cliente.updateOne({ _id }, params);

		const cliente = await Cliente.find({ _id }).populate("cidade");

		res.json(cliente);
	},
};
