#!/usr/bin/env node
import { question } from 'readline-sync';
import run from '../src/index.js';
import { wrongAnswerNotification } from '../src/cli.js';

const TASK_DESCRIPTION = 'What number is missing in the progression?';

const createProgression = () => {
  const progressionStep = Math.floor(Math.random() * 20);
  const progressionLength = Math.floor(Math.random() * 5 + 11);

  const progression = [Math.floor(Math.random() * 100)];
  while (progression.length <= progressionLength) {
    const element = progression[progression.length - 1] + progressionStep;
    progression.push(element);
  }
  return progression;
};
const task = () => {
  const progression = createProgression();
  const hiddenElementIndex = Math.floor(Math.random() * progression.length);
  const hiddenElementValue = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';
  const userAnswer = question(`Question: ${progression}\n`);

  return (
    userAnswer === hiddenElementValue || wrongAnswerNotification(userAnswer, hiddenElementValue)
  );
};

const main = () => {
  run(task, TASK_DESCRIPTION);
};

main();
