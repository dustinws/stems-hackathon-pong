const Coordinate = require('./Coordinate');

class Ball {
  constructor(x, y, dx, dy) {
    this.pos = new Coordinate(x, y);
    this.delta = new Coordinate(dx, dy);
    this.radius = 10;
  }

  setPosition(x, y) {
    this.pos.x = x;
    this.pos.y = y;
  }

  setDelta(x, y) {
    this.delta.x = x;
    this.delta.y = y;
  }
}

module.exports = Ball;

