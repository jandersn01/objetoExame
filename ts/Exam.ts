import { Answer } from "./Answer.js";
import { Weight } from "./Weight.js";

export class Exam{
  private disciplina: string; //nome da disciplina, se exam é o exame de UMA DISCIPLINA
  private weight: Weight; // O Peso
  private answer: Answer; // A resposta oficial
  private _answers: Answer[] // Um array de objetos do tipo Answer, cada objeto vai corresponder a uma prova de um aluno contendo nome e resposta do aluno
  
  constructor(disciplina: string, weight: Weight,answer: Answer){
    this.weight = weight 
    this.answer = answer 
    this.disciplina = disciplina 
    this._answers = []
  }

  add (exam: Answer): void{
    this._answers.push(exam)
  }

  avg():number{
    let contador: number = 0
    this._answers.forEach(element =>{
      contador += this.pontuacao(element)
    }
    )
    return contador/this._answers.length
  }

  pontuacao(resposta: Answer): number{
    let pontuacao: number = 0;
    for(let i = 0; i < this.answer.respostas.length; i++){
      if(resposta.respostas[i] === this.answer.respostas[i] ){
        pontuacao += 1 * this.weight.pesos[i]
      }
    }
    return pontuacao;
  }

 max(count: number): number[]{
  const notas: number[]= this._answers?.map(element => this.pontuacao(element))

  notas.sort((a,b) => a-b)

  return notas.slice(-count)
 }

 min(count: number): number[]{
  const notas: number[]= this._answers?.map(element => this.pontuacao(element))

  notas.sort((a,b) => a-b)

  return notas.slice(0,count)

 }

 lt(limit:number): number[] {
  let grades = this._answers.map((answer) => this.pontuacao(answer));

  grades.sort().reverse();

  return grades.filter((grade) => grade < limit);
}

gt(limit: number): number[]{
  let grades = this._answers.map((answer) => this.pontuacao(answer));

  grades.sort().reverse();

  return grades.filter((grade) => grade > limit);
}


}

