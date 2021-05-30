const seeder = require("mongoose-seed");

const db = "mongodb://mongodb:27017/clients";

seeder.connect(db, () => {
	seeder.loadModels(["./src/models/Cidade.js", "./src/models/Cliente.js"]);
	seeder.clearModels(["Cidade", "Cliente"], () => {
		seeder.populateModels(data, (err, done) => {
			if (err) console.log("seed err", err);
			if (done) console.log("seed done", done);

			seeder.disconnect();
		});
	});
});

const data = [
	{
		model: "Cidade",
		documents: [
			{
				_id: "60b3947ec757870028351780",
				nome: "samambaia",
				estado: "df",
			},
			{
				_id: "60b3987eef3b3e0029a64940",
				nome: "ceilandia",
				estado: "df",
			},
			{
				_id: "60b39885ef3b3e0029a64941",
				nome: "taguatinga",
				estado: "df",
			},
			{
				_id: "60b39890ef3b3e0029a64942",
				nome: "goiania",
				estado: "go",
			},
			{
				_id: "60b3989aef3b3e0029a64943",
				nome: "luziania",
				estado: "go",
			},
			{
				_id: "60b398a3ef3b3e0029a64944",
				nome: "alexania",
				estado: "go",
			},
		],
	},
	{
		model: "Cliente",
		documents: [
			{
				_id: "60b39942ef3b3e0029a64945",
				nome: "Giulia",
				dtNascimento: "1994-12-19T00:00:00.000Z",
				idade: 26,
				cidade: "60b3987eef3b3e0029a64940",
			},
			{
				_id: "60b3994aef3b3e0029a64946",
				nome: "Miguel",
				dtNascimento: "1994-12-19T00:00:00.000Z",
				idade: 26,
				cidade: "60b3987eef3b3e0029a64940",
			},
			{
				_id: "60b3995eef3b3e0029a64947",
				nome: "Alexandre",
				dtNascimento: "1994-12-19T00:00:00.000Z",
				idade: 26,
				cidade: "60b3989aef3b3e0029a64943",
			},
		],
	},
];
