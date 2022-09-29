// criando um objeto time

class Time {
    nome: string;
    estado: string;
    cores: string;
    torcida: number | string;
    divisao: number | string;

    constructor(nome: string, estado: string, cores: string, torcida: number | string, divisao: number | string) {
        this.nome = nome;
        this.estado = estado;
        this.cores = cores;
        this.torcida = torcida;
        this.divisao = divisao;
    }
}

let Fortaleza = new Time('Fortaleza EC', 'Ceará', 'Azul, vermelho e branco', '2 milhões de torcedores', '1° Divisão');
console.log(Fortaleza);