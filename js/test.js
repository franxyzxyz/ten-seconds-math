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
}

function setTimer(){
  secondsLeft = setInterval(everySecond,1000);
};

