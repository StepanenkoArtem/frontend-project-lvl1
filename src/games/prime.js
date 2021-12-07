import { question } from 'readline-sync';
import randomInt from '../heplers.js';

export const TASK_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export const task = () => {
  const int = randomInt(200);
  const userAnswer = question(`Question: ${int}\n`);
  const result = isPrime(int);
  return [userAnswer, result];
};
