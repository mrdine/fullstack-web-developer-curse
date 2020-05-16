const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// obter mulher chinesa com o menor salario

// 1: obter array de mulheres
const isMulher = funcionario => {return funcionario.genero === 'F'} 
// 2: obter array de chinesas
const isChinesa = funcionario => {return funcionario.pais === 'China'}
// 3: pegar a que tem o menor salario
const menorSalario = (acumulatorF, atualF) => {
    if(acumulatorF.salario < atualF.salario)
        return acumulatorF
    else
        return atualF
}

axios.get(url).then(response => {
    const funcionarios = response.data

    const aMulher = funcionarios.filter(isMulher).filter(isChinesa).reduce(menorSalario)

    console.log(aMulher)
})