const app = require("../index");
const request = require("supertest");
const mongoose = require("mongoose");

describe("Testes das Rotas", () => {
	test("GET /api/cidades", () => {
		return request(app)
			.get("/api/cidades")
			.then((response) => {
				expect(response.statusCode).toBe(200);
				expect(response.body.length).toBe(6);
			});
	});

	test("GET /api/cidades?estado=df", () => {
		return request(app)
			.get("/api/cidades?estado=df")
			.then((response) => {
				expect(response.statusCode).toBe(200);
				expect(response.body.length).toBe(3);
			});
	});

	test("GET /api/cidades?nome=taguatinga", () => {
		return request(app)
			.get("/api/cidades?nome=taguatinga")
			.then((response) => {
				expect(response.statusCode).toBe(200);
				expect(response.body.length).toBe(1);
				expect(response.body[0].nome).toBe("taguatinga");
				expect(response.body[0].estado).toBe("df");
			});
	});

	test("GET /api/clientes", () => {
		return request(app)
			.get("/api/clientes")
			.then((response) => {
				expect(response.statusCode).toBe(200);
				expect(response.body.length).toBe(3);
			});
	});

	test("GET /api/clientes?nome=Alexandre", () => {
		return request(app)
			.get("/api/clientes?nome=Alexandre")
			.then((response) => {
				expect(response.statusCode).toBe(200);
				expect(response.body.length).toBe(1);
				expect(response.body[0]._id).toBe("60b3995eef3b3e0029a64947");
				expect(response.body[0].idade).toBe(26);
				expect(response.body[0].cidade._id).toBe("60b3989aef3b3e0029a64943");
			});
	});

	test("GET /api/clientes?_id=60b3995eef3b3e0029a64947", () => {
		return request(app)
			.get("/api/clientes?_id=60b3995eef3b3e0029a64947")
			.then((response) => {
				expect(response.statusCode).toBe(200);
				expect(response.body.length).toBe(1);
				expect(response.body[0].nome).toBe("Alexandre");
				expect(response.body[0].idade).toBe(26);
				expect(response.body[0].cidade._id).toBe("60b3989aef3b3e0029a64943");
			});
	});

	test("POST /api/cidades", () => {
		return request(app)
			.post("/api/cidades")
			.send({
				nome: "rio de janeiro",
				estado: "rj",
			})
			.then((response) => {
				expect(response.statusCode).toBe(201);
				expect(response.body.nome).toBe("rio de janeiro");
				expect(response.body.estado).toBe("rj");
			});
	});

	test("POST /api/clientes", () => {
		return request(app)
			.post("/api/clientes")
			.send({
				nome: "Larissa",
				dtNascimento: "19/12/1999",
				idade: 21,
				cidade: "60b3989aef3b3e0029a64943",
			})
			.then((response) => {
				expect(response.statusCode).toBe(201);
				expect(response.body.nome).toBe("Larissa");
				expect(response.body.idade).toBe(21);
			});
	});

	test("DELETE /api/clientes", () => {
		return request(app)
			.delete("/api/clientes/60b39942ef3b3e0029a64945")
			.then((response) => {
				expect(response.statusCode).toBe(204);
				expect(response.body).toStrictEqual({});
			});
	});

	test("PUT /api/clientes", () => {
		return request(app)
			.put("/api/clientes/60b3995eef3b3e0029a64947")
			.send({ nome: "Ezequiel" })
			.then((response) => {
				expect(response.statusCode).toBe(200);
				expect(response.body.nome).toBe("Ezequiel");
			});
	});
});

describe("Testes do Banco de dados", () => {
	test("Encerrando conexão", async () => {
		await mongoose.connection.close();
	});
});
