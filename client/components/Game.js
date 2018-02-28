import React from 'react';

const keys = {
  38: false,
  40: false,
};

export default function Game({ game, socket, player }) {
  require('../main').default(game); // eslint-disable-line
  document.addEventListener('keydown', (evt) => {
    if (keys[String(evt.which)]) return;
    keys[String(evt.which)] = true;

    if (keys['38']) {
      player.paddle.delta.y = -10; // eslint-disable-line
      socket.emit('update-server', JSON.stringify(game));
    } else if (keys['40']) {
      player.paddle.delta.y = 10; // eslint-disable-line
      socket.emit('update-server', JSON.stringify(game));
    }
  });

  document.addEventListener('keyup', (evt) => {
    keys[String(evt.which)] = false;
    if (evt.which === 38 || evt.which === 40) {
      player.paddle.delta.y = 0; // eslint-disable-line
      socket.emit('update-server', JSON.stringify(game));
    }
  });
  return (
    <div>
      <canvas id="game" width="600" height="600" />
      <div>
        {game.players.map(p => (
          <p key={p.username}>{p.username}</p>
        ))}
      </div>
    </div>
  );
}
