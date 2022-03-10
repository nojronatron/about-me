'use strict';

let correctAnswerTotal = 0;
let userguess = '';
let questionArray = ['Do I like to ski?'];
let correctAnswers = ['y', 'y', 'n', 'n', 'y'];
let validResponsesArray = ['y', 'yes', 'n', 'no'];

/*
Questions 1 through 5
*/

let askUserForName = 'Hello! What is your first name?'; 
let responseUsername = prompt(askUserForName);

// console.log(`Welcome to my website, ${responseUsername}! Try to answer the following questions correctly, using only yes or no.`);
alert(`Welcome to my website, ${responseUsername}! Try to answer the following questions correctly, using only yes or no.`);

function questionOne() {
  let qIndex = 0;
  let validResponse = false;
  let responseAlpha = prompt(questionArray[qIndex]).toLocaleLowerCase();
  
  for (let idx = 0; idx < validResponsesArray.length; idx++) {
    console.log(`${responseAlpha}  ${validResponsesArray[idx]}`);
    if (responseAlpha === validResponsesArray[idx]) {
      validResponse = true;
      break;
    }
  }

  if (validResponse) {

    if (responseAlpha.charAt(0) === correctAnswers[qIndex]) {
      correctAnswerTotal++;
      // console.log(`Correct answers count: ${correctAnswerTotal}`);
      //   console.log(`That\'s right, ${responseUsername}! Skiing is so much fun.`);
      alert(`That\'s right, ${responseUsername}! Skiing is so much fun.`);

    } else {
      // console.log(`Actually ${responseUsername}, I do enjoy skiing. On to the next question.`);
      alert(`Actually ${responseUsername}, I do enjoy skiing. On to the next question.`);
    }
  } else {
    // console.log(`Don\'t feel like responding ${responseUsername}? that's okay. Please try another one.`);
    alert(`Don\'t feel like responding ${responseUsername}? that's okay. Please try another one.`);
  }
} 

questionOne();


function questionTwo() {
  let questionBravo = 'I only run when it is raining cats and dogs, right?';
let responseBravo = prompt(questionBravo);
// console.log(`${responseUsername} responded: ${responseBravo}.`);

if (responseBravo.toLocaleLowerCase() === 'n' || responseBravo.toLocaleLowerCase() === 'no') {
  correctAnswerTotal++;
  console.log(`Correct answers count: ${correctAnswerTotal}`);
  // console.log(`Yup, ${responseUsername}, fair weather running is the way to go.`);
  alert(`Yup, ${responseUsername}, fair weather running is the way to go.`);
} else if (responseBravo.toLocaleLowerCase() === 'y' || responseBravo.toLocaleLowerCase() === 'yes') {
  // console.log(`Actually ${responseUsername}, I really like fair weather running. Let\'s do another one.`);
  alert(`Actually ${responseUsername}, I really like fair weather running. Let\'s do another one.`);
} else {
  // console.log(`Don\'t feel like responding ${responseUsername}? that's okay. Please try another one.`);
  alert(`Don\'t feel like responding ${responseUsername}? that's okay. Please try another one.`);
}
}

questionTwo();

function questionThree() {
  let questionCharlie = 'Did I work for Yahoo!?';
let responseCharlie = prompt(questionCharlie);
// console.log(`${responseUsername} responded: ${responseCharlie}.`);

if (responseCharlie.toLocaleLowerCase() === 'n' || responseCharlie.toLocaleLowerCase() === 'no') {
  correctAnswerTotal++;
  console.log(`Correct answers count: ${correctAnswerTotal}`);
  // console.log(`Of course not... but I have worked for Citrix Systems Inc. and Microsoft.`);
  alert(`Of course not... but I have worked for Citrix Systems Inc. and Microsoft.`);
} else if (responseCharlie.toLocaleLowerCase() === 'y' || responseCharlie.toLocaleLowerCase() === 'yes') {
  // console.log(`Yahoo is a big tech company, but no ${responseUsername}, I have not.`);
  alert(`Yahoo is a big tech company, but no ${responseUsername}, I have not.`);
} else {
  // console.log(`Don\'t feel like responding ${responseUsername}? that's okay. Please try another one.`);
  alert(`Don\'t feel like responding ${responseUsername}? that's okay. Please try another one.`);
}
}

questionThree();

function questionFour() {
  let questionDelta = 'Is my dog a shitzu?';
let responseDelta = prompt(questionDelta);
// console.log(`${responseUsername} responded: ${responseDelta}.`);

if (responseDelta.toLocaleLowerCase() === 'y' || responseDelta.toLocaleLowerCase() === 'yes') {
  // console.log(`No, sorry ${responseUsername}, his name is "Wiley". One more!`);
  alert(`No, sorry ${responseUsername}, his name is "Wiley". One more!`);
} else if (responseDelta.toLocaleLowerCase() === 'n' || responseDelta.toLocaleLowerCase() === 'no') {
  correctAnswerTotal++;
  console.log(`Correct answers count: ${correctAnswerTotal}`);
  // console.log(`Yes! That\'s right! Wiley is a 100 lb German Shepard Dog. Last one coming up!`);
  alert(`Yes! That\'s right! Wiley is a 100 lb German Shepard Dog. Last one coming up!`);
} else {
  // console.log(`Don\'t feel like responding ${responseUsername}? that's okay. Please try another one.`);
  alert(`Don\'t feel like responding ${responseUsername}? that's okay. Please try another one.`);
}
}

