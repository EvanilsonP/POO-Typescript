"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Curso POO Typescript Aula 05 - Relacionamentos (Composição) e Projeto Final
class Carro {
    constructor(m, a, v) {
        this.modelo = m;
        this.ano = a;
        this.valor = v;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getAno() {
        return this.ano;
    }
    setAno(ano) {
        this.ano = ano;
    }
    getValor() {
        return this.valor;
    }
    setValor(valor) {
        this.valor = valor;
    }
}
exports.default = Carro;
