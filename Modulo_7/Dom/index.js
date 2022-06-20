const lista = document.querySelector('#lista');
console.log(lista);
const elementoLi = document.createElement('li');
elementoLi.textContent = 'Um novo elemento na lista';
lista.appendChild(elementoLi);
// lista.setAttribute('class', 'novoponteiro');
// lista.className = 'novoponteiro';
// lista.removeAttribute('class');
const button = document.querySelector('button');
button.addEventListener('click', function () {
  return lista.getAttribute('class')
    ? lista.removeAttribute('class')
    : lista.setAttribute('class', 'novoponteiro');
});
