const fs = require('fs');
const { Habilidades, CaixaItens } = require("./arsenal.js");
const { Personagem, gerarNumeroAleatorio0_20, lampiao } = require("./personagem.js");
const { batalha } = require("./batalha.js");
const { Protagonista } = require("./protagonista.js");
const { fugir } = require("./fuga.js");
const prompt = require('prompt-sync')();
const { escolherProta } = require("./escolherProtagonista.js");
const { Fases, Tutorial, Fase1, Fase2, Fase3, Fase4,tutorial, fase1, fase2, fase3, fase4, fimjogo  } = require("./frases.js");

function inicar() {
    console.log("BEM VINDO AO JOGO DO CANGAÇO!! \n");

    let nomeJ = prompt("Digite seu nome de personagem: ");
    let jogador = escolherProta(nomeJ);

    const _tutorial = new Tutorial(tutorial, "não concluído");

    console.log(_tutorial.mostrarTutorial);
    _tutorial.iniciarTutorial(jogador, lampiao);

    console.log("\n");
}

inicar();
