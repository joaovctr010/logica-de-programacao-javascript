//Codicional if 

// Declaro uma variavel condiconal
let ehLigado = false

console.log("\tExemmplo 1 \n")
//condição entre parenteses e executa se for verdadeiro a condição
if(ehLigado){
    console.log("Executou Comando")
}
else {
    console.log("Deu falso")
}

console.log("\n\tExemplo ovos\n")


let possuiOvos = false
let itensComprados = ""

if(possuiOvos){
    itensComprados = "Leite"
}
else{
    console.log("Passou na sessão de congelados")
    itensComprados = "Lasanha"
}
console.log("Item comprado: "+ itensComprados)


console.log("\n\tExemplo else if \n")


let nivelDeFome = 7

if (nivelDeFome === 1){
    console.log("Você está com pouca fome")
}
    else if(nivelDeFome === 2){
    console.log("Você está com muita fome")
}
    else {
    console.log("Você comeria mais que o pica-pau")
}

