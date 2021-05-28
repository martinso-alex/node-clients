module.exports = (app) => {
	app.use("/api", [
    require("./cidades"), 
    require("./clientes")
  ]);
};
