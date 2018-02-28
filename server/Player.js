const Paddle = require('./Paddle');

class Player {
  constructor(username, socketID) {
    this.username = username;
    this.socket = socketID;
    this.inGame = false;
    this.paddle = new Paddle(0, 0, 0, 0);
    this.score = 0;
  }

  setPosition(x, y) {
    this.paddle.setPosition(x, y);
  }

  setScore(score) {
    this.score = score;
  }
}

module.exports = Player;

