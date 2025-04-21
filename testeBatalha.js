const { batalha, escolherHabilidadeFunc } = require('./batalha.js')
const { Personagem, francisctexeira } = require('./personagem.js')
const { Protagonista } = require('./protagonista.js')
const { pistola, espingarda, soco, peixera, padinCico, penitencia } = require('./arsenal.js')
const { escolherProta } = require('./escolherProtagonista.js')
const prompt = require('prompt-sync')

function testarBatalha () {
    try {
        let protagonista = escolherProta("Minirubens")
        let inimigo = francisctexeira
        batalha(protagonista, inimigo)
    } catch (error) {
        console.error('Erro em batalha', error.message)
    } finally {
        console.log('Executado.')
    }
}

testarBatalha()