async function listarJogos() {
    try {
        return await listarJogos.find();
    
    } catch (erro) {
        console.error("Erro ao obter jogo:", erro);
        throw erro;
    }
}

app.get("/jogos", async (req, res) => {
    try {
        const Jogos = await listarJogos();
        res.status(200).json(jogos);
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao obter jogos", erro: erro.mesage });
    }
});
