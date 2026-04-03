//Matrizes

let nomesPokemon = [
    "Pikachu", "Chamander", "Bulbassaro"
]

let timePokemon = [
    [nomesPokemon[0], "M", "level 1"],
    [nomesPokemon[1], "F", "level 4"],
    [nomesPokemon[2], "M", "level 5"]
]

console.log(timePokemon[1])

console.log(
    "O meu pokemon " + timePokemon[0][0] + " é do sexo " + timePokemon[0][1] + " e está no nivel " + timePokemon[0][2]
)