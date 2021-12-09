import generateRandomInt from '../heplers.js';
import run from '../index.js';

const GAME_DESCRIPTION = 'What is the greatest common divisor?';

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
  return first;
};

const game = () => {
  const operands = [generateRandomInt(100), generateRandomInt(100)];
  const task = `${operands[0]} ${operands[1]}`;
  const result = calc(operands).toString();
  return [task, result];
};

export default () => run(game, GAME_DESCRIPTION);
