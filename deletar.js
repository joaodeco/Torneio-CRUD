const Jogo = require('./esquema')

async function deletarJogo(id) {
    try {
        const jogoDeletado = await Jogo.findByIdAndDelete(id);
        return jogoDeletado;
    } catch (erro) {
        console.error("Erro ao deletar jogo:", erro);
        throw erro;
    }
}

module.exports = deletarJogo