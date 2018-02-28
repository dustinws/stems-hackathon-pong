/* global io */

// import gameLoop from './game-loop';

io();

// const state = {};

const contentNode = document.getElementById('content');

const usernameNode = document.getElementById('username');
// const usernameField = document.getElementById('username-field');
const usernameSubmit = document.getElementById('username-submit');

// const choiceNode = document.getElementById('choice');
// const createNode = document.getElementById('choice-create');
// const joinNode = document.getElementById('choice-join');
// const canvasNode = document.getElementById('canvas');

// First, put the username form inside the content div.
contentNode.innerHTML = usernameNode.innerHTML;
// eslint-disable-next-line
console.log(usernameSubmit);
// Bind Listeners
// eslint-disable-next-line no-console
usernameSubmit.addEventListener('click', console.log);

// Listeners

// function addUsername() {
//   // eslint-disable-next-line no-console
//   console.log('YEA');
//   // event.preventDefault();
//
//   state.username = usernameField.value;
//   usernameField.value = '';
//   // eslint-disable-next-line
//   console.log(state);
//
//   contentNode.innerHTML = choiceNode.innerHTML;
// }
