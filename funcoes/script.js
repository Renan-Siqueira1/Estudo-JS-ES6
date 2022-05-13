function consumoCarro(Km, Lt) {
    return Km / Lt;
}

console.log(consumoCarro(200, 7));


function carroForte(cv) {
    if(cv >= 400) {
        return 'Um belo brinquedo';
    } else if(cv >= 200) {
        return 'Dá para brincar'
    } else {
        return 'Nem conta'
    }
}

console.log(carroForte(700));

var totalPaises = 193;

function faltaVisitar(paisesVisitados) {
    return `Falta visitar ${totalPaises - paisesVisitados}`
}

console.log(faltaVisitar(30))


//Crie uma função para verificar se o valor é Truthy

function verificarValor(valor) {
    console.log(!!valor);
}

verificarValor(0);


// Crie uma função para perimetro do quadrado

function perimetro(lado) {
    return lado * 4
}

console.log(perimetro(2))


// Crie uma função que mostra seu nome completo

function nomeCompleto(nome, sobrenome) {
    return nome + sobrenome
}

console.log(nomeCompleto('Renan', ' Siqueira'));


// Crie uma função que fala se o valor é par ou impar

function par(valor) {
    if(valor % 2 === 0) {
        return 'É par'
    } else {
        return'É impar'
    }
}

console.log(par(2))


// Crie uma função que retorna o tipo de dado

function tipoDeDado(dado) {
    return typeof dado;
}

console.log(tipoDeDado('funciona'))


///////////////////////////////////////////////////////////////////////////////

addEventListener('click', function() {
    console.log('Renan Siqueira')
});
