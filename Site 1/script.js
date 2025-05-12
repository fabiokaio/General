function verificarLogin() {
    const usuario = document.getElementById("user").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (usuario === "" || senha === "") {
        alert("Por favor, preencha os dois campos antes de continuar.");
    } else {
        window.location.href = "index2.html";
    }
}

window.addEventListener("DOMContentLoaded", function () {
    const botaoLogin = document.getElementById("login");
    if (botaoLogin) {
        botaoLogin.addEventListener("click", verificarLogin);
    }
});
