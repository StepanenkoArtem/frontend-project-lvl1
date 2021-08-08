#!/usr/bin/env node
import { question } from 'readline-sync';
import run from '../src/index.js';
import { wrongAnswerNotification } from '../src/cli.js';

const TASK_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  for (let i = 1; i <= number / 2; i += 1) {
    if (number % 2 === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const task = () => {
  const randomInt = Math.floor(Math.random() * 200);
  const userAnswer = question(`Question: ${randomInt}\n`);
  const result = isPrime(randomInt);
  return userAnswer === result || wrongAnswerNotification(userAnswer, result);
};

const main = () => {
  run(task, TASK_DESCRIPTION);
};

main();
