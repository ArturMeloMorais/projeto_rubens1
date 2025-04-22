const fs = require('fs');
const { Habilidades, CaixaItens } = require("./arsenal.js");
const { Personagem, gerarNumeroAleatorio0_20, lampiao, francisctexeira,volante,bandidoscidade,bandidoscidade2,zerufino } = require("./personagem.js");
const { batalha } = require("./batalha.js");
const { Protagonista } = require("./protagonista.js");
const { fugir } = require("./fuga.js");
const prompt = require('prompt-sync')();
const { escolherProta } = require("./escolherProtagonista.js");
const { Fases, Tutorial, Fase1, Fase2, Fase3, Fase4, tutorial, fase1, fase2, fase3, fase4, fimjogo  } = require("./frases.js");

function inicar() {
    console.log("BEM VINDO AO JOGO DO CANGAÇO!! \n");

    let nomeJ = prompt("Digite seu nome de personagem: ");
    let jogador = escolherProta(nomeJ);

    const _tutorial = new Tutorial(tutorial, "não concluído");

    console.log(_tutorial.mostrarTutorial);
    _tutorial.iniciarTutorial(jogador, lampiao);

    console.log("\n");

    const _fase1 = new Fase1(fase1, "não concluída")
    console.table(_fase1.mostrarfase1)
    _fase1.missaoDaJoia(jogador, francisctexeira)
    console.log("\n")

    const _fase2 = new Fase2(fase2, "não concluída")
    console.table(_fase2.mostrarfase2)
    _fase2.missaoResgate(jogador, volante)
    console.log("\n")

    const _fase3 = new Fase3(fase3, "não concluída")
    console.table(_fase3.mostrarfase3)
    _fase3.irParaCidade(jogador, bandidoscidade, bandidoscidade2)
    console.log("\n")

    const _fase4 = new Fase4 (fase4, "não concluída")
    console.table(_fase4.mostrarfase4)
    _fase4.irParaFazendaCoronel(jogador, zerufino)
    _fase4.fimDeJogo
}

inicar();
