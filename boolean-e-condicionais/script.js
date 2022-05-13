var irFaculdade = false;

if(irFaculdade) {
    console.log('Pouca gente e n aprender nada')
} else {
    console.log('Estudar JS p ficar bolado no trampo')
}

var possuiCarroTurbo = false;
var possuiCarro = true;

if(possuiCarroTurbo) {
    console.log('É divertido né?')
}else if(possuiCarro) {
    console.log('Não sendo Polo está tudo bem')
}else {
    console.log('Não me divirto')
}

//Operadores Lógicos &&

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // Cão
(5 - 5) && (5 + 5); // 0
'Gato' && true; // false
(5 >= 5) && (3 < 6); // true

// Se ambos os valores forem true ele irá retornar o último valor verificado
// Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos


//Operadores Lógicos ||

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || true; // Gato
(5 >= 5) || (3 < 6); // true

// Retorna o primeiro valor true que encontrar


var corFavorita = 'Vermelho'

switch (corFavorita) {
    case 'Preto':
        console.log('Noite')
        break
    case 'Azul':
        console.log('Mar')
        break
    case 'Vermelho':
        console.log('Pôr do Sol')
        break
    default:
        console.log('N gosta de cor bonita')
}


var idade = 21;
var idadeIrmao = 16;

if(idade > idadeIrmao) {
    console.log('Você é mais velho que seu irmão')
} else if(idade === idadeIrmao) {
    console.log('Mesma idade')
} else {
    console.log('Você é mais novo')
}