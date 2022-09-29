"use strict";
// criando um objeto time
class Time {
    constructor(nome, estado, cores, torcida, divisao) {
        this.nome = nome;
        this.estado = estado;
        this.cores = cores;
        this.torcida = torcida;
        this.divisao = divisao;
    }
}
let Fortaleza = new Time('Fortaleza EC', 'Ceará', 'Azul, vermelho e branco', '2 milhões de torcedores', '1° Divisão');
console.log(Fortaleza);
