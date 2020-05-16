let carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

// Retornar um array apenas com os preços

carrinho.forEach( function(valor, index) {
    carrinho[index] = JSON.parse(valor)
})

precos = carrinho.map(function (e) {
    return e.preco
})

console.log(precos.length === carrinho.length)
console.log(precos)

// Do jeito do professor
carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

precos = carrinho.map(paraObjeto).map(apenasPreco)

console.log(precos)
