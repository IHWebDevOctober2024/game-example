// this file is in charge of all the game logic, event listeners, etc

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
    case "ArrowLeft":
      player.direction = "left";
      break;
    case "d":
    case "ArrowRight":
      player.direction = "right";
      break;
    case "s":
    case "ArrowDown":
      player.direction = "down";
      break;
    case "w":
    case "ArrowUp":
      player.direction = "up";
      break;
  }
});

document.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "a":
    case "ArrowLeft":
    case "d":
    case "ArrowRight":
    case "s":
    case "ArrowDown":
    case "w":
    case "ArrowUp":
      player.direction = null;
      break;
  }
});

let frames = 0;

// the gameloop is a function that is going to run FOREVER
// the game doesn't crash because this code is going to run 60 times per second thanks to the requestAnimationFrame
function gameLoop() {
  frames++;
  player.move();
  //   console.log(frames);
  if (frames % 100 === 0) {
    // this is going to run every 100 frames
    console.log("NEW ENEMY APPEARS");
  }
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
