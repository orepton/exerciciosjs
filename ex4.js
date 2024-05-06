let n1 = parseFloat(prompt("Informe a nota número 1"))
let n2 = parseFloat(prompt("Informe a nota número 2"))
let n3 = parseFloat(prompt("Informe a nota número 3"))
let n4 = parseFloat(prompt("Informe a nota número 4"))
let r = (n1 + n2 + n3 + n4) / 4

if (r >= 7 && r <= 10) {
    alert("O aluno foi APROVADO!")
    alert("A média final foi " + r + "!")
}

else if (r >= 5 && r < 7) {
    alert("O aluno ficou de RECUPERAÇÃO!")
    alert("A média final foi " + r + "!")
}

else if (r < 5 && r >= 0) {
    alert("O aluno foi REPROVADO!")
    alert("A média final foi " + r + "!")
}

else {
    alert("As notas informadas estão inválidas!")
}


