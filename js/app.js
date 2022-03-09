'use strict';

let askUserForName = 'Hello! What is your first name?'; 
let responseUsername = prompt(askUserForName);
alert(`Welcome to my website, ${responseUsername}! Try to answer the following questions correctly, using only yes or no.`);
console.log(`Welcome to my website, ${responseUsername}! Try to answer the following questions correctly, using only yes or no.`);

let questionAlpha = 'Do I like to ski?';
let responseAlpha = prompt(questionAlpha);

if (responseAlpha.toLocaleLowerCase() === 'y' || responseAlpha.toLocaleLowerCase() === 'yes') {
  alert(`That\'s right, ${responseUsername}! Skiing is so much fun.`);
  console.log(`That\'s right, ${responseUsername}! Skiing is so much fun.`);
} else {
  alert(`Actually ${responseUsername}, I do enjoy skiing. On to the next question.`);
  console.log(`Actually ${responseUsername}, I do enjoy skiing. On to the next question.`)
}

let questionBravo = 'I only run when it is raining cats and dogs, right?';
let responseBravo = prompt(questionBravo);

if (responseBravo.toLocaleLowerCase() === 'n' || responseBravo.toLocaleLowerCase() === 'no') {
  alert(`Yup, ${responseUsername}, fair weather running is the way to go.`)
  console.log(`Yup, ${responseUsername}, fair weather running is the way to go.`)
} else {
  alert(`Actually ${responseUsername}, I really like fair weather running. Let\'s do another one.`);
  console.log(`Actually ${responseUsername}, I really like fair weather running. Let\'s do another one.`);
}

let questionCharlie = 'Did I work for Yahoo!?';
let responseCharlie = prompt(questionCharlie);

if (responseCharlie.toLocaleLowerCase() === 'n' || responseCharlie.toLocaleLowerCase() === 'no') {
  alert(`Of course not... but I have worked for Citrix Systems Inc. and Microsoft.`)
  console.log(`Of course not... but I have worked for Citrix Systems Inc. and Microsoft.`)
} else {
  alert(`Yahoo is a big tech company, but no ${responseUsername}, I have not.`);
  console.log(`Yahoo is a big tech company, but no ${responseUsername}, I have not.`);
}

let questionDelta = 'Is my dog a shitzu?';
let responseDelta = prompt(questionDelta);

if (responseDelta.toLocaleLowerCase() === 'y' || responseDelta.toLocaleLowerCase() === 'yes') {
  alert(`No, sorry ${responseUsername}, his name is "Wiley". One more!`);
  console.log(`No, sorry ${responseUsername}, his name is "Wiley". One more!`);
} else {
  alert(`Yes! That\'s right! Wiley is a 100 lb German Shepard Dog. Last one coming up!`)
  console.log(`Yes! That\'s right! Wiley is a 100 lb German Shepard Dog. Last one coming up!`)
}

let questionEcho = 'Have I ever played an instrument?';
let responseEcho = prompt(questionEcho);

if (questionEcho.toLocaleLowerCase() === 'y' || questionEcho.toLocaleLowerCase() === 'yes') {
  alert(`It\'s sad but true, but I can play guitar and drums. How well? Well...that is a question for another time ${responseUsername}.`);
  console.log(`It\'s sad but true, but I can play guitar and drums. How well? Well...that is a question for another time ${responseUsername}.`);
} else {
  alert(`Well actually ${responseUsername} I can play guitar and drums (but not both at the same time!)`);
  console.log(`Well actually ${responseUsername} I can play guitar and drums (but not both at the same time!)`);
}

alert(`Thank you for playing along, and for visiting my web app ${responseUsername}!`);