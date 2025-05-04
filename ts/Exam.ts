import { Answer } from "./Answer.js";
import { Weight } from "./Weight.js";

export class Exam{
  private disciplina: string;
  private weight: Weight;
  private answer: Answer;
  private _answers: Answer[]| undefined
  
  constructor(disciplina: string, weight: Weight,answer: Answer){
    this.weight = weight
    this.answer = answer
    this.disciplina = disciplina
  }

  pontuacao(resposta: Answer): String{
    let pontuacao: number = 0 
    for(let i = 0; i < 5; i++){
      if(resposta.respostas[i] === this.answer.respostas[i])
        pontuacao += this.weight.pesos[i]
    }
    this._answers?.push(resposta)
    return `${resposta.nome} you score is ${pontuacao}`
  }

  get answers(): string{
    let saida: string = "++";
    this._answers?.map(aluno => saida += `${aluno.nome} respostas ${aluno.respostas}`)
    return saida
  }



  

}

