export class Answer {
    constructor(respostas, nome) {
        this._respostas = respostas;
        this._nome_aluno = nome;
    }
    get respostas() {
        return this._respostas;
    }
    get nome() {
        return this._nome_aluno;
    }
    set respostas(respostas) {
        this._respostas = respostas;
    }
    set nome(nome) {
        this._nome_aluno = nome;
    }
}
