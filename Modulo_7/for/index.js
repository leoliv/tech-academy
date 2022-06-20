// for

const animes = ['DBS', 'Naruto', 'One Piece', 'Hunter X Hunter'];
function incrementar() {
  let textoLi = '';
  for (let index = 0; index < animes.length; index++) {
    textoLi += `<li>${animes[index]}</li>`;
  }
  return textoLi;
}

document.querySelector('#listaAnimes').innerHTML = incrementar();
