const valor = []
const numero =prompt("ensira uma numero")
const numero2 =prompt("ensira um segundo numero")
const numero3 =prompt("ensira seu terceiro numero")
valor.push(numero)
valor.push(numero2)
valor.push(numero3)

console.log(valor)

const ok = Number (prompt("digite 0, 1 ou 2 para confirmar uma media dos numeros escolhidos"))
valor.splice(ok, 1)

console.log(valor)
