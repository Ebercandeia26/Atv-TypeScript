import Empregado from "./Empregado";

export default class Comissionado extends Empregado{
    private totalVenda : number;
    private taxaComissao : number;

    constructor(nome: string, sobrenome: string, cpf: string, totalVenda : number, taxaComissao: number){
        super(nome, sobrenome,cpf);
        this.totalVenda = totalVenda;
        this.taxaComissao = taxaComissao;
    }

    getTotalVenda(){
        return this.totalVenda;
    }

    setTotalVenda(totalVenda){
        this.totalVenda = totalVenda;
    }

    getTaxaComissao(){
        return this.taxaComissao;
    }

    setTaxaComissao(taxaComissao){
        this.taxaComissao = taxaComissao;
    }

    public vencimento(number:number){
        return number;
    }
}