import { question } from 'readline-sync';
import randomInt from '../heplers.js';
import run from '../index.js';

const TASK_DESCRIPTION = 'What number is missing in the progression?';
const MIN_PROGRESSION_LENGTH = 5
const MAX_PROGRESSION_LENGTH = 15;

const createProgression = () => {
  const progressionStep = randomInt(20);
  const progressionLength = randomInt(MIN_PROGRESSION_LENGTH, MAX_PROGRESSION_LENGTH);
  const progression = [randomInt(20)];

  while (progression.length <= progressionLength) {
    const element = progression[progression.length - 1] + progressionStep;
    progression.push(element);
  }
  return progression;
};
const task = () => {
  const progression = createProgression();
  const hiddenElementIndex = randomInt(progression.length);
  const hiddenElementValue = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';
  const userAnswer = question(`Question: ${progression.join(' ')}\n`);

  return ([userAnswer, hiddenElementValue]);
};

export default () => run(task, TASK_DESCRIPTION);
