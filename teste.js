const { Habilidades, CaixaItens } = require("./arsenal.js");
const { Personagem, gerarNumeroAleatorio0_20 } = require("./personagem.js");
const { batalha } = require("./batalha.js");
const { Protagonista } = require("./protagonista.js");
const { fugir } = require("./fuga.js");

console.log("===== TESTE DE FUNCIONALIDADES =====\n");

// Testar criação de habilidade
const golpe = new Habilidades("Golpe Rápido", 15, 5);
console.log("Habilidade criada:", golpe.nome, golpe.dano, golpe.falha);

// Testar caixa de itens
const caixa = new CaixaItens();
caixa.adicionarItem("Poção");
caixa.adicionarItem("Espada");
console.log("Itens na caixa:", caixa.listarItens());
caixa.mudarItem(0, "Poção Forte");
console.log("Item alterado:", caixa.receberItem(0));

// Testar geração aleatória
console.log("Número aleatório entre 0-20:", gerarNumeroAleatorio0_20());

// Criar personagens
const habilidade1 = new Habilidades("Golpe Rápido", 15, 5);  // Define o nome, dano e chance de falha
const habilidade2 = new Habilidades("Golpe Duplo", 20, 10);  // Outra habilidade
const personagemA = new Protagonista(
    "Liora",                 // nome
    "Feiticeira",            // ocupação
    80,                      // vida
    5,                       // armadura
    7,                       // velocidade
    100,                     // dinheiro
    habilidade1,              // habilidade1
    habilidade2,         // habilidade2
    50,                      // reputação
    caixa     // caixa de itens
);
const personagemB = new Personagem("Inimigo", "Mercenário", 10, 4, 9, 30, habilidade1, habilidade2);


console.log(habilidade1)
// Testar métodos básicos do personagem
console.log("Personagem A:", personagemA.nome, personagemA.ocupacao);
console.log("Vida antes do dano:", personagemA.vida);
personagemA.levarDano(20);
console.log("Vida após levar 20 de dano:", personagemA.vida);

// Testar batalha manualmente
console.log("\n====== TESTANDO BATALHA ======");
console.log("Digite '1' quando solicitado para usar a habilidade 1\n");
//batalha(personagemA, personagemB);

// Testar fuga manualmente
console.log("\n====== TESTANDO FUGA ======");
console.log("Digite '1' para fugir ou '2' para lutar quando solicitado\n");
fugir(personagemA, personagemB);

