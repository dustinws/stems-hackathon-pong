import gameLoop from './game-loop';
import socket from './socket';

let started = false;

export default (game) => {
  if (started) return;
  started = true;
  setTimeout(() => {
    const ctx = document.getElementById('game').getContext('2d');
    // eslint-disable-next-line
    console.log(game);
    gameLoop(ctx, game, socket);
  });
};
