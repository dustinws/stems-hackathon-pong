import { userInfo } from "os";

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
    this.ball = new Coordinate(300, 300)
  }

  startCountdown() {
    this.state = states.COUNTDOWN;
  }

  startGame() {
    this.state = states.RUNNING;
  }

  addPlayer(player) {
    this.players.push(player);
    switch(this.players.length) {
      case 1: player.setPosition(10, 300);
      case 2: player.setPosition(590, 300);
      case 3: player.setPosition(300, 590);
      case 4: player.setPosition(300, 10);
    }
  }

  updateBall(x, y) {
    this.ball.x = x;
    this.ball.y = y;
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