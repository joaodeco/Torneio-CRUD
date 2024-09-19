const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
    .connect("mongodb://localhost:27017/CrudJogos")
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((erro) => console.error("Erro ao conectar ao MongoDB:", erro))

const listarJogos = require('./listar');
app.get('/jogos', async (req, res) => {
    try {
        const jogos = await listarJogos();
        res.status(200).json(jogos);
    } catch (erro) {
        res
            .status(500)
            .json({ mensagem: "Erro ao obter jogos", erro: erro.message });
    }
});

const atualizarJogo = require('./atualizar');
app.put("/jogos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, ano, genero } = req.body;
        const jogoAtualizado = await atualizarJogo(
            id,
            nome,
            ano,
            genero
        );
        if (jogoAtualizado) {
            res
                .status(200)
                .json({
                    mensagem: "Jogo atualizado com sucesso",
                    jogo: jogoAtualizado,
                });
        } else {
            res.status(404).json({ mensagem: "Jogo não encontrado" });
        }
    } catch (erro) {
        res
            .status(500)
            .json({ mensagem: "Erro ao atualizar jogo", erro: erro.message });
    }
});

const deletarJogo = require('./deletar');
app.delete("/jogos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const jogoDeletado = await deletarJogo(id);
        if (jogoDeletado) {
            res
                .status(200)
                .json({ mensagem: "Jogo deletado com sucesso", jogo: jogoDeletado });
        } else {
            res.status(404).json({ mensagem: "Jogo não encontrado" });
        }
    } catch (erro) {
        res
            .status(500)
            .json({ mensagem: "Erro ao deletar jogo", erro: erro.message });
    }
});

const adicionarJogo = require('./adicionar')
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
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});