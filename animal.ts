import Pessoa from "./pessoa";

// Curso POO Typescript Aula 02 - Herança e Polimorfismo
export default class Animal {
    private tipo: string;
    private nome: string;
    private idade: number;

    constructor(tipo: string, nome: string, idade: number ) {
        this.tipo = tipo;
        this.nome = nome;
        this.idade = idade;
    }

    protected comunicar(): void { // Criando metodo que não retorna nada
        console.log("Sou um método da classe mãe");
    }
}

class Cachorro extends Animal {
    raça: string;

    constructor(tipo: string, nome: string, idade: number, raca: string) {
        super(tipo, nome, idade) 
            this.raça = raca;
    }

    public latir() {
        super.comunicar();
    }

    // public comunicar() {
    //     console.log("Olá sou da classe filha, Classe cachorro")
    // }
}

class Gente extends Animal {
    cor: string;

    constructor(tipo: string, nome: string, idade: number, cor: string) {
        super(tipo, nome, idade)
        this.cor = cor;
    }

    public comunicar() {
         console.log("Olá sou da classe filha, Classe Gente")
     }
}

let c1 = new Cachorro('cachorro', 'marley', 2, 'poodle');
c1.latir();

let g1 = new Gente('Humano', 'Manoel', 25, 'Negro');
// g1.comunicar();