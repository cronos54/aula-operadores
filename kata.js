const cor = prompt("você é um esplorador e está em busca de um tesouro escolha uma cor dessa lista:vermelho,azul,amarelo,verde")
const simbolo = prompt("agora escolha dentre esses simbolos:x,$,#,*")

if ((cor === "vermelho") && (simbolo === "x")){
    console.log("cave um buraco no chão")
} else if ((cor === "azul") && (simbolo === "$")){
    console.log("siga em frente")
} else if ((cor === "verde") && (simbolo === "*")){
    console.log("suba em uma arvore")
} else if ((cor === "amarelo") && (simbolo === "#")){
    console.log("pare e descanse")
} else {
    console.log("tente novamente com outra combinação")
}