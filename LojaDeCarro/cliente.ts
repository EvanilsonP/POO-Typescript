export default class Cliente {
    nome: string;
    renda: number;

    constructor(nome: string, renda: number) {
        this.nome = nome;
        this.renda = renda;
    }

    public getNome() {
        return this.nome;
    }

    public setNome(nome: string) {
        this.nome = nome;
    }

    public getRenda(): number {
        return this.renda;
    }

    public setRenda(renda: number): number {
        return this.renda = renda;
    }
} 