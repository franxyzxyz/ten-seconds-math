// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var Game = function() {
  //------------------------------------------
  // Time
  //------------------------------------------
  // Default value for time
  this.TIME_LIMIT = 3;
  // Current seconds left
  this.secondsLeft = this.TIME_LIMIT;
  // Reference to timer Interval
  this.timer = null;

  //------------------------------------------
  // Problems
  //------------------------------------------
  this.difficulty = 50;   // Determines how big numbers are
  this.value1 = null;    // Current problem to solve
  this.value2 = null;    // Current problem to solve

  //------------------------------------------
  // Score
  //------------------------------------------
  this.score = 12;

  this.count = 0;
  this.reset = 0;
};

// Function to generate random numbers in an interval
Game.prototype.rand = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Game.prototype.generateNewResults = function(){
  this.value1 = this.rand(0,10);
  this.value2 = this.rand(0,10);
}

Game.prototype.checkResult = function(userGuess){
  return (userGuess === this.value1 + this.value2);
}
