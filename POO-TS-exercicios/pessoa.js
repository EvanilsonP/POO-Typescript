"use strict";
class Animal {
    constructor(nome, idade, cor) {
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
    }
    comunicar() {
        console.log("Olá! Eu acho que sou um animal!");
    }
}
class Pessoa extends Animal {
    constructor(nome, idade, cor, altura, nascimento) {
        super(nome, idade, cor);
        this.altura = altura;
        this.nascimento = nascimento;
    }
    saludo() {
        console.log("Mas na realidade eu sou um ser humano!");
    }
}
let Person = new Pessoa('Evanilson', 23, 'branco', 1.82, '01/05/1999');
console.log(Person);
Person.comunicar();
Person.saludo();