questionFour();

function questionFive() {
  let questionEcho = 'Have I ever played an instrument?';
let responseEcho = prompt(questionEcho);
// console.log(`${responseUsername} responded: ${responseEcho}.`);

if (responseEcho.toLocaleLowerCase() === 'y' || responseEcho.toLocaleLowerCase() === 'yes') {
  correctAnswerTotal++;
  // console.log(`Correct answers count: ${correctAnswerTotal}`);
  // console.log(`It\'s sad but true, but I can play guitar and drums. How well? Well...that is a question for another time ${responseUsername}.`);
  alert(`It\'s sad but true, but I can play guitar and drums. How well? Well...that is a question for another time ${responseUsername}.`);
} else if(responseEcho.toLocaleLowerCase() === 'n' || responseEcho.toLocaleLowerCase() === 'no') {
  // console.log(`Well actually ${responseUsername} I can play guitar and drums (but not both at the same time!)`);
  alert(`Well actually ${responseUsername} I can play guitar and drums (but not both at the same time!)`);
} else {
  // console.log(`Don\'t feel like responding ${responseUsername}? that's okay. Please try another one.`);
  alert(`Don\'t feel like responding ${responseUsername}? that's okay. Please try another one.`);
}
}

questionFive();

/* end 5 questions */

/* question 6 the guess what number game */
function questionSix(){
  let number = 17;
let counter = 4;
let higherOrLowerResponse = '';
let gotItMessage = ` is correct! You guessed it!`;
let attemptsRemainMsg = `Attempts remaining `;
let lostThisTimeMessage = `The number I was thinking of was: `;

do {
  // console.log(attemptsRemainMsg + counter);
  userguess = prompt('I am thinking of a number between 0 and 20. Can you guess it?');
  
  if (userguess == number) {
    correctAnswerTotal++;
    // console.log(`Correct answers count: ${correctAnswerTotal}`);
    // console.log(number + gotItMessage);
    alert(number + gotItMessage);
    counter = 0;
    break;
  } else if (userguess > number) {
    console.log(`Too high!`);
    higherOrLowerResponse = 'Too high!';
  } else if (userguess < number) {
    console.log(`Too low!`);
    higherOrLowerResponse = 'Too low!';
  }

  counter--;
  alert(`${higherOrLowerResponse} ${attemptsRemainMsg}: ${counter}`);
} while (counter > 0);

if (userguess != number && counter == 0) {
  console.log(lostThisTimeMessage + number);
  alert(lostThisTimeMessage + number);
}
}

questionSix();

/* end question 6 */

/* start question 7 */
function questionSeven() {
  // console.log('questionSeven');
let answerArr = ["blue", "aqua", "grey", "gray", "lime"];
let attemptsRemaining = 6;
let initialQuestion = `I am thinking of a color, can you guess it in ${attemptsRemaining} attempts?`;
let successMessage = `That's correct, you guessed it!`;
let userGotIt = false;
let incorrectMessage = `Sorry ${responseUsername}, try again.`;

// console.log(initialQuestion);
alert(initialQuestion);
userguess = '';

do {
  userguess = prompt(`What single-word color am I thinking of?`);
  attemptsRemaining--;

  for (var idx = 0; idx < answerArr.length; idx++) {
    // console.log(`Testing array value ${answerArr[idx]}`);

    if (userguess === answerArr[idx]) {
      userGotIt = true;
      // console.log(`userGotIt set to 'true'.`);
      correctAnswerTotal++;
      // console.log(`Correct answers count: ${correctAnswerTotal}`);
      alert(successMessage);
      break;
    }
  }

  if (!userGotIt) {
    // console.log(incorrectMessage);
    alert(incorrectMessage);
  }

  // console.log(`attempts remaining: ${attemptsRemaining}`);
} while (attemptsRemaining > 0 && !userGotIt);

// console.log(`array dump: ${answerArr}`);
alert(`Here are all of the possible correct answers: ${answerArr}`);
}

questionSeven();

/* end question 7 */

/* how many were correct? */
let finalCorrectCountMessage = `You answered ${correctAnswerTotal} questions correctly!`;
// console.log(finalCorrectCountMessage);
alert(finalCorrectCountMessage);

// console.log(`Thank you for playing along, and for visiting my web app ${responseUsername}!`);
alert(`Thank you for playing along, and for visiting my web app ${responseUsername}!`);