'use strict';

class Produtos {
  #descricao;
  #largura;
  #altura;
  #profundidade;
  #valor;
  constructor(descricao, largura, altura, profundidade, valor) {
    this.#descricao = descricao;
    this.#largura = largura;
    this.#altura = altura;
    this.#profundidade = profundidade;
    this.#valor = valor;
  }
  volume() {
    return this.#largura * this.#altura * this.#profundidade;
  }
  parcelaValor(parcela) {
    return this.#valor / parcela;
  }
}

class Livro extends Produtos {
  #paginas;
  constructor(descricao, largura, altura, profundidade, valor, paginas) {
    super(descricao, largura, altura, profundidade, valor);
    this.#paginas = paginas;
  }
}

const prod1 = new Produtos('Cadeira', 10, 3, 2, 100);
console.log(prod1.volume());
console.log(prod1.parcelaValor(2));
console.log(prod1);

const liv = new Livro('Livro', 10, 20, 30, 100);
console.log(liv.volume());

(function (name) {
  console.log('Hello ' + name);
})('World');
