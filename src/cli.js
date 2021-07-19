import { question } from 'readline-sync';

function getUsername() {
  const userName = question('May I have your name?\n');
  /* eslint-disable no-console */
  console.log('Welcome to the Brain games!');
  console.log(`Hello, ${userName}`);

  /* eslint-enable no-console */
}
export default getUsername;
