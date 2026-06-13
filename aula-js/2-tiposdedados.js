//STRING
/*
let nome = "Tiago"

let sobrenome = 'Segato'

let idade = '39' //isso é um String

//let saudacao = "Bem-vindo " + nome + " " + sobrenome
let saudacao = `Bem-vindo ${nome} ${sobrenome}`

console.log(nome)
console.log(sobrenome)
console.log(saudacao)
*/

//NUMBER
/*
let idade = 23 //inteiro

let preco = 12.99 //decimal

let infinito = 10 / 0 //infinity

let naoNumero = "preco" * 2 //NaN
let naoNumero = preco * 2 //cálculo normal

console.log(idade)
console.log(preco)
console.log(infinito)
console.log(naoNumero)
*/

//BOOLEAN
/*
let ativo = true
let logado = false

logado = true

let idade = 12
let mairIdade = idade >= 18

console.log(ativo)
console.log(logado)
console.log(mairIdade)
*/

//NULL E UNDEFINED
/*
let casado = false
let conjuge = null

console.log(conjuge) //null

let filhos //undefined

filhos = 2. //number

console.log(filhos) // 2
*/

//OBJECT
/*
let carro = {
    marca: "Volkswagem",
    modelo: "Fusca",
    ano: 1969,
    acelerar: function () {
        console.log('Vrummm!')
    }
};

//console.log(carro)
console.log(carro.modelo)
console.log(carro["marca"])
carro.acelerar()
*/

//ARRAY
/*
let frutas = ['Maça', 'Uva', 'Banana']
let precos = [10, 12.34, 9.99, 80.00]

console.log(frutas)
console.log(frutas[1])
console.log(frutas.length)

console.log(precos)
*/

//FUNCTIONS
/*
function somar(n1, n2) {
    let soma = n1 + n2
    return console.log(soma)
}

somar(4, 3)
*/

//CONVERSÕES DE TIPOS
/*
// String → Number
Number("10");       // 10
Number("3.14");     // 3.14
parseInt("10px");   // 10
parseFloat("2.5");  // 2.5
+"42";              // 42 (atalho)

// Number → String
String(123);        // "123"
(3.14).toString();  // "3.14"

// String → Boolean
Boolean("texto");   // true
Boolean("");        // false
!!"ok";             // true (atalho)

// Boolean → String
String(true);       // "true"
String(false);      // "false"

//VERIFICAÇÃO DE TIPOS - typeof
let media = 7.5;
console.log(typeof media);       // "number"
console.log(typeof "texto");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof somar);       // "function"
console.log(typeof null);        // "object" ⚠ Bug antigo do JS mantido por questões de compatibilidade
*/