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

let users = [];
const games = {};

// const getConnection = (sock) =>
// users.find(s => s.socket === sock);

const broadcastGame = (gameID) => {
  const game = games[gameID];

  if (!game) {
    throw new Error(`Couldn't find game with game id "${gameID}"`);
  }

  game.players.forEach((player) => {
    player.socket.emit('update', game);
  });
};

io.on('connection', (socket) => {
  // eslint-disable-next-line no-console
  console.log('New Socket!');
  users.push({
    socket,
    inGame: false,
  });

  socket.on('game:join', (gameID, username) => {
    if (!games[gameID]) {
      socket.emit('error', 'The game you selected does not exist');
    }

    const game = games[gameID];
    const player = new Player(username, socket);

    player.inGame = true;

    game.addPlayer(player);

    broadcastGame(gameID);
  });

  socket.on('game:create', (gameID, username) => {
    if (games[gameID]) {
      return socket.emit('error', 'The game you selected does already exist');
    }

    games[gameID] = new Game(gameID);
    games[gameID].addPlayer(new Player(username, socket));

    return broadcastGame(gameID);
  });

  socket.on('disconnect', (...args) => {
    // eslint-disable-next-line no-console
    console.log('disconnect', ...args);
    users = users.filter(s => s.socket !== socket);
  });
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

server.listen(3000);
