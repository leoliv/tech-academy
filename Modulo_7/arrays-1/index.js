let produtos = ['camiseta', 'calça', 'blusa'];
console.log(produtos.length);
console.log(produtos[2]);

const cadastros = [
  {
    nome: 'Maria',
    idade: 29,
  },
  {
    nome: 'José',
    idade: 20,
  },
];

console.log(cadastros);
console.log(cadastros[0]);

// Split - dividir

const email = 'fulano@email.com';
const emailArray = email.split('@');
console.log(emailArray);

const wordsKey = 'cinema, futebol, televisão, viagem, boliche';
const hobbies = wordsKey.split(', ');
console.log(hobbies);

const tiposHobbies = hobbies.toString();
console.log(tiposHobbies);

const tiposHobbiesJoin = hobbies.join(', ');
console.log(tiposHobbiesJoin);
