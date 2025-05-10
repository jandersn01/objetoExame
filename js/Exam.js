export class Exam {
    constructor(disciplina, weight, answer) {
        this.weight = weight;
        this.answer = answer;
        this.disciplina = disciplina;
    }
    add(exam) {
        var _a;
        (_a = this._answers) === null || _a === void 0 ? void 0 : _a.push(exam);
    }
    avg() {
        var _a;
        let contador = 0;
        let n = 0;
        (_a = this._answers) === null || _a === void 0 ? void 0 : _a.forEach(element => {
            contador += this.pontuacao(element);
            n += 1;
        });
        return contador / n;
    }
    pontuacao(resposta) {
        let pontuacao = 0;
        for (let i = 0; i < this.answer.respostas.length; i++) {
            if (resposta.respostas[i] === this.answer.respostas[i]) {
                pontuacao += 1 * this.weight.pesos[i];
            }
        }
        return pontuacao;
    }
    max(count) {
        var _a;
        const notas = (_a = this._answers) === null || _a === void 0 ? void 0 : _a.map(element => this.pontuacao(element));
        notas === null || notas === void 0 ? void 0 : notas.sort((a, b) => a - b);
        return notas === null || notas === void 0 ? void 0 : notas.slice(-count);
    }
    min(count) {
        var _a;
        const notas = (_a = this._answers) === null || _a === void 0 ? void 0 : _a.map(element => this.pontuacao(element));
        notas === null || notas === void 0 ? void 0 : notas.sort((a, b) => a - b);
        return notas === null || notas === void 0 ? void 0 : notas.slice(0, count);
    }
    lt(limit) {
        var _a;
        let grades = (_a = this._answers) === null || _a === void 0 ? void 0 : _a.map((answer) => this.pontuacao(answer));
        grades === null || grades === void 0 ? void 0 : grades.sort().reverse();
        return grades === null || grades === void 0 ? void 0 : grades.filter((grade) => grade < limit);
    }
    gt(limit) {
        var _a;
        let grades = (_a = this._answers) === null || _a === void 0 ? void 0 : _a.map((answer) => this.pontuacao(answer));
        grades === null || grades === void 0 ? void 0 : grades.sort().reverse();
        return grades === null || grades === void 0 ? void 0 : grades.filter((grade) => grade > limit);
    }
}
