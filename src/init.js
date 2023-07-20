import gameState from "./gameState";
const TICK_RATE = 3000;

async function init() {
  console.log("starting game");
  let nextTimeTotick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeTotick <= now) {
      gameState.tick();
      nextTimeTotick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }

  requestAnimationFrame(nextAnimationFrame);
}

init();
