// (function(){
//   let button = $("#button");
//   let score = $("#score");
//
//   button.click(function() {
//     console.log("button clicked");
//
//     let points = parseInt(score.html()) + "#point-value"
//     //REMEMBER THAT THE POINT SCORE WILL BE ADDED, NOT 1
//     score.html(points)
//     }
//   )
//
// })();



(function() {

  $(function(){


    //en classe, dans le matin avec instruction
    //let score = 0;
    //let pointValue;
    //letcorrect Answer;


****//need to rerun the .get request to generate new answers...can wrap in another
//function: function initGame()
//BUT you still need to call the function in order to get a question
//so under the function, write initGame();
//and then again underneath everything else
//he decided to put $("#useranswer").val("") in a function in order to clear the board

    //hit API endpoint and put the question in the div with the ID of question
    $.get("http://jservice.io/api/random", function(data){
    //   //this makes a get request, needs to know where to make it to
    //   //console.log(data[0].question);

      $("#question").html(data[0].question)
      $("#category").html(data[0].category.title)
      $("#pointValue").html(data[0].value)
      $("#apiAnswer").html(data[0].answer)
      //try removing the .html bit

      //what needs to be moved out of this .get request for scope?

      //per en classe, move these up out of the .get
      let button = $("#button");
      let score = $("#score");
      let apiAnswer = data[0].answer
      let userAnswer = $("#userAnswer") //this may've been removed in class
      //en classe
      //pointValue = data [0].value
      //correctAnswer=data[0].answer

      button.click(function() {
        console.log(apiAnswer);

        //score.html(newScoreValue)

        if(userAnswer == apiAnswer){
          //if*userAnswer.toLowerCase() === correctAnswer.toLowerCase(){
          //console.log("something");
          //per en classe:
            //alert ("yep")
            //********userScore+=pointValue;
            //$("userScore").html(userScore) - if they got it right, otherwise, nope
            //else
            //alert ("nawp")}
          let newScoreValue = parseInt(score.html()) + parseInt($("#pointValue").html())
          score.html(newScoreValue)


        }
        })

        //per en classe:
        //$(submitButton).click(function)


        //let userAnswer = $("#userAnswer").val();






    })

      // $.get("http://jservice.io/api/random?count=5", function(data){
      //   // $.each(data, function(index, clue){
      //   //   console.log(clue.question)
      //   // })
      //   for(let i = 0; i < data.length; i++){
      //     console.log(data[i].question)
      //     //this for loop is the same as the .each above
      //   }
      // })

    })
  })();
