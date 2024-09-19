const mongoose = require("mongoose");
const esquemaJogo = new mongoose.Schema({
    nome: { type: String, required: true },
    ano: { type: String, required: true },
    genero: { type: String, required: true },
});

const Jogo = mongoose.model("Jogo", esquemaJogo);

module.exports = Jogo