let n1 = parseFloat (prompt("Informe um número:"))
let n2 = parseFloat (prompt("Informe um número:"))
let n3 = parseFloat (prompt("Informe um número:"))


if (n1 < n2 && n2 < n3) {
    alert("Os números estão em ordem crescente!")
}

else if (isNaN(n1) === true && isNaN(n2) === true && isNaN(n3) === true){
    alert("Por favor, informe números positivos!")
}

else {
    alert("Os números não estão em ordem crescente!")

}