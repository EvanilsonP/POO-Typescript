// Curso POO Typescript Aula 04 - Classes Abstratas e Interfaces - Para Iniciantes
// abstração é pegar somente o necessário
abstract class Gato {
    nome: string;
    cor: string;

    constructor(nome: string, cor: string) {
        this.nome = nome;
        this.cor = cor;
    }

    miar() {
        console.log('Miei!')
    }
}

class Tom extends Gato {
    idade: number;

    constructor(nome: string, cor: string, idade: number) {
        super(nome, cor)
        this.idade = idade;
    }
}

let gato = new Tom('Tom', 'cinza', 3);
gato.miar();
console.log(gato);