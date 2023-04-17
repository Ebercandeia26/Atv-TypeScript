export default class Empregado{
    
    private nome : string;
    private sobrenome: string;
    private cpf : string;
    
    constructor(nome: string, sobrenome : string, cpf: string){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
    }

    getNome(){
        return this.nome;
    }

    setNome(nome){
        this.nome = nome;
    }

    getSobrenome(){
        return this.sobrenome;
    }

    setSobrenome(sobrenome){
        this.sobrenome = sobrenome;
    }

    getCpf(){
        return this.cpf;
    }

    setCpf(cpf){
        this.cpf = cpf;
    }

    public vencimento(number:number){
        return number;
   }
}