# My game

## Description

We are going to have a player that moves up down left and right. The player has to dodge the enemies that are coming from the right side of the screen.

## Classes

### Character

This class will have the following attributes:

- x: the x position of the character (horizontal axis)
- y: the y position of the character (vertical axis)
- speed: the speed of the character
- width: the width of the character
- height: the height of the character
- element: the html element

This class will have two extendend classes:

#### Player

#### Enemy

### Game

The game class controls all the game logic. It will have the following attributes:

- isgameover: a boolean that will be true when the game is over
- player: the player object
- enemies: an array of enemies
- lives: the number of lives the player has
- gameArea: the html element that will contain the game

## Tasks

- Create the html with the game area and the player
