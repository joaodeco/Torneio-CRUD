const Jogo = require('./esquema')
async function listarJogos() {
    try {
        return await Jogo.find();
    
    } catch (erro) {
        console.error("Erro ao obter jogo:", erro);
        throw erro;
    }
}

module.exports = listarJogos