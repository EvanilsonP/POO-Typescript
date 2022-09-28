"use strict";
// Curso POO Typescript Aula 03 - Encapsulamento
class Carro {
    constructor(cor, ano, valor) {
        this.cor = cor;
        this.ano = ano;
        this.valor = valor;
    }
    // getter => Para obter o valor do atributo
    getValor() {
        return this.valor;
    }
    setValor(valor) {
        this.valor = valor;
    }
    // Setter => Para poder alterar o valor de um atributo
    getInfo() {
        console.log(`${this.cor}, ${this.ano}, ${this.getValor()}`);
    }
    getLog() {
        console.log("As informações privadas agora estão acessíveis. Veja abaixo.");
        this.getInfo();
    }
}
let carro = new Carro('preto', 2020, 20000);
carro.getLog();
