'use strict';

import { cupomDesconto } from './Class/cupomDesconto.js';

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
