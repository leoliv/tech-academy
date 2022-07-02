'use strict';
class livro {
  #titulo;
  #autor;
  #ano;
  #paginas;
  constructor(titulo, autor, ano, paginas) {
    this.#titulo = titulo;
    this.#autor = autor;
    this.#ano = ano;
    this.#paginas = paginas;
  }

  // create a method to print the book
  print() {
    console.log(
      `${this.#titulo} - ${this.#autor} - ${this.#ano} - ${this.#paginas}`,
    );
  }

  // create getters and setters
  get titulo() {
    return this.#titulo;
  }
  set titulo(value) {
    this.#titulo = value;
  }
  get autor() {
    return this.#autor;
  }
  set autor(value) {
    this.#autor = value;
  }
  get ano() {
    return this.#ano;
  }
  set ano(value) {
    this.#ano = value;
  }
  get paginas() {
    return this.#paginas;
  }
  set paginas(value) {
    this.#paginas = value;
  }
}

const livro1 = new livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954, 423);
const livro2 = new livro('O Hobbit', 'J.R.R. Tolkien', 1937, 320);
livro1.titulo = 'Dracula';
livro1.autor = 'Bram Stoker';
livro1.ano = 1897;
livro1.paginas = 566;
livro1.print();
