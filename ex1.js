let user = prompt("Informe seu usuário:")
let pass = prompt("Informe sua senha:")

if (user != "admin" && pass != "senha123") {
    alert("Revise os seguintes campos:\n\n- Usuário\n- Senha")
}

else if (user != "admin") {
    alert("Revise o seguinte campo:\n\n- Usuário")
}

else if (pass != "senha123") {
    alert("Revise o seguinte campo:\n\n- Senha")
}

else {
    alert("Logado com sucesso!")
}
