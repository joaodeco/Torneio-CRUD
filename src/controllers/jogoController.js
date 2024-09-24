const Jogo = require("../models/Jogo")

// ADICIONAR
async function adicionarJogo(req, res) {
    const { nome, ano, genero } = req.body;
    try {
        const novoJogo = new Jogo({
            nome,
            ano,
            genero
        });
        const jogoSalvo = await novoJogo.save();
        res.status(201)
            .json({ mensagem: 'Jogo adiconado com sucesso', jogo: jogoSalvo })
    } catch (erro) {
        res.status(500)
            .json({ mensagem: 'Erro ao adicionar jogo', erro: erro.message })
    }
}

// ATUALIZAR
async function atualizarJogo(req, res) {
    const { id } = req.params;
    const { nome, ano, genero } = req.body;
    try {
        const jogoAtualizado = await Jogo.findByIdAndUpdate(
            id,
            { nome, ano, genero },
            { new: true, runValidators: true }
        );
        if (jogoAtualizado) {
            res.status(200).json({
                mensagem: "Jogo atualizado com sucesso",
                jogo: jogoAtualizado,
            });
        } else {
            res.status(404).json({ mensagem: "Jogo não encontrado" });
        }
    } catch (erro) {
        res.status(500).json({
            mensagem: "Erro ao atualizar jogo",
            erro: erro.message,
        });
    }
}


// DELETAR  
async function deletarJogo(req, res) {
    const { id } = req.params;
    try {
        const jogoDeletado = await Jogo.findByIdAndDelete(id);
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
}

// LISTAR
async function listarJogos(req, res) {
    try {
        const jogos = await listarJogos();
        res.status(200).json(jogos);
    } catch (erro) {
        res
            .status(500)
            .json({ mensagem: "Erro ao obter jogos", erro: erro.message });
    }
}

module.exports = {
    adicionarJogo,
    listarJogos,
    deletarJogo,
    atualizarJogo
};