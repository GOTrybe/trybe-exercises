let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

console.log("----------------------------------");
console.log("Exercício 01 - Imprimindo mensagem");
console.log("----------------------------------");

console.log("Bem-vinda, " + info.personagem + "!")

console.log("-----------------------------------------");
console.log("Exercício 02 - Inserindo nova propriedade");
console.log("-----------------------------------------");

info["recorrente"] = "Sim"

console.log(info.recorrente)

console.log("------------------------------------");
console.log("Exercício 03 - Exibindo keys dos obj");
console.log("------------------------------------");

for (key in info) {
    console.log(key);
}

console.log("------------------------------------");
console.log("Exercício 04 - Exibindo values dos obj");
console.log("------------------------------------");

for (values in info) {
    console.log(info[values]);
}