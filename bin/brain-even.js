#!/usr/bin/env node
import { question } from 'readline-sync';
import run from '../src/engine.js';

const isEven = (number) => number % 2 === 0;

const checkAnswer = (answer, number) => (answer.toLowerCase() === 'yes' && isEven(number))
  || (answer.toLowerCase() === 'no' && !isEven(number));

const task = () => {
  const randomInt = Math.floor(Math.random() * 100);
  const userAnswer = question(`Question: ${randomInt}\n`);
  const isCorrect = checkAnswer(userAnswer, randomInt);
  if (!isCorrect) {
    console.log(
      `"${userAnswer}" is wrong answer ;(. Correct answer was "${
        userAnswer === 'no' ? 'yes' : 'no'
      }".`,
    );
  }
  return isCorrect;
};

const main = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  run(task);
};

main();
