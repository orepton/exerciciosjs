let num = parseInt(prompt("Digite um número:"))

if (num % 2 == 0) {
    alert("O número é par!")
}

else if (num % 2 != 0 && isNaN(num) === false) {
    alert("O número é ímpar!")
}

else {
    alert("O valor informado não é um número!")
}