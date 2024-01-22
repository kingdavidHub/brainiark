function Question(text, choices, info, answer) {
    this.text = text;
    this.choices = choices;
    this.info = info;
    this.answer = answer;
}

Question.prototype.correctAnswer = function (guessValue) {
    return guessValue === this.answer;
}

function Quiz(questions) {
    this.questions = questions;
    this.point = 0;
    this.questionIndex = 0;
    this.wrongAnswer = [];
    this.wrongQuestion = [];
    this.wrongs = [];
}

Quiz.prototype.quizFinished = function () {
    return this.questionIndex === this.questions.length;
}

Quiz.prototype.evaluate = function(check){
    if(this.currentQuestion().correctAnswer(check) === false){
        this.wrongAnswer.push(check)
    }else{
        return false;
    }
}

Quiz.prototype.eveluateWrong = function(check){

    /**
     * Getting the correction
     * Input to correction page
     * The correct answer will be dissplayed
     * countinue tomorrow
     */

    if(this.currentQuestion().correctAnswer(check) === false){
       this.wrongs.push(this.currentQuestion());
    }
}

Quiz.prototype.currentQuestion = function () {
    return this.questions[this.questionIndex]
}

Quiz.prototype.calculateEvaluate = function (point) {
    if (this.currentQuestion().correctAnswer(point)) {
        this.point +=5
    }
    this.questionIndex++
}

Quiz.prototype.multiButtonShowDisplay = function (sleep) {
    var z = this.questionIndex + sleep
    return this.questions[z]
}

