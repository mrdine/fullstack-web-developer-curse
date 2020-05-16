// questao 1
function operations(a, b) {
    console.log(a+b, a-b, a*b, a/b)
}

operations(7, 7)

// questao 2
function wichTriangle(a,b,c) {
    if(a === b && a === c) {
        console.log('É equilatero')
    }
    else if(a === b || a === c || b === c) {
        console.log('É isósceles')
    }
    else {
        console.log('É escaleno')
    }
}

wichTriangle(7,7,7)

// questao 3
function elevar(base, expoente) {
    let resultado = base
    for(let i = 1; i < expoente; i++){
        resultado = resultado * base
    }
    return resultado
}
console.log(elevar(10,2))

// questao 4
function dividir(dividendo, divisor) {
    console.log(dividendo/divisor, dividendo % divisor)
}

dividir(7,7)