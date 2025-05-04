export class Exam {
    constructor(disciplina, weight, answer) {
        this.weight = weight;
        this.answer = answer;
        this.disciplina = disciplina;
    }
    pontuacao(resposta) {
        var _a;
        let pontuacao = 0;
        for (let i = 0; i < 5; i++) {
            if (resposta.respostas[i] === this.answer.respostas[i])
                pontuacao += this.weight.pesos[i];
        }
        (_a = this._answers) === null || _a === void 0 ? void 0 : _a.push(resposta);
        return `${resposta.nome} you score is ${pontuacao}`;
    }
    get answers() {
        var _a;
        let saida = "++";
        (_a = this._answers) === null || _a === void 0 ? void 0 : _a.map(aluno => saida += `${aluno.nome} respostas ${aluno.respostas}`);
        return saida;
    }
}
