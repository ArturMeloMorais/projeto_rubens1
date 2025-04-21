const {Vila, Cidade, Fazenda1, Fazenda2, Delegacia, Igreja, Caatinga, Venda} = require("./mapa.js")

const fs = require('fs');
const dialogos = JSON.parse(fs.readFileSync('./dialogos.json', 'utf-8'));
const cenas = JSON.parse(fs.readFileSync('./cenas.json', 'utf-8'));
const prompt = require("prompt-sync")()
const { batalha } = require("./batalha.js");
const { Protagonista } = require("./protagonista.js");
const { Habilidades, CaixaItens } = require("./arsenal.js");
const { Personagem, gerarNumeroAleatorio0_20, lampiao, francisctexeira,volante } = require("./personagem.js");
const { fugir } = require("./fuga.js");


const tutorial = cenas[1].Cena2
const fase1 = cenas[2].Cena3
const fase2 = cenas[3].Cena4
const fase3 = cenas[4].Cena5
const fase4 = cenas[5].Cena6
const fimjogo = cenas[6].Cena7

// inventario
let inventario = [0, "cantil de água", "pistola velha", "faca enferrujada"]

// venda
let VendaLoja = {
  nomelocal: "----- Mercearia Secos e Molhados -----",
  Itens: ["Água ardente", "Curativos", "Munição", "Parabelo", "Colete", "Anéis do sertão", "Carne de sol"]
}

// fases concluidas
let fasesconcluidas = 0


class Fases {
    #nomeFase;
    #status;
    constructor(nomeFase, status) {
      this.#nomeFase = nomeFase;
      this.#status = status
    }
    get mostrarTutorial() {
      return `\n [${this.#nomeFase}] \n`
    }
    get mostrarfase1() {
      return `\n [${this.#nomeFase}] \n`
    }
  
    get mostrarfase2() {
      return `[${this.#nomeFase}] \n`

    }
  
    get mostrarfase3() {
      return `\n [${_fase3.#nomeFase}] \n`
    }
  
    get mostrarfase4() {
      return `\n [${_fase4.#nomeFase}] \n`
    }

