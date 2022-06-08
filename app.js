let userInputs = [
  "computer pioneer",
  "found herself working on a",
  'word got out that the team had "debugged the"  ',
];
let questionArray = [];
let questionCounter = 0;

for (let i = 0; i < 5; i++) {
  questionCounter += 1;
  questionArray.push(prompt("Enter A verb"));
  questionArray.push(prompt("Enter A noun"));
}

console.log(questionArray);
console.log(questionCounter);
