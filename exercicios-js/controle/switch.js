const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case5: case4:
            console.log('Reprovado')
            break
        case 3, 2, 1, 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
