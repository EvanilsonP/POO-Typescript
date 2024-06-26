// Curso POO Typescript Aula 05 - Relacionamentos (Composição) e Projeto Final
export default class Carro {
    modelo: string;
    ano: number;
    valor: number;

    constructor(m: string, a: number, v: number) {
        this.modelo = m;
        this.ano = a;
        this.valor = v;
    }

    public getModelo() {
        return this.modelo;
    }

    public setModelo(modelo: string) {
        this.modelo = modelo;
    }

    public getAno() {
        return this.ano;
    }

    public setAno(ano: number) {
        this.ano = ano;
    }

    public getValor() {
        return this.valor;
    }

    public setValor(valor: number) {
        this.valor = valor;
    }
}