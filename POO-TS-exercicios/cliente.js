"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class client {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    comprimentar() {
        console.log("Bom dia!");
    }
}
let cliente = new client('Evanilson', 23);
console.log(cliente);
