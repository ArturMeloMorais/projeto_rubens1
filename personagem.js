const { Habilidade, Armas, Arsenal } = require("./habilidades_arsenal.js");

class Personagem {//personagem (pode ser usado para criar npc ou inimigos passivel de alteracoes)
    #nome;
    #ocupacao;
    #habilidade1;
    #habilidade2;
    #vida
    #armadura;
    #velocidade;
    #arsenal;
    #dinheiro;
    constructor(nome, ocupacao, habilidade1, habilidade2, vida, armadura, velocidade, arsenal, dinheiro) {
        this.#nome = nome;
        this.#ocupacao = ocupacao; // serve apenas para textos que precise falar da ocupação
        this.#habilidade1 = habilidade1;
        this.#habilidade2 = habilidade2;
        this.#vida = vida;  // a definir se regenera apos a luta
        this.#armadura = armadura;
        this.#velocidade = velocidade;
        this.#arsenal = arsenal;
        this.#dinheiro = dinheiro;
    }

    // Métodos getters
    get nome() {
        return this.#nome;
    }

    get ocupacao() {
        return this.#ocupacao;
    }

    get habilidade1() {
        return this.#habilidade1;
    }

    get habilidade2() {
        return this.#habilidade2;
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

const habilidade1 = new Habilidade("tiro", 20); //teste
const habilidade2 = new Habilidade("tiro duplo", gerarNumeroAleatorio0_20() + gerarNumeroAleatorio0_20()); //teste

function gerarNumeroAleatorio0_20() {
    return Math.floor(Math.random() * 21);  // Gera um número aleatório entre 0 e 20
} // gerador de numeros aleatorios 



module.exports = { Personagem, gerarNumeroAleatorio0_20 };