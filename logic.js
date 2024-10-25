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
  if (!game.isGameOver) {
    frames++;
    player.move();
    game.enemies.forEach((enemy) => {
      enemy.move();
      crashTest(enemy);
    });
    //   console.log(frames);
    if (frames % 100 === 0) {
      // this is going to run every 100 frames
      new Enemy();
      console.log(game.enemies);
    }
    if (frames % 500 === 0) {
      game.level++;
    }
    requestAnimationFrame(gameLoop);
  }
}

requestAnimationFrame(gameLoop);

function crashTest(enemy) {
  const playerLeftEdge = player.left;
  const playerRightEdge = player.left + player.width;
  const playerTopEdge = player.top;
  const playerBottomEdge = player.top + player.height;

  const enemyLeftEdge = enemy.left;
  const enemyRightEdge = enemy.left + enemy.width;
  const enemyTopEdge = enemy.top;
  const enemyBottomEdge = enemy.top + enemy.height;

  if (
    playerLeftEdge < enemyRightEdge &&
    playerRightEdge > enemyLeftEdge &&
    playerTopEdge < enemyBottomEdge &&
    playerBottomEdge > enemyTopEdge
  ) {
    /* Substract score and destroy enemy */
    console.log("CRASH!!");
    game.lives--;
    game.updateLives();
    enemy.destroy();
    if (game.lives <= 0) {
      game.isGameOver = true;
      game.gameOverScreen.style.display = "flex";
    }
  }
}

function restartGame() {
  /* game.isGameOver = false;
  game.lives = 5; */
  game.gameOverScreen.style.display = "none";
  /*  game.updateLives();
  player.top = 0;
  player.left = 0;
  // we call the loop again
  requestAnimationFrame(gameLoop); */

  // By storing the objects in let variables we can replace them by new Objects when we restart the game
  game = new Game();
  player = new Player();
  requestAnimationFrame(gameLoop);
}

const restartButtonElement = document.querySelector("#restart-game");

restartButtonElement.addEventListener("click", () => {
  // window.location.reload()
  restartGame();
});
