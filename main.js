let userName= ' ';
userName ? console.log(`Hello ${userName}!`) : console.log(`Hello`);

//the question the user wants to ask the Magic Eight Ball
let userQuestion= ' ';
console.log('userQuestion');

randomNumber= Math.floor(Math.random() * 8);

let eightBall= ' ';

switch(eightBall) {
  case 'randomNumber === 1':
  console.log('It is certain');
  break;
  case 'randomNumber === 2':
  console.log('It is decidedly so');
  break;
  case 'randomNumber === 3':
  console.log('Reply hazy try again');
  break;
  case 'randomNumber === 4':
  console.log('Cannot predict now');
  break;
  case 'randomNumber === 5':
  console.log('Do not count on it');
  break;
  case 'randomNumber === 6':
  console.log('My sources say no');
  break;
  case 'randomNumber === 7':
  console.log('Outlook not so good');
  break;
  case 'randomNumber === 8':
  console.log('Sign points to yes');
  break;
}

console.log('eightBall')