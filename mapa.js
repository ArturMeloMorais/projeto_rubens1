const fs = require('fs');
const mapa = JSON.parse(fs.readFileSync('./mapa.json', 'utf-8'));

const cidadeNome = mapa[0].NomeCidade
const infoCidade = mapa[0].Informacoes
const cidadeAcesso = mapa[0].Acesso

const vilaNome = mapa[1].Vila
const infoVila = mapa[1].Informacoes
const acessoVila = mapa[1].Acesso

const venda = mapa[3].Venda

const delegaciaNome = mapa[2].Delegacia
const infoDelegacia = mapa[2].Informacoes
const acessoDelegacia = mapa[2].Acesso

const igreja = mapa[4].NomeIgreja
const infoIgreja = mapa[4].Informacoes
const acessoIgreja = mapa[4].Acesso

const caatinga = mapa[5].NomeCaatinga
const infoCaatinga = mapa[5].Informacoes
const acessoCaatinga = mapa[5].Acesso

const fazenda1 = mapa[6].NomeFazenda
const infoFazenda1 = mapa[6].Informacoes
const acessoFazenda1 = mapa[6].Acesso

const fazenda2 = mapa[6].NomeFazenda2
const infoFazenda2 = mapa[6].Informacoes2
const acessoFazenda2 = mapa[6].Acesso2


class Mapa{
    #nomelocal
    #informacoes
    #desbloq_broq
    constructor(nomelocal, informacoes, desbloq_bloq){
        this.#nomelocal = nomelocal,
        this.#informacoes = informacoes,
        this.#desbloq_broq = desbloq_bloq
    }


get nomelocal(){
    return this.#nomelocal
}


get informacoes(){
    return this.#informacoes
}


set desbloq_bloq(missaofases) {
    if (missaofases = true) {
        this.#desbloq_broq = "Local desbloqueado."
        return console.log(this.#desbloq_broq)
    } else {
        console.log("Esse local está bloqueado. Desbloqueie para acessar."); // definir como desbloquear (missão?)
    }
}
}

const Vila = new Mapa(vilaNome,infoVila, acessoVila)

const Delegacia = new Mapa (delegaciaNome,infoDelegacia,acessoDelegacia)

const Venda = new Mapa(venda)

const Igreja = new Mapa (igreja, infoIgreja, acessoIgreja)

const Caatinga = new Mapa (caatinga, infoCaatinga, acessoCaatinga)

const Fazenda1 = new Mapa(fazenda1, infoFazenda1, acessoFazenda1)

const Fazenda2 = new Mapa(fazenda2, infoFazenda2, acessoFazenda2)

const Cidade = new Mapa(cidadeNome, infoCidade, cidadeAcesso)



module.exports = {Vila, Cidade, Fazenda1, Fazenda2, Delegacia, Igreja, Caatinga, Venda}