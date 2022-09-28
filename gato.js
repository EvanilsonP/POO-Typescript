"use strict";
// Curso POO Typescript Aula 04 - Classes Abstratas e Interfaces - Para Iniciantes
// abstração é pegar somente o necessário
class Gato {
    constructor(nome, cor) {
        this.nome = nome;
        this.cor = cor;
    }
    miar() {
        console.log('Miei!');
    }
}
class Tom extends Gato {
    constructor(nome, cor, idade) {
        super(nome, cor);
        this.idade = idade;
    }
}
let gato = new Tom('Tom', 'cinza', 3);
gato.miar();
console.log(gato);
