class Player {
  constructor(username, socket) {
    this.username = username;
    this.socket = socket;
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