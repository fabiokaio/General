// document.addEventListener('DOMContentLoaded', function () {
    const botao = document.getElementById('botao');
    const res = document.querySelector('.contador');
    let num = 0;

    botao.addEventListener('click', function () {
        num++;
        res.innerHTML = `Você clicou ${num} vezes`;
    });
    // });