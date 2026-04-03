// Estrutura de Decisão 
// switch // Break // Default

let fruta = "banana"

switch (fruta) {
    case "laranja": 
        console.log("Suco de laranja")
        break
    case "banana":
    case "morango":
    case "abacate":
        console.log("Vitamina de " + fruta)
        break
    
    case "bacuri":
        console.log("Vitamina de bacuri")
        break
    
    case "maça":
        console.log("Suco de maçã")
        break

    default:
        console.log("Suco generico")
}