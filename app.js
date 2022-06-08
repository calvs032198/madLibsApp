let userInputs = [
  "computer pioneer",
  "found herself working on a",
  'word got out that the team had "debugged the"  ',
];
let questionArray = [];
let questionTotal = 5;
let questionCounter = 0;
let questions = [];
for (let i = 0; i < questionTotal; i++) {
  questionCounter += 1;
  questionArray.push(prompt("Enter A verb"));
  questions.push(prompt("Enter A noun"));
}

console.log(questionArray);
console.log(questionCounter);
console.log(questionArray[questionCounter] + `(${questions} questions left)`);
