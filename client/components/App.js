import React from 'react';
import socket from '../socket';

import Game from './Game';
import UsernameForm from './UsernameForm';

export default class App extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      page: 'username',
      player: null,
      game: null,
      username: '',
    };

    this.setUsername = this.setUsername.bind(this);
  }

  setUsername(username) {
    socket.emit('game:join', username);

    socket.on('update-client', (newGame) => {
      console.log('New Game!', JSON.parse(newGame)); // eslint-disable-line
      this.setState({
        username,
        game: JSON.parse(newGame),
        page: 'game',
      });
    });
  }

  render() {
    if (this.state.page === 'username') {
      return <UsernameForm onSubmit={this.setUsername} />;
    }
    if (this.state.page === 'game') {
      return (
        <Game
          socket={socket}
          game={this.state.game}
          player={this.state.game.players.find(p => p.username === this.state.username)}
        />
      );
    }
    return '';
  }
}
