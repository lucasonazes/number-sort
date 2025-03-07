function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    let botaoSortear = document.getElementById('btn-sortear');

    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }

    if (botaoSortear.classList.contains('container__botao-desabilitado')) {
        botaoSortear.classList.remove('container__botao-desabilitado');
        botaoSortear.classList.add('container__botao');
    } else {
        botaoSortear.classList.remove('container__botao');
        botaoSortear.classList.add('container__botao-desabilitado');
    }
}

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao();
}

function reiniciar() {
    alterarStatusBotao();
    document.querySelectorAll('.texto__paragrafo').innerHTML = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
}
