class Enemy {
  constructor() {
    // we create the element and we store it in the property
    this.element = document.createElement("div");
    // we add the class
    if (game.level <= 2) {
      this.element.classList.add("enemy");
    } else {
      this.element.classList.add("enemy2");
    }
    // we append the child before checking the width and height
    // if not, the width and height are going to be 0
    game.gameArea.appendChild(this.element);

    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;
    this.left = game.width;
    this.top = Math.floor(Math.random() * (game.height - this.height));

    // this prevents the glitch of having the enemy at position 0 0 for one frame
    this.element.style.left = this.left + "px";
    this.element.style.top = this.top + "px";
    // increase the speed depending on the level
    // this.speed = 10 * game.level;
    this.speed = 10;

    game.enemies.push(this);
  }

  move() {
    this.left -= this.speed;

    if (this.left <= 0 - this.width) {
      //   this.left = game.width;
      this.destroy();
    }

    this.element.style.left = this.left + "px";
    this.element.style.top = this.top + "px";
  }

  destroy() {
    // delete the html element
    this.element.remove();

    // delete the enemy from the array
    const index = game.enemies.indexOf(this);
    game.enemies.splice(index, 1);
  }
}
