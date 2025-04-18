const {Personagem, gerarNumeroAleatorio0_20 } = require("./personagem.js");
const {Armas, CaixaItens } = require("./arsenal.js");

class Protagonista extends Personagem {
    #reputacao;
    #caixaItens;
    #nome;
    #ocupacao;
    #habilidade1;
    #habilidade2;
    #vida
    #armadura;
    #velocidade;
    #dinheiro;
    constructor(nome, ocupacao, vida, armadura, velocidade, dinheiro, habilidade1, habilidade2, reputacao, caixaItens) {
        super(nome, ocupacao, vida, armadura, velocidade, dinheiro, habilidade1, habilidade2);
        this.#reputacao = reputacao;
        this.#caixaItens = caixaItens;
        this.#nome = nome;
        this.#ocupacao = ocupacao; // serve apenas para textos que precise falar da ocupação
        this.#vida = vida;
        this.#armadura = armadura;
        this.#velocidade = velocidade;
        this.#dinheiro = dinheiro;
        this.#habilidade1 = habilidade1;
        this.#habilidade2 = habilidade2;
    }

    get reputacao() {
        return this.#reputacao;
    }

    set reputacao(novaReputacao) {
        if (novaReputacao >= 0) {
            this.#reputacao = novaReputacao;
        } else {
            this.encerrarJogo();
        }
    }

    receberDinhero(valor) {
        this.#dinheiro += valor;
    }

    perderReputacao(perca) {
        this.#reputacao -= perca;
        if (this.#reputacao < 0){} //consequencia colocar posteiorrmente
    }

    ganharReputacao(ganho) {
        this.#reputacao += ganho;
    }

    encerrarJogo() {
        console.log("O protagonista perdeu toda a reputação. Jogo encerrado.");
        // colocar metodoo para encerrar o jogo
    }

    set dinheiro(novoDinheiro){
        if (novoDinheiro < 0){
            console.log("trasacao invalida, dinheiro insuficiente")
        } else{
            this.#dinheiro = novoDinheiro
        }}

 // VIDA
aumentarVida(valor) {
    this.#vida += valor;
}

diminuirVida(valor) {
    this.#vida -= valor;
}

// ARMADURA
aumentarArmadura(valor) {
    this.#armadura += valor;
}

diminuirArmadura(valor) {
    this.#armadura -= valor;
}

// VELOCIDADE
aumentarVelocidade(valor) {
    this.#velocidade += valor;
}

diminuirVelocidade(valor) {
    this.#velocidade -= valor;
}

// HABILIDADE 1
aumentarHabilidade1(valor) {
    this.#habilidade1 += valor;
}

diminuirHabilidade1(valor) {
    this.#habilidade1 -= valor;
}

// HABILIDADE 2
aumentarHabilidade2(valor) {
    this.#habilidade2 += valor;
}

diminuirHabilidade2(valor) {
    this.#habilidade2 -= valor;
}


    }


    module.exports = { Protagonista};