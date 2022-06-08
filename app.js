let userInputs = [
  "computer pioneer",
  "found herself working on a",
  'word got out that the team had "debugged the"  ',
];
let questionArray = ["How are you", "What's your name", "Signup?"];
let questionTotal = questionArray.length;
let numberOfQuestions = questionArray.length;
let questions = [];
for (
  let questionCounter = 0;
  questionCounter < numberOfQuestions;
  questionCounter++
) {
  userInputs.push(
    prompt(
      questionArray[questionCounter] + `... (${questionTotal} questions left)`
    )
  );
  questionTotal--;
  console.log(userInputs);
}
