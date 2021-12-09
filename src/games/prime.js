import { question } from 'readline-sync';
import randomInt from '../heplers.js';
import run from '../index.js';

const GAME_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const game = () => {
  const task = randomInt(50, 250);
  const result = isPrime(task);
  return [task, result];
};

export default () => run(game, GAME_DESCRIPTION);
