import generateRandomInt from '../heplers.js';
import run from '../index.js';

const GAME_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const game = () => {
  const task = generateRandomInt(10, 100);
  const result = isEven(task) ? 'yes' : 'no';
  return [task, result];
};

export default () => run(game, GAME_DESCRIPTION);
