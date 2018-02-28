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
    };

    this.setUsername = this.setUsername.bind(this);
  }

  setUsername(username) {
    socket.emit('game:join', username);

    socket.on('update-client', (newGame) => {
      this.setState({
        game: JSON.parse(newGame),
        page: 'game',
      });
    });
  }

  render() {
    if (this.page === 'username') {
      return <UsernameForm onSubmit={this.setUsername} />;
    }
    return <Game />;
  }
}
