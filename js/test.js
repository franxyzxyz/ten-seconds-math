var timer;
var countFrom = 10;

var data = {};

var everySecond = function(){
  //current time = minus time from countFrom
  // $("#counter").html(countFrom--);
  var currentTime = countFrom--;
  if (currentTime <= 0){
    clearInterval(secondsLeft);
    $("#counter").html('Time\s Out');
  }else{
    $("#counter").html(currentTime);
  };
  // console.log(game.resetMeter);
  // if (game.resetMeter == "123"){
  //     clearInterval(secondsLeft);
  // }
}

function setTimer(){
  secondsLeft = setInterval(everySecond,1000);
};

