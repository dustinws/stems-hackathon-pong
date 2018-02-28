import React from 'react';

export default function Game({ game }) {
  require('../main').default(game); // eslint-disable-line
  return (
    <canvas id="game" width="600" height="600" />
  );
}
