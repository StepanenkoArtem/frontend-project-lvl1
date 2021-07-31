#!/usr/bin/env node
import { question } from 'readline-sync';
import run from '../src/engine.js';

const TASK_DESCRIPTION = 'Find the greatest common divisor of given numbers.';

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
  const operands = [Math.floor(Math.random() * 100 + 1), Math.floor(Math.random() * 100 + 1)];
  const userAnswer = question(`Question: ${operands[0]} ${operands[1]}\n`);
  const result = calc(operands).toString();
  const isCorrect = userAnswer === result;
  if (!isCorrect) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${result}".`);
  }
  return isCorrect;
};

const main = () => {
  run(task, TASK_DESCRIPTION);
};

main();
