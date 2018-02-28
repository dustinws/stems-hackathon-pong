const Ball = require('./Ball');

const states = {
  WAITING: 'WAITING',
  COUNTDOWN: 'COUNTDOWN',
  RUNNING: 'RUNNING',
  FINISHED: 'FINISHED',
};

class Game {
  constructor(id) {
    this.id = id;
    this.players = [];
    this.state = states.WAITING;
    this.ball = new Ball(300, 300, 0, 0);
  }

  startCountdown() {
    this.state = states.COUNTDOWN;
  }

  startGame() {
    this.state = states.RUNNING;
  }

  addPlayer(player) {
    if (this.players.length > 1) return this;
    this.players.push(player);
    switch (this.players.length) {
      case 1: return player.setPosition(10, 300);
      case 2: return player.setPosition(580, 300);
      default: break;
    }
    return this;
  }

  removePlayer(socketID) {
    const existingPlayer = this.players.find(p => p.socket === socketID);
    if (existingPlayer) {
      this.players = this.players.filter(p => p.socket !== socketID);
    }
  }

  updateBall(x, y) {
    this.ball.setPosition(x, y);
  }

  getUserByUsername(username) {
    return this.players.find(player => player.username === username);
  }

  updatePlayerPos(username, x, y) {
    this.getUserByUsername(username).setPosition(x, y);
  }

  updatePlayerScore(username, score) {
    this.getUserByUsername(username).setScore(score);
  }
}

module.exports = Game;

