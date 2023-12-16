// funcao arrow que retorna o numero aleatorio gerado
const rand = (min = 0, max = 100) => Math.floor(Math.random() * (max - min) + min)
// imprimir numero aleatorio
console.log(rand(10, 15))
