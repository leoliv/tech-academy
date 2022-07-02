'use strict';

class Produto {
  tipo;
  constructor(tipo) {
    this.tipo = tipo;
  }
  getDados() {
    return `Tipo: ${this.tipo}`;
  }
}

class Livro extends Produto {
  titulo;
  numPag;
  constructor(tipo, titulo, numPag) {
    super(tipo); // chama o construtor da classe pai
    this.titulo = titulo; // atribui o valor do parametro ao atributo da classe
    this.numPag = numPag;
    // console.log(this.getDados()); // Will print 'Tipo: Livro'
    // console.log(this.tipo); // Will print 'Livro'
    // console.log(Produto.getDados()); // Only will work if the method is static
  }
  exibeDados() {
    console.log(`${this.getDados()} - ${this.titulo} - ${this.numPag}`); // also it works with the word 'super' to call the method of the class father
  }
}

const prod = new Produto('Produto');
// console.log(prod.getDados()); // I can't call the static method from the class Produto

const liv = new Livro('Livro', 'Livro 1', 100);
liv.exibeDados();
// console.log(liv.getDados());
