<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  </head>
  <body>

    <b>Question:</b><div id="question"></div>
    <b>Category:</b><div id="category"></div>
    <b>Point Value:</b><div id="value"></div>

    <input type="text" id="userAnswer" /> <button id="submitButton">submit answer</button>
    <br>
    <b>Current Score:</b><div id="userScore">0</div>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.js"></script>
    <script>
      (function(){

        $(function(){

          //initialize some variables we need to work with later
          let correctAnswer;
          let pointValue;
          let userScore = 0;

          //make initial ajax request and handle failure
          function initGame(){
            //hit the api endpoint and put the question in the div with the id of questions
            return $.get("http://jservice.io/api/random")
              .fail(function(req){
                alert("no game for you")
              })
          }


          //function that updates dom elements for game
          function updateDom(dataNeededToUpdateDOM){
              $("#question").html(dataNeededToUpdateDOM[0].question)
              $("#category").html(dataNeededToUpdateDOM[0].category.title)
              $("#value").html(dataNeededToUpdateDOM[0].value)
              pointValue = dataNeededToUpdateDOM[0].value;
              correctAnswer = dataNeededToUpdateDOM[0].answer
              console.log(correctAnswer)
              $("#userAnswer").val("")
          }

          //long form jquery ajax get request. same as above. here as an example for comparison
          // $.ajax({
          //   url: "http://jservice.io/api/random",
          //   method: "GET",
          //   success: function(data) {
          //     $("#question").html(data[0].question)
          //     $("#category").html(data[0].category.title)
          //     $("#value").html(data[0].value)
          //     pointValue = data[0].value;
          //     correctAnswer = data[0].answer
          //     console.log(correctAnswer)
          //     $("#userAnswer").val("")
          //   }
          // })

          //call the api for the first time and store into variable called result
          let result = initGame();

          //use the done promise on result to update the dom
          result.done(function(data){
            updateDom(data)
          });

          //button click to validate answer
          $("#submitButton").click(function(){

            let userAnswer = $("#userAnswer").val();
            if(userAnswer.toLowerCase() === correctAnswer.toLowerCase()){
              alert("you da man bro")
              userScore += pointValue;
              $("#userScore").html(userScore)
            }else{
              alert("stay in school")
            }

            //second api call to reset the game after user answers questions
            //also uses done promise to update the DOM
            let result = initGame();
            result.done(function(data){
              updateDom(data)
            })

          })



        })


      })()
    </script>
  </body>
</html>
