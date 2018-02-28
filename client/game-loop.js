export default function gameLoop(ctx, game, socket) {
  ctx.clearRect(0, 0, 600, 600);
  let changed = false;
  game.players.forEach((player) => {
    if (player.paddle.delta.x !== 0) {
      player.paddle.pos.x += player.paddle.delta.x; // eslint-disable-line
      changed = true;
    }
    ctx.fillStyle = 'white';
    ctx.rect(player.paddle.pos.x, player.paddle.pos.y, player.paddle.width, player.paddle.height);
    ctx.fill();
  });
  if (changed) {
    socket.emit('update-server', JSON.stringify(game));
  }
  requestAnimationFrame(() => gameLoop(ctx, game));
}
