const {Vila, Cidade, Fazenda1, Fazenda2, Delegacia, Igreja, Caatinga, Venda} = require("./mapa.js")

const fs = require('fs');
const dialogos = JSON.parse(fs.readFileSync('./dialogos.json', 'utf-8'));
const cenas = JSON.parse(fs.readFileSync('./cenas.json', 'utf-8'));
const prompt = require("prompt-sync")()

const tutorial = cenas[1].Cena2
const fase1 = cenas[2].Cena3
const fase2 = cenas[3].Cena4
const fase3 = cenas[4].Cena5
const fase4 = cenas[5].Cena6
const fimjogo = cenas[6].Cena7

class Fases {
    #nomeFase;
    #status;
    constructor(nomeFase, status) {
      this.#nomeFase = nomeFase;
      this.#status = status
    }
    get mostrarTutorial(){
      return `[${_tutorial.#nomeFase}] \n`
    }
    get mostrarfase1() {
      return `[${_fase1.#nomeFase}] \n`
    }
  
    get mostrarfase2() {
      return `[${_fase2.#nomeFase}] \n`
    }
  
    get mostrarfase3() {
      return `[${_fase3.#nomeFase}] \n`
    }
  
    get mostrarfase4() {
      return `[${_fase4.#nomeFase}] \n`
    }
  }
  
  class Tutorial extends Fases{
    constructor(nomeFase, status) {
      super(nomeFase, status);
  }
  iniciarTutorial(){
    console.log(dialogos[0].personagem1 + ": " + dialogos[0].fala1)
    console.log(dialogos[0].personagem2 + ": " + dialogos[0].fala2)
    console.log(dialogos[0].personagem3 + ": " + dialogos[0].fala3, "\n")
    const começar_tutorial = prompt(">>> Aperte na tecla C e dê enter:")
    if(começar_tutorial === "C" || começar_tutorial === "c"){
      console.log("Iniciando ... \n")
    }
    else{
      console.log("Tecla incorreta")
      return começar_tutorial
    }
    console.log(dialogos[2].personagem7 + ": " + dialogos[2].fala7)
  }
  tutorialConcluido(){
    this.status = "tutorial concluído"
  }

  }
  class Fase1 extends Fases {
    constructor(nomeFase, status) {
      super(nomeFase,status);
    }
    missaoDaJoia(){
      
      console.log(dialogos[1].personagem4 + ": " + dialogos[1].fala4)
      console.log(dialogos[1].personagem5 + ": " + dialogos[1].fala5)
      console.log(dialogos[1].personagem6 + ": " + dialogos[1].fala6, "\n")
      
      console.log(Fazenda1.nomelocal,"\n")
      console.log(">>>",Fazenda1.informacoes)

      console.log("\n",dialogos[3].personagem8 + ": " + dialogos[3].fala8)
       
       // batalhar com o vilão sobrenatural

      console.log("\n",dialogos[4].personagem9 + ": " + dialogos[4].fala9)
       //mecânica para escolher ficar ou não com a jóia
    }
    missaoConcluida(){
       this.status = "fase 1 concluída"
       return this.status
    }
  }
  
  class Fase2 extends Fases {
    #status
    constructor(nomeFase, status) {
      super(nomeFase);
      this.#status = status
    }
    missaoResgate(){
      console.log(Delegacia.nomelocal,"\n")
      console.log(">>>",Delegacia.informacoes)
      console.log("\n",dialogos[5].personagem10 + ": " + dialogos[5].fala10)
      console.log(dialogos[6].personagem11 + ": " + dialogos[6].fala11)
       // batalha com o policial da cadeia
      console.log("\n",dialogos[7].personagem12 + ": " + dialogos[7].fala12)
      console.log(dialogos[8].personagem13 + ": " + dialogos[8].fala13,"\n")
    }
    missaoConcluida(){
      this.#status = "fase 2 concluída"
      return this.#status
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
        //outras ações
        
      }
      irParaCaatinga(){
      console.log("\n",Caatinga.nomelocal)
      console.log(">>>",Caatinga.informacoes,"\n")
      //batalhar com o outro bando de cangaceiros armados
      //mensagem depois da luta 
      //mensagem para ir pra fase 4
       
    }
    irParaVenda(){
      console.log("\n",Venda.nomelocal, "\n")
      //itens disponíveis
     //mecânica para comprar itens (atenção às condições)
     
     // se tiver ficado com a joia na fase 1 compra todos os itens da venda
      // se não ganha a arma e tem direito a comprar somente 3 itens 

   //mensagem depois de ter comprado oq queria
      
    }
    irParaIgreja(){
      console.log("\n",Igreja.nomelocal,)
      console.log(">>>",Igreja.informacoes,"\n")


      //caso o padre esteja na igreja
      console.log(dialogos[11].personagem16 + ": " + dialogos[11].fala16)
       // ganhar bônus de vida 
       console.log(dialogos[12].personagem17 + ": " + dialogos[12].fala17)

      //aso o padre não esteja na igreja
      console.log(dialogos[13].personagem18 + ": " + dialogos[13].fala18)

       // ir para venda para comprar itens
       
       console.log(dialogos[14].personagem19 + ": " + dialogos[14].fala19)
        //diálogos que levam até a Caatinga
        return this.irParaCaatinga()
    }
    missaoConcluida(){
        this.status = "fase 3 concluída"
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
      //diálogo frio com o coronel 
      // batalha com o coronel
      
    }
    fimDeJogo(){
      // se vencer o coronel tem um final específico (final bom, só a mensagem mesmo)
      // se perder tem outro final específico (mensagem)
    }
  }
  module.exports = {Fases, Tutorial, Fase1, Fase2, Fase3, Fase4}
 
 console.log("BEM VINDO AO JOGO DO CANGAÇO!! \n")
 const _tutorial = new Tutorial(tutorial,"não concluído")
 console.log(_tutorial.mostrarTutorial)
 _tutorial.iniciarTutorial()
 console.log("\n")

  const _fase1 = new Fase1(fase1, "não concluída")
  console.table(_fase1.mostrarfase1)
  _fase1.missaoDaJoia()
  console.log("\n")

  const _fase2 = new Fase2(fase2, "não concluída")
  console.table(_fase2.mostrarfase2)
  _fase2.missaoResgate()
  console.log("\n")

  const _fase3 = new Fase3(fase3, "não concluída")
  console.table(_fase3.mostrarfase3)
  _fase3.irParaCidade()
  console.log("\n")

  const _fase4 = new Fase4 (fase4, "não concluída")
  console.table(_fase4.mostrarfase4)
  _fase4.irParaFazendaCoronel()
  _fase4.fimDeJogo