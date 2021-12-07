import { question } from 'readline-sync';
import randomInt from '../heplers.js';

export const TASK_DESCRIPTION = 'What number is missing in the progression?';

const createProgression = () => {
  const progressionStep = randomInt(20);
  const progressionLength = randomInt(5) + 10;

  const progression = [randomInt(100)];
  while (progression.length <= progressionLength) {
    const element = progression[progression.length - 1] + progressionStep;
    progression.push(element);
  }
  return progression;
};
export const task = () => {
  const progression = createProgression();
  const hiddenElementIndex = randomInt(progression.length);
  const hiddenElementValue = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';
  const userAnswer = question(`Question: ${progression.join(' ')}\n`);

  return ([userAnswer, hiddenElementValue]);
};
