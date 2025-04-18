
class Habilidades {
    #nome
    #dano
    #falha
    constructor(nome, dano, falha){
    this.#nome = nome,
    this.#dano = dano,
    this.#falha = falha
    }
    get nome(){
    return this.#nome
    }
    get dano(){
    return this.#dano
    }
    get falha(){
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


const habilidade1 = new Habilidades("Golpe Rápido", 15, 5);  // Define o nome, dano e chance de falha
console.log(habilidade1.dano)  // ❌ Vai retornar undefined

