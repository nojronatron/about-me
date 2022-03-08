'use strict';

let askUserForName = 'Hello! What is your first name?'; 
let responseUsername = prompt(askUserForName);
alert(`Welcome to my website, ${responseUsername}`);

let questionAlpha = 'Question 1';
let responseAlpha = prompt(questionAlpha);

if (responseAlpha.toLocaleLowerCase() === 'y' || responseAlpha.toLocaleLowerCase() === 'yes') {
  // alert user correct response
} else {
  // alert user incorrect response
}

let questionBravo = 'Question 2';
let responseBravo = prompt(questionBravo);

if (responseBravo.toLocaleLowerCase() === 'y' || responseBravo.toLocaleLowerCase() === 'yes') {
  // alert user correct response
} else {
  // alert user incorrect response
}

let questionCharlie = 'Question 3';
let responseCharlie = prompt(questionCharlie);

if (responseCharlie.toLocaleLowerCase() === 'y' || responseCharlie.toLocaleLowerCase() === 'yes') {
  // alert user correct response
} else {
  // alert user incorrect response
}

let questionDelta = 'Question 4';
let responseDelta = prompt(questionDelta);

if (responseDelta.toLocaleLowerCase() === 'y' || responseDelta.toLocaleLowerCase() === 'yes') {
  // alert user correct response
} else {
  // alert user incorrect response
}

let questionEcho = 'Question 5';
let responseEcho = prompt(questionEcho);

if (questionEcho.toLocaleLowerCase() === 'y' || questionEcho.toLocaleLowerCase() === 'yes') {
  // alert user correct response
} else {
  // alert user incorrect response
}

alert(`Thank you for visiting ${responseUsername}!`);
