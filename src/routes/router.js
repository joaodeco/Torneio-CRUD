const express = require("express");
const router = express.Router();
const jogoControllers = require("../controllers/jogoController")

router.post("/", jogoControllers.adicionarJogo);
router.get("/", jogoControllers.listarJogos);
router.put("/:id", jogoControllers.atualizarJogo);
router.delete("/:id", jogoControllers.deletarJogo);

module.exports = router;