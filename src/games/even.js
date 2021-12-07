import { question } from 'readline-sync';
import randomInt from '../heplers.js';
import run from '../index.js';

const TASK_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkAnswer = (number) => (number % 2 ? 'no' : 'yes');

const task = () => {
  const int = randomInt(10, 100);
  const userAnswer = question(`Question: ${int}\n`);
  const result = checkAnswer(int);
  return [userAnswer, result];
};

export default () => run(task, TASK_DESCRIPTION)
