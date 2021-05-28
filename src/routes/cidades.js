const { Router } = require("express");
const cidades = require("../controllers/cidades");

const router = Router();

router.get("/cidades", cidades.buscar);

router.post("/cidades", cidades.criar);

module.exports = router;
