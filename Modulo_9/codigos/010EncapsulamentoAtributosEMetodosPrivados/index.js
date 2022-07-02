'use strict';

class Produto {
  #tipo;
  #valor;
  constructor(tipo, valor) {
    // this.#validaValor(valor);
    this.#tipo = tipo;
    this.#valor = valor;
  }
  // create a method named 'validaValor' that will validate the value passed for parametro verifying if it is a number if not it will print 'valor inválido!'
  #validaValor(valor) {
    if (typeof valor !== 'number') {
      console.log('Valor inválido!');
    } else {
      console.log('Valor válido!');
    }
  }
  getDados() {
    return `Tipo: ${this.#tipo} - Valor: ${this.#valor}`;
  }
}

class Livro extends Produto {
  #titulo;
  #numPag;
  constructor(titulo, numPag, valor) {
    super('Livro', valor); // chama o construtor da classe pai
    this.#titulo = titulo; // atribui o valor do parametro ao atributo da classe
    this.#numPag = numPag;
  }
}

// const prod = new Produto('Novo nome do produto generico', '78');
// console.log(prod.getDados());
const liv = new Livro('Livro 1', 100, 120);
console.log(liv);
