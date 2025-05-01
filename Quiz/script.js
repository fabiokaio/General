document.addEventListener("DOMContentLoaded", () => {
    const perguntas = document.querySelectorAll(".proxima");
    const btnResponder = document.getElementById("next-btn");
    const barra = document.getElementById("barra_progress");

    let perguntaAtual = 0;
    let pontuacao = 0;

    // Mapeamento das respostas corretas por pergunta
    const respostasCorretas = {
        q1: "a2",
        q2: "a3",
        q3: "a3",
        q4: "a2",
        q5: "a4",
        q6: "a1",
        q7: "a3",
        q8: "a2"
    };

    // Exibe somente a primeira pergunta
    perguntas.forEach((p, i) => {
        p.style.display = i === 0 ? "block" : "none";
    });

    atualizarBarra();

    btnResponder.addEventListener("click", () => {
        const pergunta = perguntas[perguntaAtual];
        const selecionado = pergunta.querySelector("input[type='radio']:checked");

        if (!selecionado) {
            alert("Selecione uma alternativa antes de continuar.");
            return;
        }

        const nome = selecionado.name;
        const valor = selecionado.value;
        const correta = respostasCorretas[nome];

        const alternativas = pergunta.querySelectorAll("label");

        // Marcação visual
        alternativas.forEach(label => {
            const input = label.querySelector("input");
            if (input.value === correta) {
                label.classList.add("correta");
            }
            if (input.checked && input.value !== correta) {
                label.classList.add("incorreta");
            }
        });

        // Verifica se está correta
        if (valor === correta) {
            pontuacao++;
        } else {
            const textoCorreto = pergunta.querySelector(`input[value="${correta}"]`).nextElementSibling.textContent;
            alert(`Incorreto! A resposta certa é:\n\n${textoCorreto}`);
        }

        // Aguarda um pouco para mostrar cores antes de passar
        setTimeout(() => {
            pergunta.style.display = "none";
            perguntaAtual++;

            if (perguntaAtual < perguntas.length) {
                perguntas[perguntaAtual].style.display = "block";
                atualizarBarra();
            } else {
                btnResponder.disabled = true;
                btnResponder.innerText = `Fim do Quiz! Acertos: ${pontuacao}/${perguntas.length}`;
                atualizarBarra();
            }
        }, 500);
    });

    function atualizarBarra() {
        const progresso = ((perguntaAtual + 1) / perguntas.length) * 100;
        barra.style.width = `${progresso}%`;

        if (progresso <= 25) {
            barra.style.backgroundColor = "red";
        } else if (progresso <= 50) {
            barra.style.backgroundColor = "yellow";
        } else if (progresso <= 75) {
            barra.style.backgroundColor = "green";
        } else {
            barra.style.backgroundColor = "blue";
        }
    }
});
