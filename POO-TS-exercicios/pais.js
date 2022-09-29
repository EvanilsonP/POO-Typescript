"use strict";
class Pais {
    constructor(nome, capital, continente) {
        this.nome = nome;
        this.capital = capital;
        this.continente = continente;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getInfo() {
        console.log(`${this.nome}, ${this.capital}, ${this.continente}`);
    }
}
let Brasil = new Pais('Brasil', 'Brasilia', 'Continente Americano');
Brasil.getInfo();
