'use strict';

export class cupomDesconto {
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
