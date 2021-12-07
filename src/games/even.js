import { question } from 'readline-sync';
import randomInt from '../heplers.js';

export const TASK_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkAnswer = (number) => (number % 2 ? 'no' : 'yes');

export const task = () => {
  const int = randomInt(100);
  const userAnswer = question(`Question: ${int}\n`);
  const result = checkAnswer(int);
  return [userAnswer, result];
};
