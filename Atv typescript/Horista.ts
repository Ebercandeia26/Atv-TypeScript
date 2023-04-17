import Empregado from "./Empregado";

export default class Horista extends Empregado{
   private precoHora : number;
   private horasTrabalhadas : number;



   constructor(nome: string, sobrenome: string, cpf: string, precoHora: number, horasTrabalhadas : number){
       super(nome,sobrenome, cpf)
       this.precoHora = precoHora;
       this.horasTrabalhadas = horasTrabalhadas;
   }

   getPrecoHora(){
    return this.precoHora;
   }

   setPrecoHora(precoHora){
    this.precoHora = precoHora;
   }

   getHorasTrabalhadas(){
    return this.horasTrabalhadas;
   }

   setHorasTrabalhadas(horasTrabalhadas){
    this.horasTrabalhadas = horasTrabalhadas;
   }

   public vencimento(number:number){
        return number;
   }
}