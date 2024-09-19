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
app.delete('/:id', deletarJogo);

const adicionar = require('./adicionar')
app.post('/jogos', async(req, res) => {
    try {
        const { nome, ano, genero} = req.body
        const novoJogo = await adicionarJogo(nome, ano, genero)
        res
        .status(201)
        .json({mensagem: 'Jogo adiconado com sucesso', jogo: novoJogo})
    } catch {
        res
        .status(500)
        .json('Erro ao adicionar jogo')
    }
})

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