const pilotos = ['Vettel', 'Alonso', 'Raikkon', 'Massa']
pilotos.pop() // massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton') // pushFront()
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover (Apagar um elemento começando do indice 3)
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

// pegar elementos a partir do indice 2
const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

// pega elementos começando do indice 1 até o 4
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)

