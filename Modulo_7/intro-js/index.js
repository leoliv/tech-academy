// var h2 = document.createElement('h2');
// h2.textContent = `Hello world`;
// document.body.appendChild(h2);
// alert('Seja bem vindo!');
// document.write('<p>Essa a nossa primeira video aula</p>');
document.querySelector('#t1').textContent = 'Javascript Introdução';
document.querySelector('#t2').textContent =
  'Exemplificando algumas funcionalidades';

// const nome = prompt('Qual o seu nome?');
// alert(`Que bom ter você por aqui ${nome}!!!`);

// function login() {
//   var nome = document.getElementById('name').value;
//   alert(`Olá ${nome} Bem vindo!`);
//   document.getElementById('formulario').style.display = 'none';
// }

const colors = addEventListener('change', () => {
  const menu = document.querySelector('#corDeFundo');
  const cor = menu.options[menu.selectedIndex].value;
  document.body.style.backgroundColor = cor;
});

colors();
