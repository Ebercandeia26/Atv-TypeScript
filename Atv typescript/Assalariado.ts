import Empregado from "./Empregado";

export default class Assalariado extends Empregado{
    private salario : number;

    constructor(nome: string, sobrenome: string, cpf: string, salario: number){
        super(nome, sobrenome, cpf);
        this.salario = salario;
    }

    getSalario(){
        return this.salario;
    }

    setSalario(salario){
        this.salario = salario;
    }

    public vencimento(number:number){
        return number;
    }
}