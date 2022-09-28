// Curso POO Typescript Aula 03 - Encapsulamento
class Carro {
   private cor: string;
   private ano: number;
   private valor: number;

    constructor(cor: string, ano: number, valor: number) {
        this.cor = cor;
        this.ano = ano;
        this.valor = valor;
    }
    // getter => Para obter o valor do atributo
    public getValor() {
        return this.valor
    }

    public setValor(valor: number) {
        this.valor = valor;
    }
    // Setter => Para poder alterar o valor de um atributo
    protected getInfo() {
        console.log(`${this.cor}, ${this.ano}, ${this.getValor()}`);
    }

    public getLog() {
        console.log("As informações privadas agora estão acessíveis. Veja abaixo.")
        this.getInfo();
    }
}

let carro = new Carro('preto', 2020, 20000);
carro.getLog();