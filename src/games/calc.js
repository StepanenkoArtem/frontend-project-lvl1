import { question } from 'readline-sync';
import { randomInt } from '../heplers.js';

export const TASK_DESCRIPTION = 'What is the result of the expression?';
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

export const task = () => {
  const operands = [randomInt(10), randomInt(10)];
  const operator = OPERATIONS[randomInt(3)];
  const userAnswer = question(`Question: ${operands[0]} ${operator} ${operands[1]}\n`);
  const result = calc(operator, operands).toString();
  return [userAnswer, result];
};
