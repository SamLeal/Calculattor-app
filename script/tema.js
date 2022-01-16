const botaoMudaTema = document.querySelector('.bt1')
const principal = document.querySelector('.prin1')
const telaTema = document.querySelector('.tela1')
const teclado = document.querySelector('.tecl1')
const botoes = document.querySelectorAll('.b1')
const botaoResEDel = document.querySelectorAll('.botao-resEDel1')
const botaoIgual = document.querySelector('.b-igual-1')

const primeiroClick = () => {
    principal.classList.add('prin2')
    telaTema.classList.add('tela2')
    teclado.classList.add('tecl2')
    botoes.forEach((botao) => botao.classList.add('b2'))
    botaoResEDel.forEach((botaoRD) => botaoRD.classList.add('botao-resEDel2'))
    botaoIgual.classList.add('b-igual-2')
    botaoMudaTema.classList.add('bt2')
    botaoMudaTema.addEventListener('click', segundoClick)
    botaoMudaTema.removeEventListener("click", zerar);
}

const segundoClick = () => {
    principal.classList.add('prin3')
    telaTema.classList.add('tela3')
    teclado.classList.add('tecl3')
    botoes.forEach((botao) => botao.classList.add('b3'))
    botaoResEDel.forEach((botaoRD) => botaoRD.classList.add('botao-resEDel3'))
    botaoIgual.classList.add('b-igual-3')
    botaoMudaTema.classList.add('bt3')
    botaoMudaTema.addEventListener('click', zerar)
    botaoMudaTema.removeEventListener("click", primeiroClick);

}

const zerar = () => {
    principal.classList.remove('prin3')
    telaTema.classList.remove('tela3')
    teclado.classList.remove('tecl3')
    botoes.forEach((botao) => botao.classList.remove('b3'))
    botaoResEDel.forEach((botaoRD) => botaoRD.classList.remove('botao-resEDel3'))
    botaoIgual.classList.remove('b-igual-3')
    botaoMudaTema.classList.remove('bt3')
    
    principal.classList.remove('prin2')
    telaTema.classList.remove('tela2')
    teclado.classList.remove('tecl2')
    botoes.forEach((botao) => botao.classList.remove('b2'))
    botaoResEDel.forEach((botaoRD) => botaoRD.classList.remove('botao-resEDel2'))
    botaoIgual.classList.remove('b-igual-2')
    botaoMudaTema.classList.remove('bt2')
    
    botaoMudaTema.addEventListener('click', primeiroClick)
    botaoMudaTema.removeEventListener("click", segundoClick);
}

botaoMudaTema.addEventListener('click', primeiroClick)


