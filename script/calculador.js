
const tela = document.querySelector('.texto-tela')
const numeros = document.querySelectorAll('[id*=num]')
const operadores = document.querySelectorAll('[id*=op]')

let novoNumero = true
let operador
let numeroAnterior

const operacaoPendente = () => operador !== undefined

const calcular = () => {
    if (operacaoPendente()){    
        const numeroNovo = parseFloat(tela.textContent)
        novoNumero = true
        if (operador == 'x'){
            operador = '*'
        }
        const resultado = eval (`${numeroAnterior}${operador}${numeroNovo}`)
        atualizarTela(resultado)
    }
}

const atualizarTela = (texto) => {
    if(novoNumero){
        tela.textContent = texto;
        novoNumero = false
    } else{
        tela.textContent += texto;
    }
}

const digitarNumero = (evento) => atualizarTela(evento.target.textContent)

numeros.forEach((numero) => numero.addEventListener('click', digitarNumero))

const  selecionarOperador = (evento) => {
    if(!novoNumero) { 
        calcular()  
        novoNumero = true
        operador = evento.target.textContent
        numeroAnterior  = parseFloat(tela.textContent)
    } 
}
operadores.forEach((operador) => operador.addEventListener('click', selecionarOperador))

const acionarIgual = () => {
    calcular();
    operador = undefined
}
document.getElementById('igual').addEventListener('click', acionarIgual)

const removerUltimoNumero = () => tela.textContent = tela.textContent.slice(0, -1)
document.getElementById('del').addEventListener('click', removerUltimoNumero)

const resetarCalculo = () => {
    tela.textContent = ''
    operador = undefined
    novoNumero = true
    numeroAnterior = undefined
}
document.getElementById('reset').addEventListener('click', resetarCalculo)

const existeDecimal = () => tela.textContent.indexOf('.') !== -1
const inserirDecimal = () => {
    if(!existeDecimal()){
        atualizarTela('.')
    }
}
document.getElementById('decimal').addEventListener('click', inserirDecimal)