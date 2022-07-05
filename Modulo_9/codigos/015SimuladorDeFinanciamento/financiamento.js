'use strict';

import { Parcela } from './parcela.js';

export class Financiamento {
  #taxaJuros; // juros mensais
  #prazo; // prazo meses
  #parcelas = []; // parcelas
  constructor(valor, entrada, taxaJuros, prazo) {
    this.#taxaJuros = taxaJuros;
    this.#prazo = prazo;
    // composição - Financiamento possui ou tem parcelas
    this.#parcelas.push(new Parcela(0, 0, 0, 0, valor - entrada));
  }
  static calcJuros(valor, taxaJuros) {
    return valor * (taxaJuros / 100);
  }
  calcParcelasMensais() {
    let saldo = this.#parcelas[this.#parcelas.length - 1].saldo;
    let prazo = this.#prazo - (this.#parcelas.length - 1);
    let amortizacao = saldo / prazo;
    for (let i = 0; i < prazo; i++) {
      const numero = this.#parcelas.length;
      const juros = Financiamento.calcJuros(saldo, this.#taxaJuros);
      const valor = juros + amortizacao;
      saldo -= amortizacao;
      if (saldo < 0) {
        saldo = 0;
      }
      this.#parcelas.push(
        new Parcela(numero, valor, juros, amortizacao, saldo),
      );
    }
  }
  exibeParcelas() {
    const parcelas = this.#parcelas.slice(1);
    for (const parcela of parcelas) {
      const linha = corpoTabela.insertRow(-1);
      for (const dado of parcela.dadosFormatados) {
        const celula = linha.insertCell(-1);
        celula.textContent = dado;
      }
    }
  }

  get parcelas() {
    return this.#parcelas;
  }
}
