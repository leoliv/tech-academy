// for of
const animes = ['DBS', 'Naruto', 'One Piece', 'Hunter X Hunter'];
function incrementar() {
  let textoLi = '';
  for (const anime of animes) {
    textoLi += `<li>${anime}</li>`;
  }
  return textoLi;
}

document.querySelector('#listaAnimes').innerHTML = incrementar();
