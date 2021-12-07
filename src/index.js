import { question } from 'readline-sync';

const MIN_CORRECT_ANSWERS = 3;

export default (task, taskDescription) => {
  console.log('Welcome to the Brain Games!');
  const userName = question('May I have your name?\n');
  console.log(`Hello, ${userName}`);
  console.log(taskDescription);

  for (let attempts = 1; attempts <= MIN_CORRECT_ANSWERS; attempts += 1) {
    const [userAnswer, rightAnswer] = task();
    if (userAnswer === rightAnswer) {
      console.log('Correct');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
