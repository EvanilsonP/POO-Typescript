export default interface Rato {
    nome: string;
    idade?: number | string;
    fugir(): void;
} 

class Jerry implements Rato { // Vai implementar algo que já está em Rato
    nome: string;
    idade: number | string;

    constructor(nome: string, idade: number | string) {
        this.nome = nome;
        this.idade = idade;
    }

    fugir() {
        console.log('Estou fugindo! hihihi ')
    }
}

let rato = new Jerry('Jerry', 'Jerry tem dois anos de idade');
console.log(rato);

// 04 - Classes Abstratas e Interfaces 