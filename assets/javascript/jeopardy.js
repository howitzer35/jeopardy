(function() {

  $(function(){

    function initGame() {
      console.log("so far so good")

      return $.get("http://jservice.io/api/random")
      .fail(function(req) {
        alert("nope")
      })
    }

    $.get("http://jservice.io/api/random", function(data){
      $("#question").html(data[0].question)
      $("#category").html(data[0].category.title)
      $("#pointValue").html(data[0].value)
      $("#apiAnswer").html(data[0].answer)

      let button = $("#button");
      let score = $("#score");
      let apiAnswer = data[0].answer
      let userAnswer = $("#userAnswer")

      function initGame(){

      }

      button.click(function() {
        console.log(apiAnswer);


        if(userAnswer == apiAnswer){

          let newScoreValue = parseInt(score.html()) + parseInt($("#pointValue").html())
          score.html(newScoreValue)

        }
        })

      })

    })
  })();
