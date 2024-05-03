gasto = prompt("Informe o gasto realizado:")
desc = 0

if (gasto <= 100 && gasto >= 0) {
    alert("Você não recebeu um desconto!")
    alert("Preço final: R$" + gasto + ",00")
}

else if (gasto > 100 && gasto <= 200) {
    alert("Você recebeu um desconto de 10%")
    desc = gasto - (10 / 100) * gasto
    alert("Preço final: R$" + desc)
}

else if (gasto > 200 && gasto) {
    alert("Você recebeu um desconto de 20%")
    desc = gasto - (20 / 100) * gasto
    alert("Preço final: R$" + desc)
}

else {
    alert("Por favor, informe um número positivo!")
}