const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ""; 
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = "";
let correctAnswers = "";
let candidateAnswers = "";
let point1 = 0;
let candidateAnswer2 = "";
let question2 = "True or false: 5000 meters = 5 kilometers. ";
let correctAnswer2 = "True";
let point2 = 0;
let candidateAnswer3 = "";
let question3 = "(5 + 3)/2 * 10 = ? ";
let correctAnswer3 = "40";
let point3 = 0;
let candidateAnswer4 = "";
let question4 = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ";
let correctAnswer4 = "Trajectory";
let point4 = 0;
let candidateAnswer5 = "";
let question5 = "What is the minimum crew size for the ISS? ";
let correctAnswer5 = "3";
let point5 = 0;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 
}

function gradeQuiz(candidateAnswers) {
  console.log("Hello, " + candidateName)
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let candidateAnswer = input.question(question);

  if (candidateAnswer.toUpperCase() === correctAnswer.toUpperCase()) {
    console.log("Correct!");
    point1 = 1;
  } else {
    console.log("Incorrect...");
  }

  let candidateAnswer2 = input.question(question2);

  if (candidateAnswer2.toUpperCase() === correctAnswer2.toUpperCase()) {
    console.log("Correct!");
    point2 = 1;
  } else {
    console.log("Incorrect...");
  }

  let candidateAnswer3 = input.question(question3);

if (candidateAnswer3.toUpperCase() === correctAnswer3.toUpperCase()) {
    console.log("Correct!");
    point3 = 1;
  } else {
    console.log("Incorrect...");
  }

  let candidateAnswer4 = input.question(question4);

  if (candidateAnswer4.toUpperCase() === correctAnswer4.toUpperCase()) {
    console.log("Correct!");
    point4 = 1;
  } else {
    console.log("Incorrect...");
  }

  let candidateAnswer5 = input.question(question5);

  if (candidateAnswer5.toUpperCase() === correctAnswer5.toUpperCase()) {
    console.log("Correct!");
    point5 = 1;
  } else {
    console.log("Incorrect...");
  }

  console.log("Candidate Name: " + candidateName)
  console.log("1) " + question)
  console.log("Your answer: " + candidateAnswer)
  console.log("Correct answer: " + correctAnswer)
  console.log("")
  console.log("2) " + question2)
  console.log("Your answer: " + candidateAnswer2)
  console.log("Correct answer: " + correctAnswer2)
  console.log("")
  console.log("3) " + question3)
  console.log("Your answer: " + candidateAnswer3)
  console.log("Correct answer: " + correctAnswer3)
  console.log("")
  console.log("4) " + question4)
  console.log("Your answer: " + candidateAnswer4)
  console.log("Correct answer: " + correctAnswer4)
  console.log("")
  console.log("5) " + question5)
  console.log("Your answer: " + candidateAnswer5)
  console.log("Correct answer: " + correctAnswer5)
  console.log("")



  let grade;
  grade = point1 + point2 + point3 + point4 + point5
  console.log(grade.toString() + " out of 5 points!")
  let gradePercent = (grade / 5 * 100)
  console.log("Your score: " + gradePercent.toString() + "%")
  if (grade >= 4) {
    console.log("Congratulations, " + candidateName +  ", you passed!")
  } else {
    console.log("Sorry, " + candidateName + ", you didn't pass... Try again!")
  }

  return grade;
  
}   

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
