'use strict';

// create a class named 'Laboratorio' with atributes: '#nome', '#capacidade' and methos getters and setters
class Laboratorio {
  #nome;
  #capacidade;
  constructor(nome, capacidade) {
    this.#nome = nome;
    this.#capacidade = capacidade;
  }
  get nome() {
    return this.#nome;
  }
  set nome(nome) {
    this.#nome = nome;
  }
  get capacidade() {
    return this.#capacidade;
  }
  set capacidade(capacidade) {
    this.#capacidade = capacidade;
  }
}

const lab = new Laboratorio('Laboratorio 1', 100);
console.log(lab.nome);
console.log(lab.capacidade);
lab.nome = 'Laboratorio 2';
console.log(lab.nome);
lab.capacidade = 200;
console.log(lab.capacidade);
