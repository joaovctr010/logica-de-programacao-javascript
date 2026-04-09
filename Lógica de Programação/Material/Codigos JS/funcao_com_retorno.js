
function soma(numA, numB){
    let somatorio = numA + numB
    return somatorio
}


function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}


let resultado = soma(5,25)
console.log(`O resultado da soma ${resultado}`)
console.log(soma(5 , 3))

let userName = getFirstName("João-Victor-da-Silva-Sousa", "-")
console.log("Seja bem vindo " + userName)
userName = getFirstName("Ysadora Oliveira de Sousa Santos", " ")
console.log("Seja bem vindo " + userName)



