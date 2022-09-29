class Pais {
    nome: string;
    capital: string;
    continente: string;

    constructor(nome: string, capital: string, continente: string) {
        this.nome = nome;
        this.capital = capital;
        this.continente = continente;
    }

    public getNome() {
        return this.nome;
    }

    public setNome(nome: string) {
        this.nome = nome;
    }

    public getInfo() {
        console.log(`${this.nome}, ${this.capital}, ${this.continente}`);
    }
}

let Brasil = new Pais('Brasil', 'Brasilia', 'Continente Americano');
Brasil.getInfo();


