import randomInt from '../heplers.js';
import run from '../index.js';

const GAME_DESCRIPTION = 'What is the result of the expression?';
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

const game = () => {
  const operands = [randomInt(1, 20), randomInt(1, 20)];
  const operator = OPERATIONS[randomInt(0, 2)];
  const task = `${operands[0]} ${operator} ${operands[1]}`
  const result = calc(operator, operands).toString();
  return [task, result];
};

export default () => run(game, GAME_DESCRIPTION);
