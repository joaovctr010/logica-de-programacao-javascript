//Operadores de comparação 

// = é atribuição 
// ==é comparação 
// === é para comparar o valor e o formato do conteudo 
// !== é diferente?

//declaração de variavel
let numero = 1 

//compara a variavel com um numero 
console.log(numero == 1) //numero inteiro
console.log(numero == "1") //numero em String
console.log(numero === "1") //numero em String comparando o formato

let marca = "Apple"

console.log(marca !== "Samsung")


// comparar maior ou menor


let idadeMinima = 18
let idadeUsuario = 17

console.log("A idade do usuario é Valida: " + idadeUsuario < idadeMinima)


