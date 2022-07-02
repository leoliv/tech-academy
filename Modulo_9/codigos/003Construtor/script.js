'use strict';

class livro {
  // create a constructor with parameters title and year
  constructor(title, year) {
    this.title = title;
    this.year = year;
  }
}

// instantiate an object of type book with parameters "The Hobbit" and "1937"
let hobbit = new livro('The Hobbit', '1937');
console.log(hobbit);

class produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

const produto1 = new produto('Notebook', 2999.9, 23123);
console.log(produto1);

class Financiamento {
  valorFinanciamento;
  taxaJuros;
  numero;
  constructor(valorFinanciamento, taxaJuros, numero) {
    this.valorFinanciamento = valorFinanciamento;
    this.taxaJuros = taxaJuros;
    this.numero = numero || 0;
  }
}

const fin = new Financiamento(10000, 1, 245);
const fin2 = new Financiamento(30000, 2);
console.log(fin);
console.log(fin2);
