const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
    .connect("mongodb://localhost:27017/CrudJogos")
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((erro) => console.error("Erro ao conectar ao MongoDB:", erro))

const atualizarJogo = require('./atualizarJogo');
app.put('/', atualizarJogo);

const deletarJogo = require('./deletar');
app.delete('/', deletarJogo);

const esquemaJogo = new mongoose.Schema({
    nome: { type: String, required: true },
    ano: { type: String, required: true },
    genero: { type: String, required: true },
});

const Jogo = mongoose.model("Jogo", esquemaJogo);

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});