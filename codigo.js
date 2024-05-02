let notas = document.querySelectorAll('.nota');
let buttonEnviar = document.querySelector('.button--enviar');
let notajaEnviada = document.querySelector('.nota--enviada');
let cardUm = document.querySelector('.card-conteudo');
let cardDois = document.querySelector('.card--conteudo__final');

notas.forEach((nota, index) => {
    nota.addEventListener('click', () => {
      selecionandoNota(index);
    });
  });
  
  // Função para destacar a nota selecionada
  function selecionandoNota(index) {
    // Remover a classe "nota-selecionada" de todas as notas
    notas.forEach(nota => {
      nota.classList.remove('nota-selecionada');
    });
  
    // Adicionar a classe "nota-selecionada" à nota clicada
    notas[index].classList.add('nota-selecionada');
  }


  function enviandoNota() {
    const notaSelecionada = document.querySelector('.nota-selecionada');

    if (notaSelecionada) {
        const nota = notaSelecionada.getAttribute('value');
        notajaEnviada.innerText = `You selected  ${nota}  out of 5`
        cardUm.style.display = 'none';
        cardDois.style.display = 'block';  
}
}

buttonEnviar.addEventListener('click', enviandoNota);
  




