'use strict';

let askUserForName = 'Hello! What is your first name?'; 
let responseUsername = prompt(askUserForName);
// console.log(`Welcome to my website, ${responseUsername}! Try to answer the following questions correctly, using only yes or no.`);
alert(`Welcome to my website, ${responseUsername}! Try to answer the following questions correctly, using only yes or no.`);

let questionAlpha = 'Do I like to ski?';
let responseAlpha = prompt(questionAlpha);
// console.log(`${responseUsername} responded: ${responseAlpha}.`);

if (responseAlpha.toLocaleLowerCase() === 'y' || responseAlpha.toLocaleLowerCase() === 'yes') {
//   console.log(`That\'s right, ${responseUsername}! Skiing is so much fun.`);
  alert(`That\'s right, ${responseUsername}! Skiing is so much fun.`);
} else if (responseAlpha.toLocaleLowerCase() === 'n' || responseAlpha.toLocaleLowerCase() === 'no') {
  // console.log(`Actually ${responseUsername}, I do enjoy skiing. On to the next question.`);
  alert(`Actually ${responseUsername}, I do enjoy skiing. On to the next question.`);
}
else {
  // console.log(`Don\'t feel like responding ${responseUsername}? that's okay. Please try another one.`);
  alert(`Don\'t feel like responding ${responseUsername}? that's okay. Please try another one.`);
}

let questionBravo = 'I only run when it is raining cats and dogs, right?';
let responseBravo = prompt(questionBravo);
// console.log(`${responseUsername} responded: ${responseBravo}.`);

if (responseBravo.toLocaleLowerCase() === 'n' || responseBravo.toLocaleLowerCase() === 'no') {
  // console.log(`Yup, ${responseUsername}, fair weather running is the way to go.`);
  alert(`Yup, ${responseUsername}, fair weather running is the way to go.`);
} else if (responseBravo.toLocaleLowerCase() === 'y' || responseBravo.toLocaleLowerCase() === 'yes') {
  // console.log(`Actually ${responseUsername}, I really like fair weather running. Let\'s do another one.`);
  alert(`Actually ${responseUsername}, I really like fair weather running. Let\'s do another one.`);
} else {
  // console.log(`Don\'t feel like responding ${responseUsername}? that's okay. Please try another one.`);
  alert(`Don\'t feel like responding ${responseUsername}? that's okay. Please try another one.`);
}

let questionCharlie = 'Did I work for Yahoo!?';
let responseCharlie = prompt(questionCharlie);
// console.log(`${responseUsername} responded: ${responseCharlie}.`);

if (responseCharlie.toLocaleLowerCase() === 'n' || responseCharlie.toLocaleLowerCase() === 'no') {
  // console.log(`Of course not... but I have worked for Citrix Systems Inc. and Microsoft.`);
  alert(`Of course not... but I have worked for Citrix Systems Inc. and Microsoft.`);
} else if (responseCharlie.toLocaleLowerCase() === 'y' || responseCharlie.toLocaleLowerCase() === 'yes') {
  // console.log(`Yahoo is a big tech company, but no ${responseUsername}, I have not.`);
  alert(`Yahoo is a big tech company, but no ${responseUsername}, I have not.`);
} else {
  // console.log(`Don\'t feel like responding ${responseUsername}? that's okay. Please try another one.`);
  alert(`Don\'t feel like responding ${responseUsername}? that's okay. Please try another one.`);
}

let questionDelta = 'Is my dog a shitzu?';
let responseDelta = prompt(questionDelta);
// console.log(`${responseUsername} responded: ${responseDelta}.`);

if (responseDelta.toLocaleLowerCase() === 'y' || responseDelta.toLocaleLowerCase() === 'yes') {
  // console.log(`No, sorry ${responseUsername}, his name is "Wiley". One more!`);
  alert(`No, sorry ${responseUsername}, his name is "Wiley". One more!`);
} else if (responseDelta.toLocaleLowerCase() === 'n' || responseDelta.toLocaleLowerCase() === 'no') {
  // console.log(`Yes! That\'s right! Wiley is a 100 lb German Shepard Dog. Last one coming up!`);
  alert(`Yes! That\'s right! Wiley is a 100 lb German Shepard Dog. Last one coming up!`);
} else {
  // console.log(`Don\'t feel like responding ${responseUsername}? that's okay. Please try another one.`);
  alert(`Don\'t feel like responding ${responseUsername}? that's okay. Please try another one.`);
}

let questionEcho = 'Have I ever played an instrument?';
let responseEcho = prompt(questionEcho);
// console.log(`${responseUsername} responded: ${responseEcho}.`);

if (responseEcho.toLocaleLowerCase() === 'y' || responseEcho.toLocaleLowerCase() === 'yes') {
  // console.log(`It\'s sad but true, but I can play guitar and drums. How well? Well...that is a question for another time ${responseUsername}.`);
  alert(`It\'s sad but true, but I can play guitar and drums. How well? Well...that is a question for another time ${responseUsername}.`);
} else if(responseEcho.toLocaleLowerCase() === 'n' || responseEcho.toLocaleLowerCase() === 'no') {
  // console.log(`Well actually ${responseUsername} I can play guitar and drums (but not both at the same time!)`);
  alert(`Well actually ${responseUsername} I can play guitar and drums (but not both at the same time!)`);
} else {
  // console.log(`Don\'t feel like responding ${responseUsername}? that's okay. Please try another one.`);
  alert(`Don\'t feel like responding ${responseUsername}? that's okay. Please try another one.`);
}

// console.log(`Thank you for playing along, and for visiting my web app ${responseUsername}!`);
alert(`Thank you for playing along, and for visiting my web app ${responseUsername}!`);