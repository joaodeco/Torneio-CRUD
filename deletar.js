async function deletarJogo(id) {
    try {
        const jogoDeletado = await Jogo.findByIdAndDelete(id);
        return jogoDeletado;
    } catch (erro) {
        console.error("Erro ao deletar jogo:", erro);
        throw erro;
    }
}

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