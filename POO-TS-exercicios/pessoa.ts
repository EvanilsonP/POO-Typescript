class Animal {
    nome: string;
    idade: number;
    cor: string;

    constructor(nome: string, idade: number, cor: string) {
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
    } 

    public comunicar() {
        console.log("Olá! Eu acho que sou um animal!")
    }
}

class Pessoa extends Animal {
    altura: number;
    nascimento: number | string;

    constructor(nome: string, idade: number, cor: string, altura: number, nascimento: number | string) {
        super(nome, idade, cor);
        this.altura = altura;
        this.nascimento = nascimento;
    }

    public saludo() {
        console.log("Mas na realidade eu sou um ser humano!");
    }
}

let Person = new Pessoa('Evanilson', 23, 'branco', 1.82, '01/05/1999');
console.log(Person);
Person.comunicar();
Person.saludo();