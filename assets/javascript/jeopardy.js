(function() {

  $(function(){

    const button = $("#button")
    const score = $("#score")
    const userAnswer = $("#userAnswer")
    let apiAnswer

    button.click(function() {
      if (userAnswer.val() === apiAnswer) {
        let newScoreValue = parseInt(score.html()) + parseInt($("#pointValue").html())
        score.html(newScoreValue)
      }
      initGame()
    })

    function throwErrorMessage(_) { alert("nope") }

    function writeHtml([thisQuestion]) {
      userAnswer.val('')
      $("#question").html(thisQuestion.question)
      $("#categoryName").html(thisQuestion.category.title)
      $("#pointValue").html(thisQuestion.value)
      apiAnswer = thisQuestion.answer
      $("#apiAnswer").html(apiAnswer)
    }

    function initGame() {
      $.get("http://jservice.io/api/random")
        .done(writeHtml)
        .fail(throwErrorMessage)
    }

    initGame()

  })
})();
