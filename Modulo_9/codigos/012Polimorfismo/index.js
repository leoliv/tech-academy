'use strict';

class Produto {
  #tipo;
  constructor(tipo) {
    this.#tipo = tipo;
  }
  getDados() {
    return this.#tipo;
  }
}

class Livro extends Produto {
  #titulo;
  #numPag;
  constructor(tipo, titulo, numPag) {
    super(tipo);
    this.#titulo = titulo;
    this.#numPag = numPag;
  }
  getDados() {
    return `Tipo: ${super.getDados()} 
    Titulo: ${this.#titulo} 
    Numero de Paginas: ${this.#numPag}`; // O super é usado para acessar o metodo getDados da classe pai e não da classe filha. Caso usasse o this ele chamaria o metodo dessa classe. Chamado de Polimorfismo
  }
}

const livro = new Livro('Livro', 'JavaScript', 300);
console.log(livro.getDados());
