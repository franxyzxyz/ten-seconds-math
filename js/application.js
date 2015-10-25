$(function(){
  var game = new Game();
  var timer;
  var countFrom = game.TIME_LIMIT;
  $("#counter").html("Time Left: " + parseFloat(game.TIME_LIMIT).toFixed(2));

  $("#solution-input").focus(setTimer);
  $("#solution-input").on("keyup", newSet);

  game.generateNewResults();
  $("#equation").html(game.value1 + " + " + game.value2);

  function newSet(event){
    var userGuess = parseInt( $("#solution-input").val() );
      $("#solution-input").removeClass("error");

      if (game.checkResult(userGuess)) {
      $("#solution-input").removeClass("error");
      game.count++;

      var expectedAnswer = generateEquation();
      $("#solution-input").val("");
      game.reset = 1;


    }else{
      $("#solution-input").addClass("error");
    };

    if (game.reset == 1){
      game.secondsLeft += game.TIME_LIMIT;
      game.reset= 0;
      $("#counter").html("Time Left: " + parseFloat(game.secondsLeft).toFixed(2));

      setTimer;
    }
  }

  function generateEquation(){
    game.generateNewResults();
    $("#equation").html(game.value1 + " + " + game.value2);
    return game.value1 + game.value2;
  }


  var everySecond = function(){
    game.secondsLeft--;

    if (game.reset == 1){
      game.reset = 0;
      clearInterval(game.timer);
    };

    if (game.secondsLeft <= 0){
      clearInterval(game.timer);
      $("#counter").html('GAME OVER');
      $("#solution-input").off();
      $("#solution-input").css("display","none");
      $("#score").html("Your Overall Score: " +game.count*game.points);
      $("#restart").css("visibility","visible");
    }else{
      $("#counter").html("Time Left: " + parseFloat(game.secondsLeft).toFixed(2));
    };
  }

  function setTimer(){
    game.timer = setInterval(everySecond,1000);
  };


})



;