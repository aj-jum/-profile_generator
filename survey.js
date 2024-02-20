const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array to hold the questions
const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];


function askQuestion(index) {
  if (index >= questions.length) {
    rl.close();
    return;
  }

  rl.question(questions[index] + ' ', (answer) => {
    console.log(`Thank you for your answer: ${answer}`);
    askQuestion(index + 1); // Ask the next question
  });
}

// Start asking the questions
askQuestion(0);
