'use strict';

export class Parcela {
  #numero;
  #valor;
  #juros;
  #amortizacao;
  #saldo;
  constructor(numero, valor, juros, amortizacao, saldo) {
    this.#numero = numero;
    this.#valor = valor;
    this.#juros = juros;
    this.#amortizacao = amortizacao;
    this.#saldo = saldo;
  }
  get saldo() {
    return this.#saldo;
  }

  get dadosFormatados() {
    const dados = [];
    dados.push(this.#numero);
    dados.push(
      this.#valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }),
    );
    dados.push(
      this.#amortizacao.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }),
    );
    dados.push(
      this.#juros.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }),
    );
    dados.push(
      this.#saldo.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }),
    );
    return dados;
  }
}
