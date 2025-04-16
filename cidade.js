class Cidade{
    #nome
    #itens_disponíveis
    constructor(nome, itens_disponíveis){
    this.#nome = nome,
    this.#itens_disponíveis = itens_disponíveis
    }
    get InfoCidade(){
        //texto json sobre a cidade
    }
    get itens_disponíveis(){
        //texto sobre oq se pode conseguir na cidade
    }
    comprarItens(){
        // array de itens disponíveis, escolher 1 pelo índice e se tiver dinheiro (cruzados novos)
    }
}

module.exports = {Cidade};