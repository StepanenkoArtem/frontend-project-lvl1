import { question } from 'readline-sync';

const MIN_CORRECT_ANSWERS = 3;

const isUserAnswerRight = (userAnswer, rightAnswer) => userAnswer === rightAnswer;

export default (game, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const userName = question('May I have your name?\n');
  console.log(`Hello, ${userName}`);
  console.log(gameDescription);

  for (let attempts = 1; attempts <= MIN_CORRECT_ANSWERS; attempts += 1) {
    const [task, rightAnswer] = game();
    const userAnswer = question(`Question: ${task}\n`);
    if (isUserAnswerRight(userAnswer, rightAnswer)) {
      console.log('Correct');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
