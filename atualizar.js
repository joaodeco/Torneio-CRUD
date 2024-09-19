const Jogo = require('./esquema')

async function atualizarJogo(id, nome, genero, ano) {
    try {
        const jogoAtualizado = await Jogo.findByIdAndUpdate(
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

module.exports = atualizarJogo