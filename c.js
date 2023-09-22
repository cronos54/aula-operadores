function resposta(idade, nome, mor, prof){
  return  console.log("seu nome é", nome, "você tem essa idade", idade, "você mora em", mor, "você trabalha com", prof )
}


const idade = Number(prompt("quantos anos você tem?"))

const nome =(prompt("coloque o seu nome?"))

const mor =(prompt("onde você mora?"))

const prof =(prompt("qual é a sua profição?"))

const resp = resposta(nome , idade , mor , prof)s