let x = 18;
console.log(typeof x); // number

function mediaAritimeticaSimples(a, b) {
  console.log((a + b) / 2);
}

mediaAritimeticaSimples(10, 5);

function soma(a, b) {
  let z = a + b;
  return z;
}

console.log(soma(5, 6));

const pessoa = {
  nome: "Maria",
  idade: 22,
  exibir() {
    return `Olá ${this.nome}! Você tem ${this.idade}.`;
  },
};

console.log(pessoa.exibir());

const estado = "Rio Grande do Norte";
const parte = estado.substring(14, 19);
const parteLength = estado.substring(estado.length - 5);
console.log(parte);
console.log(parteLength);
const position = "Minha cor favorita é: purple";
const indexDaCor = position.indexOf(":");
console.log(indexDaCor);
const texto = "basquete";
const novoTexto = texto.replace("bas", "ra");
console.log(novoTexto);
