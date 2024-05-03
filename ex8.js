let peso = parseFloat (prompt("Informe seu peso em quilogramas:"))
let altura = parseFloat (prompt("Informe sua altura em metros:"))

imc = peso / (altura * altura)
imcformat = imc.toFixed(2)

if (imcformat < 18.5 && imcformat > 0) {
    alert("Você está abaixo do peso!")
    alert("Seu IMC é: " + imcformat)
}

else if (imcformat >= 18.5 && imcformat < 25) {
    alert("Você está com o peso normal!")
    alert("Seu IMC é: " + imcformat)
}

else if (imcformat >= 25 && imcformat < 30) {
    alert("Você está com sobrepeso!")
    alert("Seu IMC é: " + imcformat)
}

else if (imcformat >= 30 && imcformat < 35) {
    alert("Você está com obesidade de primeiro grau!")
    alert("Seu IMC é: " + imcformat)
}

else if (imcformat >= 35 && imcformat < 40) {
    alert("Você está com obesidade de segundo grau!")
    alert("Seu IMC é: " + imcformat)
}

else if (imcformat >= 40) {
    alert("Você está com obesidade de terceiro grau!")
    alert("Seu IMC é: " + imcformat)
}

else {
    alert("Por favor, use números positivos para a altura e peso!")
}

