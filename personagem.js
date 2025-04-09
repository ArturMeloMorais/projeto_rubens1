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

class Personagem {//personagem principal 
    #nome;
    #ocupacao;
    #habilidade1;
    #habilidade2;
    #vida
    #armadura;
    #velocidade;
    #reputacao;
    constructor(nome, ocupacao, habilidade1, habilidade2, vida, armadura, velocidade, reputacao) {
        this.#nome = nome;
        this.#ocupacao = ocupacao; // serve apenas para textos que precise falar da ocupação
        this.#habilidade1 = habilidade1;
        this.#habilidade2 = habilidade2;
        this.#vida = vida;
        this.#armadura = armadura;
        this.#velocidade = velocidade;
        this.#reputacao = reputacao;
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

    get reputacao() {
        return this.#reputacao;
    }

    set vida(novaVida) {
        if (novaVida >= 0) {
            this.#vida = novaVida;
        } else {
            console.log("Encerrar jogo"); // Encerrar jogo
        }
    }

    set reputacao(novaReputacao) {
        if (novaReputacao >= 0) {
            this.#reputacao = novaVida;
        } else {
            console.log("Encerrar jogo"); // nao sei oque fazerr
        }
    }

    levarDano(dano) {
        this.#vida = this.#vida - dano;  // Atualiza a vida diretamente
    }

    perderReputacao(perca) {
        this.#reputacao = this.#reputacao - perca;  // diminiur a reputacao 
    }
    ganharReputacao(ganho) {
        this.#reputacao = this.#reputacao + ganho;  // aumentar a reoutacao
    }

}

const habilidade1 = new Habilidade("tiro", 20); //teste
const habilidade2 = new Habilidade("tiro duplo", gerarNumeroAleatorio() + gerarNumeroAleatorio()); //teste

function gerarNumeroAleatorio0_20() {
    return Math.floor(Math.random() * 21);  // Gera um número aleatório entre 0 e 20
} // gerador de numeros aleatorios 



module.exports = { Habilidade, Personagem, gerarNumeroAleatorio0_20 };