import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static _numeroDeContas = 0;

    constructor(numero, agencia, cliente) {
        super(numero, agencia, cliente);
        ContaCorrente._numeroDeContas += 1;
    }

    //Sobrescrevendo o comportamento de sacar
    sacar(valor) {
        const taxa = 1.10;
        return this._sacar(valor, taxa);
    }
}