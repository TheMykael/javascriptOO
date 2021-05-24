import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {

    constructor(numero, agencia, cliente, saldoInicial) {
        super(numero, agencia, cliente, saldoInicial);
    }

    sacar(valor) {
        const taxa = 1.02;
        this._sacar(valor, taxa);
    }
}