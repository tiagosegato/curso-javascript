//LISTA DE EXERCÍCIOS 2 - Estruturas Condicionais e de Repetição

// 1 - Declare uma variável temperatura e atribua um valor numérico a ela. Use uma estrutura if para verificar se a 
// temperatura é maior que 30. Se for, exiba a mensagem "Está muito calor hoje!" no console.

/*
let temperatura = 32

if (temperatura > 30) {
    console.log('Está muito calor hoje!')
}
*/

// 2 - Declare uma variável idade e atribua um valor a ela. Use uma estrutura if/else para verificar se a pessoa 
// tem 18 anos ou mais. Se tiver, exiba "Pode dirigir.". Caso contrário, exiba "Não pode dirigir.".

/*
let idade = 18

if (idade >= 18) {
    console.log('Pode dirigir')
} else {
    console.log('Não pode dirigir')
}
    */

// 3 - Declare uma variável nota (de 0 a 10). Use uma estrutura if/else if/else para classificar o desempenho: 
// Se a nota for 9 ou maior, exiba "Excelente!". Se a nota for entre 7 e 8.9, exiba "Bom!". Se a nota for 
// entre 5 e 6.9, exiba "Recuperação.". Se a nota for menor que 5, exiba "Reprovado.".

/*
let nota = 4

if (nota >= 9) {
    console.log('Excelente!')
} else if (nota >= 7) {
    console.log('Bom!')
} else if (nota >= 5) {
    console.log('Recuperação')
} else {
    console.log('Reprovado')
}
*/

// 4 - Crie uma variável categoria e atribua a ela uma das seguintes strings: "Ouro", "Prata" ou "Bronze". 
// Utilizando uma estrutura switch, exiba no console a quantidade de pontos que o cliente ganha: 20 pontos 
// para "Ouro", 15 para "Prata" e 10 para "Bronze". Inclua um caso default para exibir a mensagem "Categoria 
// inválida" se a variável não corresponder a nenhuma das opções.

/*
let categoria = "Ouro"

switch (categoria) {
    case "Ouro":
        console.log('20 pontos')
        break
    case "Prata":
        console.log('15 pontos')
        break
    case "Bronze":
        console.log('10 pontos')
        break
    default:
        console.log('Sem pontuação')
}
*/

// 5 - Declare uma variável numero e atribua um número inteiro a ela. Use um laço for para calcular e exibir a 
// tabuada desse número, de 1 a 10, no formato "numero x i = resultado".

/*
let numero = 8

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)
}
*/

// 6 - Declare um array de números chamado listaDeNumeros. Use um laço for...of para percorrer o array e 
// encontrar o maior número entre eles. Ao final, exiba o maior número encontrado no console.

/*
let listaDeNumeros = [15, 2, 88, 43, 5, 99, 12]
let maiorNumero = listaDeNumeros[0]

for (let numero of listaDeNumeros) {
    if (numero > maiorNumero) {
        maiorNumero = numero
    }
}

console.log(maiorNumero)
 */

// 7 - Declare as variáveis saldo (iniciando em 0), meta (com um valor desejado, ex: 1000) e depositoMensal. 
// Use um laço while que continue adicionando o depositoMensal ao saldo enquanto o saldo for menor que a meta. 
// A cada mês (iteração), exiba o saldo atual. Conte e exiba também quantos meses foram necessários para atingir 
// a meta.

/*
let saldo = 0
let meta = 1000
let depositoMensal = 200
let mes = 0

while (saldo < meta) {
    saldo += depositoMensal
    mes++
    console.log(`Mês: ${mes}, com saldo atual de ${saldo}`)
}

console.log(`Foram necessários ${mes} meses para atingir a meta!`)
*/

// 8 - Crie um sorteio simples. Use Math.random() e Math.floor() para gerar um número aleatório entre 1 e 10 a 
// cada iteração. O laço deve continuar sorteando números até que o número sorteado seja 7. Use um laço do...while 
// para garantir que pelo menos um sorteio seja feito. A cada sorteio, exiba o número que saiu. Ao final, 
// exiba "Finalmente! O número 7 foi sorteado.".

/*
let numeroSorteado
let numeroAlvo = 7

do {
    numeroSorteado = Math.floor(Math.random() * 10) + 1;
    // Math.random() gera de 0 a <1. Multiplicamos por 10 e somamos 1 para ter de 1 a <11
    // Math.floor() arredonda para baixo, resultando em um inteiro de 1 a 10
    console.log(`Número Sorteado: ${numeroSorteado}`)
} while (numeroSorteado !== numeroAlvo)

console.log(`Finalmente! O número ${numeroAlvo} foi sorteado.`)
*/