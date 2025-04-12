const { Personagem } = require("./personagem");

class Protagonista extends Personagem {
    #reputacao;

    constructor(nome, ocupacao, habilidade1, habilidade2, vida, armadura, velocidade, reputacao) {
        super(nome, ocupacao, habilidade1, habilidade2, vida, armadura, velocidade);
        this.#reputacao = reputacao;
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
}