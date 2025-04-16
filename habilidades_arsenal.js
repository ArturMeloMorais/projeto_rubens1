const prompt = require('prompt-sync')();

class Habilidade { // gerrado para reaproveitar a mesma habilladeda
    #nome
    #dano
    #falha    //margem de falha
    constructor(nome, dano, falha) {
        this.#nome = nome;
        this.#dano = dano;
        this.#falha = falha;
    }

    // Métodos getters
    get nome() {
        return this.#nome;
    }

    get dano() {
        return this.#dano;
    }

    get falha() {
        return this.#falha;
    }
}

class Armas {
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


class Arsenal{
    constructor(){
        this.armas = [];
    }
    adicionarArmas(arma){
        this.armas.push(arma)
        return;
    }
    get mostrarArmas(){
        return `Armas disponíveis para uso: \n Arma 1: ${this.armas[0].getNome()} \n Arma 2: ${this.armas[1].getNome()}`
    }
    escolherArma(){
        let escolha = prompt("Digite 1 ou 2 para escolher a arma desejada: ")
        if(escolha === "1"){
            console.log(`Arma escolhida: ${this.armas[0].getNome()}`);
            return this.armas[0];
        }
        else if (escolha === "2"){
            console.log(`Arma escolhida: ${this.armas[1].getNome()}`);
            return this.armas[1];
        }
        else{
            console.log("valor inválido, tente novamente")
            return this.escolherArma()
        }
    }
}

module.exports = { Habilidade, Armas, Arsenal};


//const arma1 = new Armas("parabelo",12,5)
//const arma2 = new Armas ("punhal", 9,4)


//const arsenal = new Arsenal()


//arsenal.adicionarArmas(arma1)
//arsenal.adicionarArmas(arma2)


//console.log(arsenal.mostrarArmas)
//arsenal.escolherArma()
