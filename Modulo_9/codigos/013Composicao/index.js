'use strict';

class Loja {
  #nome;
  #produtos = [];
  constructor(nome) {
    this.#nome = nome;
  }
  adicionaProduto(produto) {
    this.#produtos.push(produto);
  }
  exibirProdutos() {
    console.log(`Lista de produtos da loja ${this.#nome}`);
    this.#produtos.forEach(produto => {
      console.log(produto.exibir());
    });
  }
}

class Produto {
  #nome;
  #preco;
  constructor(nome, preco) {
    this.#nome = nome;
    this.#preco = preco;
  }
  exibir() {
    return `Produto: ${this.#nome}, Preço: ${this.#preco}`;
  }
}

const produto1 = new Produto('Notebook', 2999);
const produto2 = new Produto('Mouse', 99);
const produto3 = new Produto('Teclado', 199);
const produto4 = new Produto('Monitor', 1999);
const produto5 = new Produto('Impressora', 999);

// const traumas = new Loja('Traumas');
// traumas.adicionaProduto(produto1);
// traumas.adicionaProduto(produto2);
// traumas.adicionaProduto(produto3);
// traumas.adicionaProduto(produto4);
// traumas.adicionaProduto(produto5);
// traumas.exibirProdutos();

class cupomDesconto {
  #desconto1 = 10;
  #desconto2 = 20;
  #desconto3 = 30;
  getDesconto(gastos) {
    if (gastos >= 300 && gastos <= 700) {
      console.log(`Você tem direito a um desconto de ${this.#desconto1}%`);
    } else if (gastos >= 701 && gastos <= 1500) {
      console.log(`Você tem direito a um desconto de ${this.#desconto2}%`);
    } else if (gastos >= 1501) {
      console.log(`Você tem direito a um desconto de ${this.#desconto3}%`);
    } else {
      console.log('Você não tem direito a descontos');
    }
  }
}

class Cliente {
  #nome;
  #gastosAcumulados = 0;
  #cupom;
  constructor(nome) {
    this.#nome = nome;
    this.#cupom = new cupomDesconto();
  }
  getBeneficios() {
    this.#cupom.getDesconto(this.#gastosAcumulados);
  }
  setGastos(gastos) {
    this.#gastosAcumulados += gastos;
  }
  getInfo() {
    console.log(`Nome: ${this.#nome}, Gastos: R$${this.#gastosAcumulados}`);
  }
}

const cliente1 = new Cliente('João');
cliente1.setGastos(500);
cliente1.getBeneficios();
cliente1.setGastos(1000);
cliente1.getBeneficios();
cliente1.getInfo();
