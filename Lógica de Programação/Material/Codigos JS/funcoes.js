//Trabalhando com Funções

//Fazendo uma função para executar uma ação
function injetarPao(){
    console.log("Preparando para injetar o pão")
    console.log("Finalizado")
}

//Fazendo outra função para executar uma ação e usar uma função dentro da função
function torrar(){
    console.log("Torrando pão")
    injetarPao()
}


//Fazendo a chamada função para executar
torrar()
