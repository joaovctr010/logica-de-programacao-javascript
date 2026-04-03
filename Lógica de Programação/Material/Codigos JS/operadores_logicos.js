//Operadores Logicos 

// AND ( && )
// Se duas condições forem verdadeiras

console.log("\tTestes Operador AND\n")

let idade = 18
let vistoVerificado = true
let resultado = (idade>=18) && (vistoVerificado === true)


console.log(resultado)


let moedasColetadas = 100 
let itemAND = "estrela"
let resultado2 = (moedasColetadas === 100) && (itemAND === "estrela")

console.log(resultado2)

console.log("\n")


// OR ( || ) pipes 
// nosso boneco só pode sair se estiver sem chuva ou com guarda chuva

console.log("\tTestes Operador OR\n")

let tempo = "chuva"
let itemOR = "Carro de mão"

let podeSair = (tempo !== "chuva") || (itemOR === "guarda chuva")



console.log("Nosso personagem pode sair? " + podeSair)


console.log("\n")

// NOT ( ! ) - Nega uma afirmação

console.log("\tTeste Operador NOT\n")

let tempoN = "chuva"
let resultadoN = tempo === "chuva"

console.log(!resultadoN)

