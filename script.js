function removeSelecionado() {
  let removeItem = document.querySelectorAll('span');
  for (let i = removeItem.length-1; i >= 0 ; i -= 1) {
    removeItem[i].remove();
  }
}

function gerarCarta() {
  removeSelecionado();
  let conteudoCarta = document.getElementById('carta-texto').value;
  let tagFilho = document.getElementById('carta-gerada');
  let arrayConteudo = conteudoCarta.split(' ');
  console.log(arrayConteudo);
  if ((conteudoCarta === '') || (arrayConteudo[0] === '')) {
    let mensagemErro = document.getElementById('carta-gerada');
    mensagemErro.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let index = 0; index < arrayConteudo.length; index += 1) {
      let criandoCarta = tagFilho.appendChild(document.createElement('span'));
      criandoCarta.innerText = arrayConteudo[index];
      let classes3 = definaClasse3('newspaper', 'magazine1', 'magazine2') + " " + definaClasse3('medium', 'big', 'reallybig');
      let classes2 = " " + definaClasse2('rotateleft', 'rotateright') + " " + definaClasse2('skewleft', 'skewright');
      criandoCarta.className = classes3 + classes2;
    } }
}

function definaClasse3 (classe1, classe2, classe3) {
  let numero = classesSorteio3();
  let classe;
  if (numero === 0) {
    classe = classe1;
  } else if (numero === 1) {
    classe = classe2;
  } else if (numero === 2) {
    classe = classe3;
  }
  return classe;
}

function definaClasse2 (classe1, classe2) {
    let numero = classesSorteio3();
    let classe;
    if (numero === 0) {
      classe = classe1;
    } else if (numero === 1) {
      classe = classe2;
    } 
    return classe;
  }

function classesSorteio3() {
  let a = Math.floor(Math.random() * 3); 
  return a;
}

function classesSorteio3() {
    let a = Math.floor(Math.random() * 2); 
    return a;
  }
