const { Router } = require("express");
const clientes = require("../controllers/clientes");

const router = Router();

router.get("/clientes", clientes.buscar);

router.post("/clientes", clientes.criar);

router.get("/clientes/:id", clientes.deletar);

router.get("/clientes/:id", clientes.atualizar);

module.exports = router;
