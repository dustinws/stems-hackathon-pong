export default function gameLoop() {
  console.log('Running');
  requestAnimationFrame(gameLoop);
}
