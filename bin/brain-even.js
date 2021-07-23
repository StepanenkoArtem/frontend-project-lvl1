#!/usr/bin/env node
import { question } from 'readline-sync';
import getUsername from '../src/cli.js';

const MIN_CORRECT_ANSWERS = 3;

const isEven = (number) => number % 2 === 0;

const checkAnswer = (answer, number) => (answer.toLowerCase() === 'yes' && isEven(number))
  || (answer.toLowerCase() === 'no' && !isEven(number));

const main = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUsername();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let step = 0; step < MIN_CORRECT_ANSWERS; step += 1) {
    const randomInt = Math.floor(Math.random() * 100);
    const userAnswer = question(`Question: ${randomInt}\n`);
    const isCorrect = checkAnswer(userAnswer, randomInt);
    if (isCorrect) {
      console.log('Correct!');
    } else {
      console.log('Incorrect');
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven ? 'yes' : 'no'}'.`,
      );
      console.log("Let's try again, Bill!");
      return;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};

main();
