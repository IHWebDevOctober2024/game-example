/* 
// is this one necessary?
class Character {
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
    this.left = 0;
    this.top = 0;
    this.speed = 10;
    this.direction = null;
  }

  move() {
    switch (this.direction) {
      case "up":
        if (this.top <= 0) {
          this.top = 0; // we make sure the player stays at position top 0 and not at -10...
        } else {
          this.top -= this.speed;
        }
        break;
      case "down":
        if (this.top >= game.height - this.height) {
          this.top = game.height - this.height;
        } else {
          this.top += this.speed;
        }
        break;
      case "left":
        if (this.left <= 0) {
          this.left = 0;
        } else {
          this.left -= this.speed;
        }
        break;
      case "right":
        if (this.left >= game.width - this.width) {
          this.left = game.width - this.width;
        } else {
          this.left += this.speed;
        }
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
    this.element.style.top = this.top + "px";
    this.element.style.left = this.left + "px";
  }
}

// we create the new player to keep track of all the properties
let player = new Player();
