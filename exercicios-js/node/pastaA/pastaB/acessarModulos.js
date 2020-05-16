const moduloA = require('../../moduloa')
//const moduloA = require('C:\Users\danie\Documents\Daniel\Udemy\Web\minhas pastas\exercicios-js\node\moduloA.js')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC') // usando o index não precisa colocar o nome
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)