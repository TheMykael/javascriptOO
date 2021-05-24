import { Cliente } from "./../Cliente.js";

export class Conta {

    constructor(numero, agencia, cliente) {
        if (this.constructor == Conta) {
            throw new ReferenceError("Você não pode instanciar um objeto do tipo "
            + "Conta pois esta é uma classe abstrata.");
        }
        this._numero = numero;
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = 0;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    depositar(valor) {
        if (valor <= 100) {
            return;
        }
        this._saldo += valor;
    }

    sacar(valor) {
        throw new ReferenceError(`O método "sacar()" da classe Conta é abstrato.`);
    }

    _sacar(valor, taxa) {
        const valorDeSaque = taxa * valor;
        if (this._saldo >= valorDeSaque) {
            this._saldo -= valorDeSaque;
            return valorDeSaque;
        }
        return 0;
    }

    transferir(valor, conta) {
        if (valor <= 0) {
            return;
        }
        const valorDeSaque = this.sacar(valor);
        conta.depositar(valorDeSaque);
    }
}