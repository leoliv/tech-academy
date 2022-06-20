// Operador Ternário
function media(a, b) {
  return a > b
    ? 'A é maior que B'
    : b > a
    ? 'B é maior que A'
    : 'A e B são iguais!';
}

console.log(media(6, 7));
