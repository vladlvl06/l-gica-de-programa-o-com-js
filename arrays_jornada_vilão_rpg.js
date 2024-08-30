
let inventario = ["adaga ritualista", "cajado de necromante", "grimorio de magia negra", "poção de mana", "foice", "mapa da tumba", "estaca"]

console.log("seu inventario inicial:", inventario);

let novoItem = "manto de necromante"
inventario.push(novoItem);

console.log("você encontou um bau! novo iten adicionado ao seu inventario:", inventario);

console.log("um vampiro apareceu! prepare-se para batalha.");

let itenUsado1 = inventario [0]
let itenUsado2 = inventario [1]
let itenUsado3 = inventario [2]
let itenUsado4 = inventario [3]
let itenUsado5 = inventario [4]
let itenUsado6 = inventario [5]
let itenUsado7 = inventario [6]

console.log(`você crava a sua ${itenUsado7} no peito do vampiro!`)

console.log("você conseguiu! você cravou a estaca no peito do vampiro, o deixando paralisado, rapido, aproveite a chance e o finalize!");

console.log(`você decapitou o vampiro com a sua ${itenUsado5}!`)

console.log(`você usa a sua ${itenUsado4} para recuperar a sua mana`)

console.log(inventario.length)