"use strict";
class Personagem {
    constructor(nome, mascote) {
        this.nome = nome;
        this.mascote = mascote;
    }
    salvar() {
        console.log("Estou indo salvar a princesa!");
    }
    socorro() {
        console.log("Sou a princesa e preciso de ajuda!");
    }
}
class Mario extends Personagem {
    constructor(nome, mascote, vidasRestantes) {
        super(nome, mascote);
        this.vidasRestante = vidasRestantes;
    }
}
let princesa = new Mario('Peach Toadstool', 'Nenhum', 1);
let Luigi = new Mario('Luigi', 'Yoshi', 15);
console.log(princesa);
princesa.socorro();
console.log(Luigi);
Luigi.salvar();
