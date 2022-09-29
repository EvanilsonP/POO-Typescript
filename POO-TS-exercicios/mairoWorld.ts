abstract class Personagem {
    nome: string;
    mascote: string;

    constructor(nome: string, mascote: string) {
        this.nome = nome;
        this.mascote = mascote;
    }

    public salvar() {
        console.log("Estou indo salvar a princesa!");
    }

    public socorro() {
        console.log("Sou a princesa e preciso de ajuda!");
    }
}

class Mario extends Personagem {
    vidasRestante: number;

    constructor(nome: string, mascote: string, vidasRestantes: number) {
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