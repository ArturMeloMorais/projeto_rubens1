const { Habilidade, Personagem, gerarNumeroAleatorio0_20 } = require("./personagem.js");
const prompt = require('prompt-sync')();

function batalha(personagemA, personagemB) {
    console.log(`A batalha começou entre ${personagemA.nome} e ${personagemB.nome}!
`);

    let turno = 1;
    while (personagemA.vida > 0 && personagemB.vida > 0) {
        console.log(`--- Turno ${turno} ---`);

        // Personagem A ataca
        let escolherHabilidade = Number(prompt("Escolha a habilidade que voce quer usar (1 ou 2): "));
        let danoA = escolherHabilidadeFunc(personagemA, escolherHabilidade);
        let danoRecebidoB = Math.max(0, danoA - personagemB.armadura);
        personagemB.levarDano(danoRecebidoB);

        console.log(`${personagemA.nome} atacou com ${escolherHabilidade === 1 ? personagemA.habilidade1.nome : personagemA.habilidade2.nome}, causando ${danoRecebidoB} de dano!`);
        console.log(`${personagemB.nome} agora tem ${personagemB.vida} de vida.\n`);

        if (personagemB.vida <= 0) {
            console.log(`${personagemB.nome} foi derrotado! ${personagemA.nome} venceu!`);
            break;
        }

        // Personagem B ataca
        let habilidadeEscolhidaB = Math.random() < 0.5 ? personagemB.habilidade1 : personagemB.habilidade2;
        let danoB = 0;

        if (habilidadeEscolhidaB.falha >= gerarNumeroAleatorio0_20()) {
            console.log(`O ataque de ${personagemB.nome} falhou!`);
        } else {
            danoB = habilidadeEscolhidaB.dano;
        }

        let danoRecebidoA = Math.max(0, danoB - personagemA.armadura);
        personagemA.levarDano(danoRecebidoA);

        console.log(`${personagemB.nome} atacou com ${habilidadeEscolhidaB.nome}, causando ${danoRecebidoA} de dano!`);
        console.log(`${personagemA.nome} agora tem ${personagemA.vida} de vida.\n`);

        if (personagemA.vida <= 0) {
            console.log(`${personagemA.nome} foi derrotado! ${personagemB.nome} venceu!`);
            break;
        }

        turno++;
    }
}

function escolherHabilidadeFunc(personagem, escolherHabilidade) {
    if (escolherHabilidade === 1) {
        return personagem.habilidade1.falha >= gerarNumeroAleatorio0_20() ? 0 : personagem.habilidade1.dano;
    } else if (escolherHabilidade === 2) {
        return personagem.habilidade2.falha >= gerarNumeroAleatorio0_20() ? 0 : personagem.habilidade2.dano;
    } else {
        console.log("Número incorreto, tente novamente.");
        return escolherHabilidadeFunc(personagem, Number(prompt("Escolha a habilidade que voce quer usar (1 ou 2): ")));
    }
}

module.exports = { batalha, escolherHabilidadeFunc };