async function adicionarJogo(nome, ano, genero){
    try{
        const novoJogo = new Jogo({nome, ano, genero})
        return await novoJogo.save()
    }catch(erro) {
        console.log(`Deu erro para criar o livro: ${erro}`)
        throw erro
    }
}

module.exports = adicionarJogo