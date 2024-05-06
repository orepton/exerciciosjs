let n1 = parseFloat (prompt("Informe um número:"))
let n2 = parseFloat (prompt("Informe um número:"))
let n3 = parseFloat (prompt("Informe um número:"))


if (n1 < n2 && n2 < n3) {
    alert("Os números estão em ordem crescente!")
}

else if (isNaN(n1) === true && isNaN(n2) && isNaN(n3) === true){
    alert("O valor informado não é um número!")
}

else {
    alert("Os números não estão em ordem crescente!")

}
