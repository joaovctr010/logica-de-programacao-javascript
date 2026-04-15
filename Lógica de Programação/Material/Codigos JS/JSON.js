// JSON - JavaScript Object Notation 
// chave e valor com o objetivo de transferir dados 

let invoice = {
    name: "João", 
    age: 25,
    products: {
        0: ["Mouse2xwm", 29.90],
        1: ["Teclado Mecânico", 129.90],
        2: ["Monitor", 899.99]
    }
}


function generateInvoiceJSON(invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("----------------------")
    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    } 
    
}

console.log("\tTestes com JSON\n")
generateInvoiceJSON(invoice)


console.log("\n")
console.log("\tTestes sem o JSON")
console.log("\n")

let name = "João"
let age = 25
let products = ["Mouse 2xbm", "Teclado Mecanico", "Monitor"]
let productsValues = [29.90, 129.99, 899.99]


function generateInvoice(name, age , products, productsValues){
    console.log("O comprador é "+ name)
    console.log("A idade é "+ age)
    console.log("----------------------")
    console.log("O produto é "+ products[0])
    console.log("O valor é "+ productsValues[0])
}

generateInvoice(name, age, products, productsValues)