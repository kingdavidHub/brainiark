function display() {
  if (quiz.quizFinished()) {
      quizFinished();
  } else {
      var el = document.querySelector('.question-holder');
      el.innerHTML = quiz.currentQuestion().text;
      var options = quiz.currentQuestion().choices;
      var infoParagraph = document.querySelector('.info-holder');
      infoParagraph.innerHTML = quiz.currentQuestion().info;

      for (var i = 0, j = options.length; i < j; i++) {
          var buttonOptions = document.getElementById(`butt-${i}`);
            buttonOptions.innerHTML = options[i];
          getIndex(`butt-${i}`, options[i]);
      }
  }
}


function getIndex(id, value) {
  var indexButton = document.getElementById(id);
  indexButton.onclick = function(){
      quiz.evaluate(value);
      quiz.eveluateWrong(value);
      quiz.calculateEvaluate(value);
      display();
  }
}

function quizFinished(){
  var quizCont = callId("quiz-cont");
  quizCont.style.display = 'none';

  var answerCont = callId("result-cont");
  answerCont.style.display = 'block';

  var point_update = document.getElementById("point_update");
  var update = quiz.point;
  point_update.innerHTML = `${update}`
}

function callId(id) {
  return document.getElementById(id);
}

function showCorrection() {
    var quizCont = callId("quiz-cont");
    quizCont.style.display = 'none';

    var answerCont = callId("result-cont");
    answerCont.style.display = 'none';

  document.querySelector('.correction-const').style.display = 'block'
  function wrongValid(){
      var wrongs = quiz.wrongs;
      var wrongGues = quiz.wrongAnswer;
      

      for(var r = 0;  r < wrongs.length; r++){
          var answer = wrongs[r].answer;
          var wrongQuestion = wrongs[r].text;
          var wranswer = wrongGues[r];

      var correctionList = document.getElementById("correction-list");
      correctionList.innerHTML += `
          <div class="col s12 l3">
                  <div class="corr-design">
                      <div class="corr-question">
                          <span>${wrongQuestion}</span>
                      </div>   
                      <div class="correction-correction">
                          <div class="row">
                              <div class="col" id="true-false">
                                  <div class="true">${answer}</div>
                                  <div class="false">${wranswer}</div>
                              </div>
                          </div>
                      </div> 
                  </div>
              </div>
      `
      
      }

  }
  wrongValid();
}


var quiz = new Quiz(questions);
display();
