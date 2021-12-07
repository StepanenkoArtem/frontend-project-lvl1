import { question } from 'readline-sync';
import randomInt from '../heplers.js';
import run from '../index.js';

const TASK_DESCRIPTION = 'What is the greatest common divisor?';

const calc = (operands) => {
  let [first, second] = operands;
  if (first > second) {
    first -= second;
    return calc([first, second]);
  }
  if (first < second) {
    second -= first;
    return calc([first, second]);
  }
  console.log(first);
  return first;
};

const task = () => {
  const operands = [randomInt(100), randomInt(100)];
  const userAnswer = question(`Question: ${operands[0]} ${operands[1]}\n`);
  const result = calc(operands).toString();
  return [userAnswer, result];
};

export default () => run(task, TASK_DESCRIPTION);
