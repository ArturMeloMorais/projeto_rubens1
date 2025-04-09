const { Habilidade, Personagem, gerarNumeroAleatorio0_20 } = require("./personagem.js"); 
const prompt = require('prompt-sync')();
const {batalha, escolherHabilidadeFunc} = require("./batalha.js")
const {fugir} = require("./fuga.js")


// teste de batalha
const habilidadeA1 = new Habilidade("Soco", 10, 0);
const habilidadeA2 = new Habilidade("Chute", 15, 3);
const habilidadeB1 = new Habilidade("Facada", 17, 4);
const habilidadeB2 = new Habilidade("Empurrão", 8, 0);

const personagem1 = new Personagem("Herói", "Guerreiro", habilidadeA1, habilidadeA2, 50, 7, 5, 10);
const personagem2 = new Personagem("Vilão", "Assassino", habilidadeB1, habilidadeB2, 50, 3, 8, 0);


//batalha(personagem1, personagem2);
fugir(personagem1, personagem2)