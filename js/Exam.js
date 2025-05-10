export class Exam {
    constructor(disciplina, weight, answer) {
        this.weight = weight;
        this.answer = answer;
        this.disciplina = disciplina;
        this._answers = [];
    }
    add(exam) {
        this._answers.push(exam);
    }
    avg() {
        let contador = 0;
        this._answers.forEach(element => {
            contador += this.pontuacao(element);
        });
        return contador / this._answers.length;
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
        notas.sort((a, b) => a - b);
        return notas.slice(-count);
    }
    min(count) {
        var _a;
        const notas = (_a = this._answers) === null || _a === void 0 ? void 0 : _a.map(element => this.pontuacao(element));
        notas.sort((a, b) => a - b);
        return notas.slice(0, count);
    }
    lt(limit) {
        let grades = this._answers.map((answer) => this.pontuacao(answer));
        grades.sort().reverse();
        return grades.filter((grade) => grade < limit);
    }
    gt(limit) {
        let grades = this._answers.map((answer) => this.pontuacao(answer));
        grades.sort().reverse();
        return grades.filter((grade) => grade > limit);
    }
}
