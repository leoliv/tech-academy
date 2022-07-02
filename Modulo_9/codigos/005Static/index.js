'use strict';

class Musica {
  static formato = 'MP3'; // vai ter um valor constante
  static valor1 = 20;
  static valor2 = 30;
  static valor3 = 10;
  #titulo;
  #duracao;
  #artista;
  #valor;
  constructor(titulo, artista, duracao, valor) {
    this.#titulo = titulo;
    this.#artista = artista;
    this.#duracao = duracao;
    this.#valor = valor;
  }
  getDados() {
    return `${this.#titulo} - ${this.#artista} - ${this.#duracao} - ${
      this.#valor
    }`;
  }
}

const m1 = new Musica('Bem Vindo', 'Joao', '3:00', Musica.valor1);
// console.log(m1.formato); // atributo static! Não pode ser acessado diretamente
// console.log(m1.artista); // atributo privado
// console.log(Musica.formato); // atributo static! Pode ser acessado diretamente atravez da classe
console.log(m1.getDados());
