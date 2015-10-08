$(function(){
  var game = new Game();
  // console.log(game.rand(5,7));
  // $("#counter").html(data.currentTime);
  $("#solution-input").focus(setTimer);
  $("#solution-input").change(newSet);

  console.log(game.count);
  game.count = counter(game.count);

  var value1 = game.rand(0,10);
  var value2 = game.rand(0,10);
  var expectedResult = game.result(value1,value2);
  $("#equation").html(value1 + " + " + value2);


  function counter(currentCount){
    if (currentCount == 0){
      ///initialize Game
      // var value1 = game.rand(0,10);
      // var value2 = game.rand(0,10);
      // var expectedResult = game.result(value1,value2);
      // $("#equation").html(value1 + " + " + value2);
    }else{
      ///new Equation->getAnswer
    }
      // console.log(currentCount++);
      return currentCount++;
  }

  function newSet(event){
    // counter(game.count);
    console.log(game.count);
    game.count = game.count++ ;
    newAnswer = getAnswer(event);
    console.log(newAnswer);
  }


  function getAnswer(event){
    // console.log(event.target.id);
    // var expectedResult = value;
    if ($(event.target).val() == expectedResult){
      console.log("first print: correct");
      var expectedAnswer = generateEquation(event);
      console.log("second print:" + expectedAnswer);
      $(event.target).val("");
      setTimer();
      return expectedAnswer;
    }else{
      console.log("Wrong Answer");
    };
  }

  function generateEquation(event){
    var value1 = game.rand(0,10);
    var value2 = game.rand(0,10);
    expectedResult = value1+value2;
    console.log("generate Equation Actoion");
    $("#equation").html(value1 + " + " + value2);
    return game.result(value1, value2);
  }
})



;