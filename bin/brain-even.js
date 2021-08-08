#!/usr/bin/env node
import { question } from 'readline-sync';
import run from '../src/index.js';
import { wrongAnswerNotification } from '../src/cli.js';

const TASK_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkAnswer = (number) => (number % 2 ? 'no' : 'yes');

const task = () => {
  const randomInt = Math.floor(Math.random() * 100);
  const userAnswer = question(`Question: ${randomInt}\n`);
  const result = checkAnswer(randomInt);
  return userAnswer === result || wrongAnswerNotification(userAnswer, result);
};

const main = () => {
  run(task, TASK_DESCRIPTION);
};

main();
