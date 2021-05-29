const { Router } = require("express");
const clientes = require("../controllers/clientes");

const router = Router();

router.get("/clientes", clientes.buscar);

router.post("/clientes", clientes.criar);

router.delete("/clientes/:_id", clientes.deletar);

router.put("/clientes/:_id", clientes.atualizar);

module.exports = router;
