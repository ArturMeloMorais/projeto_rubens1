const { Habilidade, Personagem, gerarNumeroAleatorio0_20 } = require("./personagem.js"); 
const prompt = require('prompt-sync')();
const { batalha } = require("./batalha.js");

function fugir(personagemA, personagemB) {
    console.log("------ A fuga começou ------");
    console.log("3 falhas para ser pego, 3 vitórias para fugir");

    let falhas = 0;
    let vitorias = 0;
    let turno = 1;
    let verificador = false

    while (falhas <= 3 && vitorias <= 3 && verificador === false) {
        console.log(`---- Turno ${turno} ----`);

        let velocidadePersonagemA = personagemA.velocidade / 2 + gerarNumeroAleatorio0_20();

        function correr(velocidade) {
            let continuar = prompt("Digite 1 para continuar fugindo ou 2 para lutar: ");

            if (continuar == 1) {
                if (velocidade > personagemB.velocidade) {
                    vitorias++;
                    console.log(`O personagem ${personagemA.nome} alcançou uma velocidade de ${velocidade}, suficiente para vencer o turno.`);
                    console.log(`Vitórias: ${vitorias}, Falhas: ${falhas}`);
                } else {
                    falhas++;
                    console.log(`O personagem ${personagemA.nome} alcançou uma velocidade de ${velocidade}, mas não conseguiu vencer.`);
                    console.log(`O personagem ${personagemB.nome} se aproximou. Vitórias: ${vitorias}, Falhas: ${falhas}`);
                }
            } else if (continuar == 2) {
            console.log
              console.log(`dessistir tem penalidadw dano recebido ${falhas * 10}`)
                personagemA.levarDano(falhas * 10);
                batalha(personagemA, personagemB);
                verificador = true;
                return ;
            } else {
                console.log("Número inválido! Tente novamente.");
                correr(velocidade);
            }
        }

        correr(velocidadePersonagemA);
        turno++;
    }

    if (vitorias >= 3) {
        console.log(`Parabéns! ${personagemA.nome} conseguiu fugir com sucesso!`);
    } else if(falhas >= 3) {
        console.log(`Infelizmente, ${personagemA.nome} foi capturado!`);
    }
}

module.exports = { fugir };