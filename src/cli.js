import readlineSync from 'readline-sync'

export const welcomeUser = () => {
  console.log('Welcome to the Brain Games!');
};

export const user = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};