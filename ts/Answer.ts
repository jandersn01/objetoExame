export class Answer{
    private _nome_aluno?: string;
    private _respostas: string[];

    constructor(respostas: string[],nome?: string){
        this._respostas = respostas;
        this._nome_aluno = nome
    }

    get respostas(): String[]{
        return this._respostas
    }

    get nome(): string|undefined {
        return this._nome_aluno
    }

    set respostas(respostas: string[]){
        this._respostas = respostas;
    }

    set nome(nome:string){
        this._nome_aluno = nome;
    }
}