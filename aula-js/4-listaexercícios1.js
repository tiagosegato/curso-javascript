//LISTA DE EXERCÍCIOS 1 - Variáveis, Tipos de dados e Operadores

// 1 - Declare variáveis para armazenar o nome, a idade, o e-mail e se o usuário é um assinante (booleano). Use const 
// para os dados que não devem ser alterados e let para aqueles que podem ser atualizados. Exiba essas informações 
// no console de forma organizada, usando template strings.

/*
const nome = 'Tiago'
const email = 'tiago.segato@gmail.com'
let idade = 25
let assinante = false

console.log(`O usuário ${nome}, de e-mail: ${email}, tem ${idade} anos, e é assinante: ${assinante}`)
*/

// 2 - Declare duas variáveis, base e altura, e atribua valores numéricos a elas. Calcule a área do retângulo 
// (área = base * altura) e armazene o resultado em uma terceira variável chamada area. Exiba o resultado no 
// console com uma mensagem clara.

/*
let base = 10
let altura = 5

let area = base * altura

console.log(`O retângulo de base ${base} e altura ${altura} tem área de: ${area}`)
*/

// 3 - Declare uma variável idade e atribua um valor numérico. Use um operador relacional para verificar se a idade 
// é maior ou igual a 18. Armazene o resultado booleano (true ou false) em uma variável chamada eMaiorDeIdade. 
// Exiba a variável eMaiorDeIdade no console.

/*
let idade = 30

let eMaiorDeIdade = idade >= 18

console.log(eMaiorDeIdade)
*/

// 4 - Declare uma variável valorProduto com o valor "150" (como string). Declare uma variável valorDesconto com o 
// valor 20 (como number). Tente subtrair o desconto do produto e veja o que acontece. Corrija o problema 
// convertendo a string para número antes da operação e exiba o resultado final no console.

/*
let valorProduto = "150"
let valorDesconto = 20

let valorFinal = Number(valorProduto) - valorDesconto

console.log(valorFinal)
*/

// 5 - Declare uma variável numero e atribua um valor inteiro a ela. Use o operador de módulo (%) para verificar se 
// o número é par. Um número é par se o resto da sua divisão por 2 for 0. Armazene o resultado booleano em uma 
// variável ePar e exiba no console.

/*
let numero = 7

let ePar = (numero % 2) === 0

console.log(ePar)
*/

// 6 - Declare duas variáveis booleanas: usuarioLogado e temPermissaoAdmin. Use o operador lógico && (E) para 
// verificar se o usuário está logado E tem permissão de administrador. Armazene o resultado em uma variável 
// podeAcessarAreaAdmin e exiba-a no console.

/*
let usuarioLogado = true
let temPermissaoAdmin = false

let podeAcessarAreaAdmin = usuarioLogado && temPermissaoAdmin

console.log(podeAcessarAreaAdmin)
*/

// 7 - Declare uma variável pontuacao com um valor numérico. Use o operador ternário para criar uma variável 
// statusDoJogo. Se a pontuação for maior que 1000, o status deve ser "Jogador VIP". Caso contrário, deve ser 
// "Jogador regular". Exiba o statusDoJogo no console.

/*
let pontuacao = 1001

let statusJogo = pontuacao > 1000 ? "Jogador VIP" : "Jogador Regular"

console.log(statusJogo)
*/

// 8 - Declare duas variáveis: peso (em kg) e altura (em metros). Calcule o IMC usando a fórmula: 
// IMC = peso / (altura * altura) ou IMC = peso / altura ** 2. Armazene o resultado na variável imc e exiba no 
// console, formatando o número para ter apenas duas casas decimais.

/*
let peso = 70
let altura = 1.80

//let imc = peso / (altura * altura)
let imc = peso / altura ** 2

console.log(imc.toFixed(2))
*/

// 9 - Declare três variáveis: primeiroNome, ultimoNome e anoNascimento. Concatene essas informações para criar uma 
// frase no seguinte formato: "O usuário [primeiroNome] [ultimoNome] nasceu em [anoNascimento]." Armazene a 
// frase completa em uma variável e exiba no console.

/*
let primeiroNome = 'Tiago'
let ultimoNome = 'Segato'
let anoNascimento = 1986

//let frase = "O usuário " + primeiroNome + " " + ultimoNome + " nasceu em" + anoNascimento
let frase = `O usuário ${primeiroNome} ${ultimoNome} nasceu em ${anoNascimento}`

console.log(frase)
*/

// 10 - Crie um script para calcular juros simples. Declare as variáveis capitalInicial, taxaDeJuros (em decimal, 
// ex: 5% = 0.05) e tempoDeAplicacao (em meses). A fórmula é: 
// montante = capitalInicial * (1 + taxaDeJuros * tempoDeAplicacao). Calcule e exiba o valor do montante final.

/*
let capitalInicial = 1000
let taxaDeJuros = 0.07
let tempoDeAplicacao = 12

let montante = capitalInicial * (1 + taxaDeJuros * tempoDeAplicacao)

console.log(montante)
*/