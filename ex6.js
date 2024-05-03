let ano = prompt("Informe seu ano de nascimento:")
let maior = 2024 - ano

if (ano >= 2024) {
    alert("Você é bobo?")
}

else if (maior > 18) {
    alert("Você é de maior!")
}

else if (maior < 18) {
    alert("Você é de menor!")
}

else {
    alert("Por favor, informe um número positivo!")
}
