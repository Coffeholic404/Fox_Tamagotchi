const TICK_RATE = 3000;

function tick() {
  console.log("tick", Date.now());
}

async function init() {
  console.log("starting game");
  let nextTimeTotick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeTotick <= now) {
      tick();
      nextTimeTotick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }

  requestAnimationFrame(nextAnimationFrame);
}

init();
