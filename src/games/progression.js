import generateRandomInt from '../heplers.js';
import run from '../index.js';

const GAME_DESCRIPTION = 'What number is missing in the progression?';

const createProgression = (start, step, length) => {
  const progression = [start];
  while (progression.length < length) {
    const element = progression[progression.length - 1] + step;
    progression.push(element);
  }
  return progression;
};

const game = () => {
  const progression = createProgression(
    generateRandomInt(20),
    generateRandomInt(1, 20),
    generateRandomInt(10, 20),
  );
  const hiddenElementIndex = generateRandomInt(progression.length);
  const hiddenElementValue = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';
  const task = `${progression.join(' ')}`;

  return ([task, hiddenElementValue]);
};

export default () => run(game, GAME_DESCRIPTION);
