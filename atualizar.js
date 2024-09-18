async function atualizarJogo(id, nome, genero, ano) {
    try {
        const jogoAtualizado = await Livro.findByIdAndUpdate(
            id,
            { nome, genero, ano },
            { new: true, runValidators: true }
        );
        return jogoAtualizado;
    } catch (erro) {
        console.error("Erro ao atualizar jogo", erro);
        throw erro;
    }
}

app.put("/jogos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, genero, ano } = req.body;
        const jogoAtualizado = await atualizarJogo(
            id,
            nome,
            genero,
            ano
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