const caixaDeTexto = document.querySelector('#caixaDeTexto');
const botaoAdicionar = document.querySelector('#botaoAdicionar');
const listaTarefas = document.querySelector('#listaTarefas');
const listaSuspensa = document.querySelector('#listaSuspensa');

botaoAdicionar.addEventListener('click', function () {
  const valueCaixaTexto = caixaDeTexto.value;
  caixaDeTexto.value = '';
  listaTarefas.appendChild(adicionarLista(valueCaixaTexto));
  exibeOcultaListaSuspensa();
  caixaDeTexto.focus();
});

function adicionarLista(tarefa) {
  const elementLi = document.createElement('li');
  const elementSpan = document.createElement('span');

  elementSpan.setAttribute('id', 'tarefa');
  elementSpan.textContent = tarefa;

  elementLi.className = 'naoRealizada';
  elementLi.appendChild(elementSpan);
  elementLi.appendChild(acaoBotaoRemover());

  elementSpan.addEventListener('click', acaoTarefa);
  return elementLi;
}

function acaoTarefa() {
  if (this.id === 'tarefa') {
    if (this.parentNode.className === 'naoRealizada') {
      this.parentNode.className = 'realizada';
    } else {
      this.parentNode.className = 'naoRealizada';
    }
  }
}

function acaoBotaoRemover() {
  const botaoRemover = document.createElement('button');
  botaoRemover.innerHTML = '&#10007;';
  botaoRemover.className = 'remover';
  botaoRemover.addEventListener('click', function () {
    listaTarefas.removeChild(this.parentNode);
    exibeOcultaListaSuspensa();
  });
  return botaoRemover;
}

function exibeOcultaListaSuspensa() {
  const elementSpan = document.querySelector('#tarefa');
  if (elementSpan === null) {
    listaSuspensa.setAttribute('hidden', 'hidden');
  } else {
    listaSuspensa.removeAttribute('hidden');
  }
}

listaSuspensa.addEventListener('change', function () {
  if (this.selectedIndex === 1 || this.selectedIndex === 2) {
    const vetoresTarefas = listaTarefas.querySelectorAll('#tarefa');
    for (const tarefa of vetoresTarefas) {
      tarefa.dispatchEvent(new Event('click'));
    }
  } else if (this.selectedIndex === 3) {
    const vetorBotoes = listaTarefas.querySelectorAll('.remover');
    for (const botao of vetorBotoes) {
      botao.dispatchEvent(new Event('click'));
    }
  }
});
