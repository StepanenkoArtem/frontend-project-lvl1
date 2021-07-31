#!/usr/bin/env node
import { question } from 'readline-sync';
import run from '../src/engine.js';

const TASK_DESCRIPTION = 'What is the result of the expression?';
const OPERATIONS = ['-', '+', '*'];

const calc = (operator, operands) => {
  switch (operator) {
    case '-':
      return operands[0] - operands[1];
    case '+':
      return operands[0] + operands[1];
    case '*':
      return operands[0] * operands[1];
    default:
      return false;
  }
};

const task = () => {
  const operands = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
  const operator = OPERATIONS[Math.floor(Math.random() * 3)];
  const userAnswer = question(`Question: ${operands[0]} ${operator} ${operands[1]}\n`);
  const result = calc(operator, operands).toString();
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
