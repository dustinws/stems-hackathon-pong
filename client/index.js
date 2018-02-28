/* global io, location */

// import gameLoop from './game-loop';

const socket = io();
let game;
const username = window.location.hash.replace('#', '');

socket.emit('game:join', username);

socket.on('update-client', (newGame) => {
  game = JSON.parse(newGame);
  // eslint-disable-next-line
  console.log(game);
});

// eslint-disable-next-line
socket.on('error', err => alert(err));

// gameLoop();

