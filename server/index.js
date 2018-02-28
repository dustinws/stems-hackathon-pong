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

let game = new Game('main');

io.on('connection', (socket) => {
  // eslint-disable-next-line no-console
  console.log('New Socket!');

  socket.on('game:join', (username) => {
    const player = new Player(username, socket.id);

    player.inGame = true;

    game.addPlayer(player);
    // eslint-disable-next-line
    console.log(game);
    io.emit('update-client', JSON.stringify(game));
  });

  socket.on('update-server', (newGame) => {
    game = JSON.parse(newGame);
    io.emit('update-client', newGame);
  });

  socket.on('disconnect', () => {
    // eslint-disable-next-line no-console
    const player = game.players.find(p => p.socket === socket.id);
    game.removePlayer(player);

    console.log(`Player ${player.username} disconnected.`);  // eslint-disable-line
    console.log('GAME', game); // eslint-disable-line no-console
  });
});

server.listen(3000);
