import { question } from 'readline-sync';
import randomInt from '../heplers.js';
import run from '../index.js';

const TASK_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const task = () => {
  const int = randomInt(50, 250);
  const userAnswer = question(`Question: ${int}\n`);
  const result = isPrime(int);
  return [userAnswer, result];
};

export default () => run(task, TASK_DESCRIPTION);
