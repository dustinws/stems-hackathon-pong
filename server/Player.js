const Coordinate = require('./Coordinate');

class Player {
  constructor(username, socketID) {
    this.username = username;
    this.socket = socketID;
    this.inGame = false;
    this.pos = new Coordinate(0, 0);
    this.score = 0;
  }

  setPosition(x, y) {
    this.pos.x = x;
    this.pos.y = y;
  }

  setScore(score) {
    this.score = score;
  }
}

module.exports = Player;

