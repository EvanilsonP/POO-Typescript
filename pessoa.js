"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
exports.default = Pessoa;
let p1 = new Pessoa('Evanilson', 23);
console.log(`Nome: ${p1.nome} e idade: ${p1.idade}`); // CLASSE E OBJETO
