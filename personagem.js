const {Habilidades } = require("./arsenal.js");


const fs = require('fs');
const personagens = JSON.parse(fs.readFileSync('./personagens.json', 'utf-8'));
const prompt = require("prompt-sync")()


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
        this.#habilidade1 = habilidade1;
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




// criar personagens com json

const pistola = new Habilidades("pistola", 15, 2);
const tiroduplo = new Habilidades("tiro duplo de escopeta", 50, 2)

const lampiao = new Personagem(
    personagens[0].nome,
    personagens[0].ocupacao,
    personagens[0].vida,
    personagens[0].armadura,
    personagens[0].velocidade,
    personagens[0].dinheiro,
    pistola, 
    tiroduplo
)


const faca = new Habilidades("faca", 12, 7)
const chute = new Habilidades("chute",10, 7 )

const francisctexeira = new Personagem(
    personagens[1].nome,
    personagens[1].ocupacao,
    personagens[1].vida,
    personagens[1].armadura,
    personagens[1].velocidade,
    personagens[1].dinheiro,
    faca,
    chute
)


const volante = new Personagem(
    personagens[2].nome,
    personagens[2].ocupacao,
    personagens[2].vida,
    personagens[2].armadura,
    personagens[2].velocidade,
    personagens[2].dinheiro,
    faca,
    pistola
)

let disparo = new Habilidades("disparo", 10, 2)


const bandidoscidade = new Personagem(
    personagens[3].nome,
    personagens[3].ocupacao,
    personagens[3].vida,
    personagens[3].armadura,
    personagens[3].velocidade,
    personagens[3].dinheiro,
    disparo,
    faca
   
)

const bandidoscidade2 = new Personagem(
    personagens[3].nome,
    personagens[3].ocupacao,
    personagens[3].vida,
    personagens[3].armadura,
    personagens[3].velocidade,
    personagens[3].dinheiro,
    disparo,
    faca
   
)

let escopeta = new Habilidades("escopeta", 15, 5)
let facao = new Habilidades("facao", 14, 4)


const zerufino = new Personagem(
    personagens[4].nome,
    personagens[4].ocupacao,
    personagens[4].vida,
    personagens[4].armadura,
    personagens[4].velocidade,
    personagens[4].dinheiro,
    escopeta,
    facao
 
)

//o atributo de velocidade é usado na mecânica de fuga, que no projeto atual não é usado.

module.exports = { Personagem, gerarNumeroAleatorio0_20, lampiao, francisctexeira, volante, bandidoscidade,bandidoscidade2, zerufino };