    missaoConcluida() {
      this.status = console.log(`Fase concluída!`)
      return this.status
    }
  }
  
  class Tutorial extends Fases{
    constructor(nomeFase, status) {
      super(nomeFase, status);
  }
  iniciarTutorial(protagonistaA, adversario){
    let armazenarVida = protagonistaA.vida
    console.log(dialogos[0].personagem1 + ": " + dialogos[0].fala1)
    console.log(dialogos[0].personagem2 + ": " + dialogos[0].fala2)
    console.log(dialogos[0].personagem3 + ": " + dialogos[0].fala3, "\n")
    const começar_tutorial = prompt(">>> Aperte na tecla C e dê enter:")
    if(começar_tutorial === "C" || começar_tutorial === "c") {
      console.log("Iniciando ... \n")
      const vitoria = batalha(protagonistaA, adversario);

      if(vitoria === true){
      console.log(dialogos[2].personagem7 + ": " + dialogos[2].fala7)
      this.missaoConcluida()
    }

    else {
      console.log("Tecla incorreta")
      return começar_tutorial
    }
  }
}}

  class Fase1 extends Fases {
    constructor(nomeFase, status) {
      super(nomeFase,status);
    }
    missaoDaJoia(protagonistaA, adversario){
      let perca
      console.log(dialogos[1].personagem4 + ": " + dialogos[1].fala4)
      console.log(dialogos[1].personagem5 + ": " + dialogos[1].fala5)
      console.log(dialogos[1].personagem6 + ": " + dialogos[1].fala6, "\n")
      
      console.log(Fazenda1.nomelocal,"\n")
      console.log(">>>",Fazenda1.informacoes)

      console.log("\n",dialogos[3].personagem8 + ": " + dialogos[3].fala8)
      console.log("\n")
      console.log(`${francisctexeira.nome}: quem é você?`)
      console.log(`${protagonistaA.nome}: eu vim aqui para resgatar a jóia que voce roubou`)
      console.log("Narracao: Coronel Texeira atira sabendo suas intenções")
      const vitoria = batalha(protagonistaA, adversario);
      console.log("\n")
      if(vitoria === true){
        protagonistaA.caixa.mudarItem(0,"joia")
      } else {
        return perca = true
      }

      
      console.log("\n",dialogos[4].personagem9 + ": " + dialogos[4].fala9)
       //mecânica para escolher ficar ou não com a jóia
      let decisao = prompt("<<<<<<<<<< Aperte f para ficar com a jóia ou qualquer outra tecla para devolver >>>>>>>>>>>: ")
      if(decisao === "f"){
        console.log(`Narração: ${protagonistaA.nome} diz para ${dialogos[1].personagem4} que infelizmente nao conseguiu achar a joia`)
      }else {
        protagonistaA.caixa.mudarItem(0,"terço")
        console.log(`narracao: voce devovel a joia para ${dialogos[1].personagem4} que chorrra de felicidade e lhe da um terço para o proteger`)

    }
   
  
}}
  class Fase2 extends Fases {
    #status
    constructor(nomeFase, status) {
      super(nomeFase);
      this.#status = status
    }
    missaoConcluida(protagonistaA){
      this.#status = "fase 2 concluída"
      fasesconcluidas = 2
      
      // ganho da fase 2
      protagonistaA.dinheiro += 125
      console.log(inventario)

      return this.#status
    }
  
    missaoResgate(protagonistaA, adversario){
      let perca;
      console.log(Delegacia.nomelocal,"\n")
      console.log(">>>",Delegacia.informacoes)
      console.log("\n",dialogos[5].personagem10 + ": " + dialogos[5].fala10)
      console.log(dialogos[6].personagem11 + ": " + dialogos[6].fala11)
      console.log(volante.nome, ": ", "maldito oque oce ta fazendo")

// batalha com o policial da cadeia
      let vitoria = batalha(protagonistaA, adversario)
      if(vitoria === true){
        console.log("\n", "narracao: Após a sua luta, você consegue libertar o Batoré. Ele está meio cambaleando, com os braços marcados pelas correntes, mas sorri com alívio ao ver você.")
        console.log("Achei que não ia sair vivo dessa... — ele diz, enquanto vocês correm pelos corredores da prisão. Mas não dá tempo de comemorar.")
        console.log("Você escuta passos apressados atrás de vocês — guardas! Muitos. E eles não parecem felizes.","\n"," Sem pensar duas vezes, você puxa Batoré pela manga:","\n","— Corre, mano!")
      fugir(protagonistaA, adversario)
      console.log("batoré: Mano... a gente conseguiu... a gente conseguiu!")
      console.log("naracao: apos essa fuga voce e batoré escapam")
      }else {return perca = true} 


       
      console.log("\n",dialogos[7].personagem12 + ": " + dialogos[7].fala12)
      console.log(dialogos[8].personagem13 + ": " + dialogos[8].fala13,"\n")
      this.missaoConcluida(protagonistaA)
    }
    }
  
  class Fase3 extends Fases {
    constructor(nomeFase, status) {
      super(nomeFase, status);
    }
    irParaCidade(){
      console.log(Cidade.nomelocal,"\n")
      console.log(">>>",Cidade.informacoes)

      console.log("\n",dialogos[9].personagem14 + ": " + dialogos[9].fala14)
      console.log("[vila código: 1]" + "\n" + "[Venda código: 2]" + "\n" + "[Igreja código: 3]" + "\n")
      const LocalParaIr = prompt("Para onde deseja ir, digite o código:")
      if (LocalParaIr === "1"){
        return this.IrParaVila()
      }
      else if (LocalParaIr === "2") {
         this.irParaVenda() 
      }
      else if(LocalParaIr === "3"){
        return this.irParaIgreja();
      }
      else{
        console.log("código incorreto, tente novamente !!")
        return LocalParaIr
      }
    }
      IrParaVila(){
        console.log("\n",Vila.nomelocal ,)
        console.log(">>>",Vila.informacoes,"\n")

        //diálogos vila
        console.log(dialogos[14].personagem19 + ":" + dialogos[14].fala19)
        console.log(dialogos[15].personagem20 + ":" + dialogos[15].fala20)
        console.log(dialogos[16].personagem21 + ":" + dialogos[16].fala21)
        console.log(dialogos[17].personagem22 + ":" + dialogos[17].fala22)

        //outras ações
        
      }
      irParaCaatinga(){
      console.log("\n",Caatinga.nomelocal)
      console.log(">>>",Caatinga.informacoes,"\n")

      //batalhar com o outro bando de cangaceiros armados
    
      //mensagem depois da luta 
      console.log(dialogos[18].personagem23 + ":" + dialogos[18].fala23)
      console.log(dialogos[19].personagem24 + ":" + dialogos[19].fala24)
      //mensagem para ir pra fase 4
      console.log(dialogos[18].personagem23 + ":" + dialogos[18].fala23)
       
    }
    irParaVenda(){
      console.log("\n",Venda.nomelocal, "\n")
       
    //mecânica para comprar itens (atenção às condições)
    // se tiver a joia
  if (inventario.includes("joia")){
    console.log("Voce tem a joia! Pode pegar todos os itens da venda")
    for (let item of VendaLoja.Itens){
      if (!inventario.includes(item)){
        inventario.push(item)
      }
    }
  } else {
    console.log("Você não possui a joia! Você ganhou um Parabelo e só tem dinheiro para 3 itens básicos")

    let itensFixos = ["Parabelo", "Água ardente", "Munição", "Curativos"]
    itensFixos.forEach(item => {
      if (!inventario.includes(item)) {
        inventario.push(item)
      }
    })
  
    // se tiver ficado com a joia na fase 1 compra todos os itens da venda
    // se não ganha a arma e tem direito a comprar somente 3 itens 

    //mensagem depois de ter comprado oq queria
    console.log("Compra efetuada com sucesso!")
    console.log("Inventario novo:", inventario)
   }
  }

    irParaIgreja(){
      console.log("\n",Igreja.nomelocal,)
      console.log(">>>",Igreja.informacoes,"\n")

      if (inventario.includes("joia")){
        //caso o padre não esteja na igreja
      console.log(dialogos[13].personagem18 + ":" + dialogos[13].fala18)
      } else {
        //caso o padre esteja na igreja
      console.log(dialogos[11].personagem16 + ":" + dialogos[11].fala16)
      console.log(dialogos[12].personagem17 + ":" + dialogos[12].fala17)

       // ganhar bônus de vida 
       // bonus aqui
      }
        // ir para venda para comprar itens
        //diálogos que levam até a Caatinga
        return this.irParaCaatinga()
    }

    missaoConcluida(){
        this.status = "fase 3 concluída"
        fasesconcluidas = 3

      // ganho da fase 3
      inventario[0] = 1125
      console.log(inventario)

       return this.status
    }
  }
  
  class Fase4 extends Fases {
    
    constructor(nomeFase, status) {
      super(nomeFase, status);
    }
    irParaFazendaCoronel(){
      console.log(Fazenda2.nomelocal)
      console.log(">>>",Fazenda2.informacoes,"\n")
   //diálogos quando chega na fazenda
   console.log(dialogos[20].personagem25 + ":" + dialogos[20].fala25)
   console.log(dialogos[21].personagem26 + ":" + dialogos[21].fala26)

   //diálogo frio com o coronel 
   console.log(dialogos[22].personagem27 + ":" + dialogos[22].fala27)
   console.log(dialogos[23].personagem28 + ":" + dialogos[23].fala28)
   console.log(dialogos[24].personagem29 + ":" + dialogos[24].fala29)

   // batalha com o coronel

    }

    // finalizando a fase 4
    missaoConcluida(){
      this.status = "fase 4 concluída"
      fasesconcluidas = 4
      // ganho da fase 4
      inventario[0] = 9999
      console.log(inventario)
      return this.status
    }

    fimDeJogo(){
      if (fasesconcluidas === 4){
        // se vencer o coronel tem um final específico (final bom, só a mensagem mesmo)
        console.log(cenas[7].Descrição + ">>>" + cenas[7].Cena7)
      } else {
        // se perder tem outro final específico (mensagem)
        console.log(cenas[8].Descrição + ">>>" + cenas[8].Cena8)
      }
    }
  }

  module.exports = { Fases, Tutorial, Fase1, Fase2, Fase3, Fase4, tutorial, fase1, fase2, fase3, fase4, fimjogo }

















//  console.log(personagemA)
//  console.log("BEM VINDO AO JOGO DO CANGAÇO!! \n")
//  const _tutorial = new Tutorial(tutorial,"não concluído")
//  console.log(_tutorial.mostrarTutorial)
//  _tutorial.iniciarTutorial(personagemA, personagemB)
//  console.log("\n")

//   const _fase1 = new Fase1(fase1, "não concluída")
//   console.table(_fase1.mostrarfase1)
//   _fase1.missaoDaJoia()
//   console.log("\n")

//   const _fase2 = new Fase2(fase2, "não concluída")
//   console.table(_fase2.mostrarfase2)
//   _fase2.missaoResgate()
//   console.log("\n")

//   const _fase3 = new Fase3(fase3, "não concluída")
//   console.table(_fase3.mostrarfase3)
//   _fase3.irParaCidade()
//   console.log("\n")

//   const _fase4 = new Fase4 (fase4, "não concluída")
//   console.table(_fase4.mostrarfase4)
//   _fase4.irParaFazendaCoronel()
//   _fase4.fimDeJogo
