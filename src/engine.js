import greeting from './cli.js';

const MIN_CORRECT_ANSWERS = 3;

export default (task, taskDescription) => {
  const userName = greeting();
  console.log(taskDescription);
  for (let attempts = 1; attempts <= MIN_CORRECT_ANSWERS; attempts += 1) {
    if (task()) {
      console.log('Correct');
    } else {
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
