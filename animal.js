"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Curso POO Typescript Aula 02 - Herança e Polimorfismo
class Animal {
    constructor(tipo, nome, idade) {
        this.tipo = tipo;
        this.nome = nome;
        this.idade = idade;
    }
    comunicar() {
        console.log("Sou um método da classe mãe");
    }
}
exports.default = Animal;
class Cachorro extends Animal {
    constructor(tipo, nome, idade, raca) {
        super(tipo, nome, idade);
        this.raça = raca;
    }
    latir() {
        super.comunicar();
    }
}
class Gente extends Animal {
    constructor(tipo, nome, idade, cor) {
        super(tipo, nome, idade);
        this.cor = cor;
    }
    comunicar() {
        console.log("Olá sou da classe filha, Classe Gente");
    }
}
let c1 = new Cachorro('cachorro', 'marley', 2, 'poodle');
c1.latir();
let g1 = new Gente('Humano', 'Manoel', 25, 'Negro');
// g1.comunicar();
