export default interface IPessoa {
    nome: string;
    idade: number;
    comprimentar(): void;
}

class client implements IPessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    comprimentar() {
        console.log("Bom dia!")
    }
}

let cliente = new client('Evanilson', 23);
console.log(cliente);