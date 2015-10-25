// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var Game = function() {
  this.TIME_LIMIT = 3;
  this.secondsLeft = this.TIME_LIMIT;
  this.timer = null;

  this.difficulty = 10;   // Determines how big numbers are
  this.value1 = null;    // Current problem to solve
  this.value2 = null;    // Current problem to solve

  // this.score = 12;
  this.points = 5;
  this.count = 0;
  this.reset = 0;
};

// Function to generate random numbers in an interval
Game.prototype.rand = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Game.prototype.generateNewResults = function(){
  this.value1 = this.rand(1,this.difficulty);
  this.value2 = this.rand(1,this.difficulty);
}

Game.prototype.checkResult = function(userGuess){
  return (userGuess === this.value1 + this.value2);
}
