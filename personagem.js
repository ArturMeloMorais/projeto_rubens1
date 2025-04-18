const {Habilidades } = require("./arsenal.js");

class Personagem {//personagem (pode ser usado para criar npc ou inimigos passivel de alteracoes)
    #nome;
    #ocupacao;
    #habilidade1;
    #habilidade2;
    #vida
    #armadura;
    #velocidade;
    #dinheiro;
    constructor(nome, ocupacao, vida, armadura, velocidade, dinheiro, habilidade1, habilidade2) {
        this.#nome = nome;
        this.#ocupacao = ocupacao; // serve apenas para textos que precise falar da ocupação
        this.#vida = vida;
        this.#armadura = armadura;
        this.#velocidade = velocidade;
        this.#dinheiro = dinheiro;
        this.habilidade1 = habilidade1;
        this.#habilidade2 = habilidade2;
    }

    // Métodos getters
    get nome() {
        return this.#nome;
    }

    get ocupacao() {
        return this.#ocupacao;
    }

    get vida() {
        return this.#vida;
    }

    get armadura() {
        return this.#armadura;
    }
    get velocidade() {
        return this.#velocidade;
    }
    get dinheiro(){
        return this.#dinheiro
    }

    // Setters para as habilidades
    set habilidade1(habilidade) {
        this.#habilidade1 = habilidade;
    }

    set habilidade2(habilidade) {
        this.#habilidade2 = habilidade;
    }

    // Métodos getters (continuam iguais)
    get habilidade1() {
        return this.#habilidade1;
    }

    get habilidade2() {
        return this.#habilidade2;
    }


    set vida(novaVida) {
        if (novaVida >= 0) {
            this.#vida = novaVida;
        } else {
            console.log("Encerrar jogo"); // Encerrar jogo (modificar esse atributo colocando um modo de encerrar o jogo)
        }
    }


    levarDano(dano) {
        this.#vida = this.#vida - dano;  // Atualiza a vida diretamente
    }
}

const habilidade1 = new Habilidades("tiro", 20); //teste
const habilidade2 = new Habilidades("tiro duplo", gerarNumeroAleatorio0_20() + gerarNumeroAleatorio0_20()); //teste

function gerarNumeroAleatorio0_20() {
    return Math.floor(Math.random() * 21);  // Gera um número aleatório entre 0 e 20
} // gerador de numeros aleatorios 



module.exports = { Personagem, gerarNumeroAleatorio0_20 };