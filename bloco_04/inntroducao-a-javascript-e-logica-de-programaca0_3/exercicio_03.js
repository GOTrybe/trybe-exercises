console.log("-------------------------------")
console.log("Exercício 01 - Formar quadrado.")
console.log("-------------------------------")

let n = 2;

console.log(`n = ${n}`)
console.log("")

if (n > 1) {
    console.log("****")
    console.log("****")
    console.log("****")
    console.log("****")
}

console.log("------------------------------------------")
console.log("Exercício 02 - Formar triângulo retângulo.")
console.log("------------------------------------------")

n = 5;

console.log(`n = ${n}`)
console.log("")

if (n > 1) {
    console.log("*")
    console.log("**")
    console.log("***")
    console.log("****")
}

console.log("----------------------------------------------------")
console.log("Exercício 03 - Formar triângulo retângulo invertido.")
console.log("----------------------------------------------------")

n = 5;

console.log(`n = ${n}`)
console.log("")

if (n > 1) {
    console.log(" ", " ", " ", " ","*")
    console.log(" ", " ", " ", "*", "*")
    console.log(" "," ", "*", "*", "*")
    console.log(" ","*", "*", "*", "*")
    console.log("*", "*", "*", "*", "*")
}

console.log("-------------------------------")
console.log("Exercício 04 - Formar pirâmide.")
console.log("-------------------------------")

n = 5;

console.log(`n = ${n}`)
console.log("")

if (n > 1) {
    console.log("", "", "", "","*")
    console.log("", "", "", "*", "*")
    console.log("","", "*", "*", "*")
    console.log("","*", "*", "*", "*")
    console.log("*", "*", "*", "*", "*")
}

console.log("-----------------------------------------------")
console.log("Exercício 05 - Formar pirâmide vazia no centro.")
console.log("-----------------------------------------------")

n = 5;

console.log(`n = ${n}`)
console.log("")

if (n > 1) {
    console.log("", "", "", "","*")
    console.log("", "", "", "*", "*")
    console.log("","", "*", "","", "*")
    console.log("", "*","", "", "", "", "*")
    console.log("*", "*", "*", "*", "*")
}

console.log("-----------------------------------------------")
console.log("Exercício 06 - Número primo.")
console.log("-----------------------------------------------")

let num = 31;

if  ((num % num == 0) && (num % 2 != 0)) {
    console.log(`O número ${num} é primo.`)
}   else if (num == 2) {
    console.log(`O número ${num} é primo`)
}   else {
    console.log(`O número ${num} NÃO é primo`)
}
