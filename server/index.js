const path = require('path');
const express = require('express');
const { Server } = require('http');
const IO = require('socket.io');

const Game = require('./Game');
const Player = require('./Player');

const app = express();
const server = Server(app);
const io = IO(server);

app.use(express.static(path.resolve(__dirname, '..', 'public')));

const game = new Game('main');

io.on('connection', (socket) => {
  // eslint-disable-next-line no-console
  console.log('New Socket!');

  socket.on('game:join', (username) => {
    const player = new Player(username, socket.id);

    player.inGame = true;

    game.addPlayer(player);
    // eslint-disable-next-line
    io.emit('update-client', JSON.stringify(game));
  });

  socket.on('update-server', (newGame) => {
    Object.assign(game, JSON.parse(newGame));
    console.log(game.players.map(p => p.paddle)); // eslint-disable-line
    io.emit('update-client', newGame);
  });

  socket.on('disconnect', () => {
    game.removePlayer(socket.id);
  });
});

server.listen(3000);
