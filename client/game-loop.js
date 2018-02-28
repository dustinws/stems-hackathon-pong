export default function gameLoop() {
  // eslint-disable-next-line no-console
  console.log('Running');
  requestAnimationFrame(gameLoop);
}
