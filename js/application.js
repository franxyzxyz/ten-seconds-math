$(function(){
  var game = new Game();
  var timer;
  var countFrom = game.TIME_LIMIT;
  $("#counter").html("Time Left: " + parseFloat(game.TIME_LIMIT).toFixed(2));

  // console.log(game.rand(5,7));
  // $("#counter").html(data.currentTime);
  $("#solution-input").focus(setTimer);
  $("#solution-input").on("keyup", newSet);

  // console.log(game.count);
  // game.count = counter(game.count);
  game.generateNewResults();

  $("#equation").html(game.value1 + " + " + game.value2);

  function newSet(event){
    var userGuess = parseInt( $("#solution-input").val() );
      $("#solution-input").css("border","0px")

    if (game.checkResult(userGuess)) {
      $("#solution-input").css("border","0px")
      game.count++;
      console.log("Correct count: " + game.count);
      console.log("The Answer is Correct");

      var expectedAnswer = generateEquation(event);
      $("#solution-input").val("");
      game.reset = 1;


    }else{
      // console.log("Wrong Answer");
      $("#solution-input").css("border","5px solid red")
    };

    if (game.reset == 1){
      // console.log("Game.secondsLeft = " + game.secondsLeft);
      game.secondsLeft = game.TIME_LIMIT;
      game.reset= 0;
      $("#counter").html("Time Left: " + parseFloat(game.TIME_LIMIT).toFixed(2));

      setTimer;
    }
  }

  function generateEquation(event){
    game.generateNewResults();
    $("#equation").html(game.value1 + " + " + game.value2);
    return game.value1 + game.value2;
  }


  var everySecond = function(){
    //current time = minus time from countFrom
    // $("#counter").html(countFrom--);
    game.secondsLeft--;

    if (game.reset == 1){
      game.reset = 0;
      clearInterval(game.timer);
    };

    if (game.secondsLeft <= 0){
      clearInterval(game.timer);
      $("#counter").html('GAME OVER');
      $("#solution-input").off();
    }else{
      $("#counter").html("Time Left: " + parseFloat(game.secondsLeft).toFixed(2));
    };
  }

  function setTimer(){
    game.timer = setInterval(everySecond,1000);
  };


})



;