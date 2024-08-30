const numeros = [12, 18, 69, 99, 16, 33]
function devolverMaiorNumero(array) {
    let MaiorNumero = 0

for(let i = 0;  i < array.length; i++) {
    let numeroAtual = array[i]

    if(numeroAtual >= MaiorNumero){
        MaiorNumero = numeroAtual
    }
}
console.log("o maior numero do array é", MaiorNumero)
}
devolverMaiorNumero(numeros)