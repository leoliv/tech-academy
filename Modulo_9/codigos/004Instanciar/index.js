'use strict';

class Produto {
  codigo;
  title;
  constructor(codigo, title) {
    this.codigo = codigo;
    this.title = title;
  }
}

class Disciplina {
  codigo;
  nome;
  constructor(codigo, nome) {
    this.codigo = codigo || 0;
    this.nome = nome || 'Fulano';
  }
}

// const d1 = new Disciplina(1, 'Matematica');
// const p1 = new Produto(1, 'Notebook');

// // print d1 and p1 in the same line
// console.log(d1, p1);
// console.log(p1.nome);
// const d2 = new Disciplina(2, 'Portugues');
// const p2 = new Produto(2, 'Mouse');

// // print d2 and p2 in the same line
// console.log(d2, p2);

// alterando d1 altera também o d2
const d1 = new Disciplina(1, 'Matematica');
const d2 = d1;
d2.nome = 'Portugues';
console.log(d1);
