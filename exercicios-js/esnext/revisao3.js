// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Pessoa {
    constructor(nome, cpf, telefone) {
        this.nome = nome
        this.cpf = cpf
        this.telefone = telefone
    }
}
class Estudante extends Pessoa {
    constructor(nome, cpf, telefone, matricula){
        super(nome, cpf, telefone)
        this.matricula = matricula
    }

    falar() {
        return 'Au au!'
    }
}

console.log(new Estudante('Daniel', 700, 987391798, 2018).nome)