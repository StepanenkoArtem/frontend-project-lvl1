import { question } from 'readline-sync';

const getUsername = () => question('May I have your name?\n');

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUsername();
  console.log(`Hello, ${userName}`);
};

export default greeting;
