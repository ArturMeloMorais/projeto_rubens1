const prompt = require('prompt-sync')();
const { Protagonista } = require("./protagonista.js");
const { Habilidades, CaixaItens } = require("./arsenal.js");

// HABILIDADES
const pistola = new Habilidades("pistola", 15, 2);
const espingarda = new Habilidades("espingarda", 20, 6);
const soco = new Habilidades("soco", 8 , 2);
const peixera = new Habilidades("peixeira", 15, 4);
const padinCico = new Habilidades("em nome de padin ciço", 60, 10);
const penitencia = new Habilidades("penitencia", 20, 4);

// CAIXA DE ITENS
const caixa = new CaixaItens();
caixa.adicionarItem(0) 
caixa.adicionarItem("cantil de água")
caixa.adicionarItem( "pistola velha")
caixa.adicionarItem( "faca enferrujada")

function escolherProta(nomeJogador){
    console.log("-------------------------------------")
    console.log("Escolha sua ocupação:\n1: Atirador\n2: Cabra da Pexte\n3: Espiritualista");
    let escolherOcupacao = prompt("Escolha o número correspondente à ocupação desejada: ")

    let jogador = null;

    if(escolherOcupacao === "1"){
        jogador = new Protagonista(nomeJogador, "atirador", 80, 2, 10, 50, pistola, espingarda, 10, caixa);
    } else if (escolherOcupacao === "2"){
        jogador = new Protagonista(nomeJogador, "cabra da pexte", 120, 7, 4, 50, soco, peixera, 10, caixa);
    } else if(escolherOcupacao === "3"){
        jogador = new Protagonista(nomeJogador, "espiritualista", 80, 0, 2, 50, padinCico, penitencia, 10, caixa);
    } else {
        console.log("Número errado, tente novamente.");
        return escolherProta(nomeJogador);
    }

    console.log("Características do personagem escolhido:");
console.log("Nome:", jogador.nome);
console.log("Ocupação:", jogador.ocupacao);
console.log("Vida:", jogador.vida);
console.log("Armadura:", jogador.armadura);
console.log("Dinheiro:", jogador.dinheiro);

console.log("Nome da primeira habilidade:", jogador.habilidade1.nome);
console.log("Dano da primeira habilidade:", jogador.habilidade1.dano);
console.log("Chance de falha da primeira habilidade:", jogador.habilidade1.falha);

console.log("Nome da segunda habilidade:", jogador.habilidade2.nome);
console.log("Dano da segunda habilidade:", jogador.habilidade2.dano);
console.log("Chance de falha da segunda habilidade:", jogador.habilidade2.falha);
return jogador
}

// const nomeJogador = "Artur";
// escolherProta(nomeJogador);

module.exports = { escolherProta};
