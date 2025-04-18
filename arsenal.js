
class Habilidades {
    #nome
    #dano
    #falha
    constructor(nome, dano, falha){
    this.#nome = nome,
    this.#dano = dano,
    this.#falha = falha
    }
    getNome(){
    return this.#nome
    }
    getDano(){
    return this.#dano
    }
    getFalha(){
    return this.#falha
    }
}

class CaixaItens{
    #itens
    constructor(){
        this.#itens = []
    }

    receberItem(n){
        return this.#itens[n]
    }

    mudarItem(n, valor){
        this.#itens[n] = valor;
    }

    adicionarItem(valor) {
        this.#itens.push(valor);
    }
    listarItens() {
        return this.#itens
    }
}

module.exports = {Habilidades , CaixaItens};


//const arma1 = new Armas("parabelo",12,5)
//const arma2 = new Armas ("punhal", 9,4)


//const arsenal = new Arsenal()


//arsenal.adicionarArmas(arma1)
//arsenal.adicionarArmas(arma2)


//console.log(arsenal.mostrarArmas)
//arsenal.escolherArma()
