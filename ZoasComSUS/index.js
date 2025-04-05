function verificarCaixa() {
    let caixa = document.getElementById('doencas');
    let res = document.getElementById('res');
  
    if (!caixa.value) {
      alert('Marca algum sintoma imbecil. Tás sentido oq????.');
    } else {
      res.innerHTML = 'Uma dipirona resolve, vai trabalhar!';
    }
  }
  