export default class Pessoa { // Poder exportar essa classe a uma outra classe que vai instanciar uma classe pessoa ou herdar essa classe
    nome: string;
    idade: number

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

let p1 = new Pessoa('Evanilson', 23);
console.log(`Nome: ${p1.nome} e idade: ${p1.idade}`); // CLASSE E OBJETO

