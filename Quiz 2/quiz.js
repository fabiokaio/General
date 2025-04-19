document.addEventListener('DOMContentLoaded', () => {
    const perguntas = document.querySelectorAll('.proxima');// Não há necessidade de escrevere toda a classe, apenas a parte que é única
    // Seleciona todas as perguntas com a classe 'proxima'.
    const barra = document.getElementById('barra-progresso');
    //Seleciona a div que tem a barra de progresso.
    let indiceAtual = 0; // Mostra a partir do início da div de progresso e ++i
  
    // Mostra apenas a primeira pergunta
    perguntas.forEach((pergunta, index) => {
      if (index === 0) pergunta.style.display = 'block';// Esconde as perguntas que não são a primeira.
      else pergunta.style.display = 'none';// Mostra a primeira pergunta, ou a última se não houver proxima.
     });
  
    function atualizarProgresso() { // Cria uma porcentagem de progresso.
      const progresso = ((indiceAtual + 1) / perguntas.length) * 100;
      barra.style.width = `${progresso}%`;//Mostra o núero de progresso em porcentagem.
  
      if (progresso <= 20) barra.style.background = 'red';
      else if (progresso <= 50) barra.style.background = 'orange';
      else if (progresso <= 80) barra.style.background = 'green';
      else barra.style.background = 'blue';
    }
  // Evento dos botões de resposta.
    perguntas.forEach((pergunta, index) => { 
      const botao = pergunta.querySelector('.responder');
  //Observa se a alternativa foi escolhida.
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
  