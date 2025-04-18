// const questões = document.querySelectorAll(".pergunta");  //Pergunta principal
// const nextBtn = document.getElementById("next-btn"); // Botão para prosseguir a pergunta
// const barra_progress = document.getElementById("barra_progress"); //barra de progresso

// let current = 0; // Nível em que está a barra
// const total = questões.length; 

// function updateProgress() {
//   const percentage = ((current + 1) / total) * 100; // Calculo da percentagem em que está o progresso na progressFill
//   barra_progress.style.width = `${percentage}%`; 

//   if (percentage < 40) {
//     barra_progress.style.backgroundColor = "red";
//   } else if (percentage < 80) {
//     barra_progress.style.backgroundColor = "yellow";
//   } else {
//     barra_progress.style.backgroundColor = "green";
//   }
// }

// nextBtn.addEventListener("click", () => {
//   if (current < total - 1) {
//     questões[current].classList.add("hidden");
//     current++;
//     questões[current].classList.remove("hidden");
//     updateProgress();
//   } else {
//     questões[current].classList.add("hidden");
//     nextBtn.style.display = "none";
//     updateProgress();
//   }
// });

// updateProgress();
// ChatGPT

const perguntas = document.querySelectorAll(".pergunta, .proxima");
const botao = document.getElementById("next-btn");
const barra = document.getElementById("barra_progress");

let atual = 0;
const total = perguntas.length;

function atualizarBarra() {
    const porcentagem = ((atual + 1) / total) * 100;
    barra.style.width = `${porcentagem}%`;

    if (porcentagem < 40) {
        barra.style.backgroundColor = "red";
    } else if (porcentagem < 80) {
        barra.style.backgroundColor = "yellow";
    } else {
        barra.style.backgroundColor = "green";
    }
}

botao.addEventListener("click", () => {
    if (atual < total - 1) {
        perguntas[atual].style.display = "none";
        atual++;
        perguntas[atual].style.display = "block";
        atualizarBarra();
    } else {
        perguntas[atual].style.display = "none";
        botao.style.display = "none";
        atualizarBarra();
    }
});

// Inicializar
perguntas.forEach((el, idx) => {
    el.style.display = idx === 0 ? "block" : "none";
});
atualizarBarra();