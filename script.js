function gerarCarta() {
  removeSelecionado();
  let conteudoCarta = document.getElementById('carta-texto').value;
  let tagFilho = document.getElementById('carta-gerada');
  let arrayConteudo = conteudoCarta.split(' ');
  for (let index = 0; index < arrayConteudo.length; index += 1) {
    let criandoCarta = tagFilho.appendChild(document.createElement('span'));
    criandoCarta.innerText = arrayConteudo[index];
  }
}

function removeSelecionado() {
  let removeItem = document.querySelectorAll('span');
  for (let i = removeItem.length-1; i >= 0 ; i -= 1) {
    removeItem[i].remove();
  }
}
