/* class Character {
  constructor(x, y, width, height, element, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.element = element;
    this.speed = 10;
  }
} */

// we create the class with the initial setup for the player
class Player {
  constructor() {
    this.element = document.querySelector("#player");
    this.width = this.element.getBoundingClientRect().width;
    this.height = this.element.getBoundingClientRect().height;
    this.x = 0;
    this.y = 0;
    this.speed = 10;
    this.direction = null;
  }

  move() {
    switch (this.direction) {
      case "up":
        this.y -= this.speed;
        break;
      case "down":
        this.y += this.speed;
        break;
      case "left":
        this.x -= this.speed;
        break;
      case "right":
        this.x += this.speed;
        break;
    }
    /*
    // Old method not refactored
    if (direction === "up") {
      this.y -= this.speed;
    } else if (direction === "down") {
      this.y += this.speed;
    } else if (direction === "left") {
      this.x -= this.speed;
    } else if (direction === "right") {
      this.x += this.speed;
    }
      */
    this.element.style.top = this.y + "px";
    this.element.style.left = this.x + "px";
  }
}

// we create the new player to keep track of all the properties
const player = new Player();
