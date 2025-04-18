document.addEventListener('DOMContentLoaded', () => {
    const perguntas = document.querySelectorAll('.proxima');
    const barra = document.getElementById('barra-progresso');
    let indiceAtual = 0;
  
    // Mostra apenas a primeira pergunta
    perguntas.forEach((pergunta, index) => {
      if (index === 0) pergunta.style.display = 'block';
      else pergunta.style.display = 'none';
    });
  
    function atualizarProgresso() {
      const progresso = ((indiceAtual + 1) / perguntas.length) * 100;
      barra.style.width = `${progresso}%`;
  
      if (progresso <= 20) barra.style.background = 'red';
      else if (progresso <= 50) barra.style.background = 'orange';
      else if (progresso <= 80) barra.style.background = 'green';
      else barra.style.background = 'blue';
    }
  
    perguntas.forEach((pergunta, index) => {
      const botao = pergunta.querySelector('.responder');
  
      botao.addEventListener('click', () => {
        const selecionado = pergunta.querySelector('input[type="radio"]:checked');
  
        if (!selecionado) {
          alert('Escolha uma alternativa antes de continuar.');
          return;
        }
  
        pergunta.style.display = 'none';
        indiceAtual = index + 1;
  
        if (indiceAtual < perguntas.length) {
          perguntas[indiceAtual].style.display = 'block';
        } else {
          alert('Quiz finalizado!');
        }
  
        atualizarProgresso();
      });
    });
  
    atualizarProgresso();
  });
  