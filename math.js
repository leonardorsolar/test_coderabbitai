// utils/math.js

// Função para somar dois números
function somar(a, b) {
    return a + b
}

// Função para subtrair dois números
function subtrair(a, b) {
    // ERRO: deveria ser a - b, mas coloquei o inverso
    return b - a
}

// Função que retorna a soma de uma lista de números
function somarLista(numeros) {
    // ERRO: reduce sem valor inicial pode dar erro em array vazio
    return numeros.reduce((acc, num) => acc + num)
}

// Exportando funções
module.exports = { somar, subtrair, somarLista }
