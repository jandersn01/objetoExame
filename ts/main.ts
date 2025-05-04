import { Answer } from "./Answer.js";
import { Exam } from "./Exam.js";
import { Weight } from "./Weight.js";

const p = new Weight([2,2,2,2,2]);
const gabarito = new Answer(["a","b","c","d","e"])
const provadematematica = new Exam("Matematica", p, gabarito)

const prova1 = new Answer(["a","b","c","d","e"], "Elaine")
const prova2 = new Answer(["a","c","c","d","e"], "Renato")
const prova3 = new Answer(["a","d","a","d","e"], "Francisco")


console.log(provadematematica.pontuacao(prova1))
console.log(provadematematica.pontuacao(prova2))
console.log(provadematematica.pontuacao(prova3))

console.log(provadematematica.answers)