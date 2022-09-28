import Carro from "./carro";
import Cliente from "./cliente";
import Funcionario from "./funcionario";

export default class CompraCarro {
    cliente: Cliente;
    funcionario: Funcionario;
    carro: Carro;
    precoFinal: number;
    valorComDesconto: number;

    constructor(cliente: Cliente, funcionario: Funcionario, carro: Carro) {
        this.cliente = cliente;
        this.funcionario = funcionario;
        this.carro = carro;
        this.carro.setValor(this.darDesconto(this.carro.getValor()));
        this.precoFinal = this.carro.getValor();
        this.funcionario.setComissao(this.addComissao(this.precoFinal));
        this.valorComDesconto = 0;
    } 

    private darDesconto(preco: number): number {
        if(this.carro.getAno() < 2000) { 
            this.valorComDesconto = this.carro.getValor() * 0.90;           // Calcular o desconto e aplicar no valor total
            this.carro.setValor(this.valorComDesconto);

        } else {
            this.carro.setValor(preco);
        }

        if(this.cliente.getRenda() < 5000) {
            this.valorComDesconto = this.carro.getValor() * 0.90;
            return this.carro.setValor(this.valorComDesconto);

        } else {
            return this.carro.setValor(this.carro.getValor());
        }
    }

    public addComissao(valor: number): number {
        return this.funcionario.setComissao(valor * 0.02);
    }

    public detalharCompra() {
        console.log(`Nome: ${this.cliente.getNome()} \nCarro: ${this.carro.getModelo()}, Ano: ${this.carro.getAno()}, Valor: ${this.carro.getValor()}\n${this.funcionario.getNome()}, Comissão R$: ${this.funcionario.getComissao()}`);
    }
}