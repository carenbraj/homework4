// var startBtn = document.querySelector(".btn btn-primary");
// var timer = document.querySelector(".timer");
// // var secondsRemaining 
// // var questions = document.querySelector("#questions");
// // var choices = document.querySelector("#choices");
// var gameContainer = document.querySelector("#container");
// // var viewHighScore = document.querySelector(".nav-link active scores");
// var submitBtn = document.querySelector("#submitInitials")
// // var submitInt = document.querySelector("#nickname")

var questionArr  = [  
    {
    question: "How old is my puppy?",
    answers: ["10", "200", "I don't have a puppy"],
    correctAnswer: "I don't have a puppy"
    },
    {
    question: "What color is my cat?",
    answers: ["brown", "blue", "black & white"],
    correctAnswer: "black & white"
    },

    {
    question: "who is the best NBA team?",
    answers: ["Warriors", "Clippers", "Lakers"],
    correctAnswer: "Clippers"
    },

    {
    question: "What color is a banana?",
    answers: ["red", "blue", "yellow"],
    correctAnswer: "yellow"
    },

    ];

var startBtn = document.querySelector("#startBtn")
var gameContainer = document.querySelector("#container")

var counter = 0
var score = 0
var timer = 100
var stopTimer = false

startBtn.addEventListener("click", function() {
    var timerOnScreen = document.querySelector("timer")
    timerOnScreen.textContent = timer
    document.querySelector(".time").appendChild(timerOnScreen)

   renderQuestions() 
   gameTimer()
});

function renderQuestions(){
    gameContainer.innerHTML= ""
    var currentQuestions = questionArr[counter]

    var newQuestionH1 = document.createElement("container")
    newQuestionH1.textContent= currentQuestions.q
    gameContainer.appendChild(newQuestionH1)

    var ulEl = document.createElement("ul")
    gameContainer.appendChild(ulEl)

for (var i = 0; i < currentQuestions.a.length; i++) {
    var newAnswer = document.createElement("button")
    var spacer = document.createElement("br")
    newAnswer.setAttribute("class", "btn btn-primary") 
    newAnswer.setAttribute("data-answer", currentQuestions.a[i])
    newAnswer.textContent = currentQuestions.a[i]
    newAnswer.addEventListener("click", answeringQuestion)
    ulEl.appendChild(newAnswer)
    ulEl.appendChild(spacer)
}


function answeringQuestion(event){
    var currentQuestions = questionsArr[counter]
    var currentPressedButton = event.target
    var valueOfButton =currentPressedButton.getAttribute("data-answer")
    ("nav-link active scores")
    console.log(valueOfButton)

    if(valueOfButton == currentQuestions.correctAnswer){
        console.log("you are correct")
        score ++
    } else {
        timer = timer -20
        console.log("you are wrong")
        
    }
    counter++

    if(counter >= questionArr.length){
        endgame()
    } else {
        renderQuestions()
    }
}

function endgame(text) {
    gameContainer.innerHTML = ""
    var scoreEl = document.createElement("h3")
    var form =document.createElement("form")
    var inputName = document.createElement("input")
    var submitBtn = document.createElement("button")

    inputName.setAttribute("finalScore", "Save your Highscore")
    inputName.setAttribute("name", "playerName")
    submitBtn.textContent = "Save"
    submitBtn.addEventListener("click", saveHigh)

    scoreEl.textContent = "Your score is : " + score
    gameContainer.appendChild(scoreEl)

    form.appendChild(inputName)
    form.appendChild(submitBtn)
    gameContainer.appendChild(form)

    counter = 0
    score = 0
    timer = 100
    
}

function gameTimer (){
    var gameT = setInterval(function() {
    timer--

    var timerOnScreen = document.querySelector("h2")
    timerOnScreen.textContent = timer;

    if(timer == 0 || conter >= questionArr.length || stopTimer) {
        document.querySelector(".time").innerHTML = ""
        clearInterval(gameT)
        endgame()
    }
}, 1000);
}

function saveHighScore(e){
    event.preventDefault()

    var playerName = document.querySelector("input").value
    var currentScores = localStorage.getItem("scores")

    if(currentScores !== null){
        currentScores =JSON.parse(currentScores)

        gameResult = {player: playerName, score: playerScore};
        currentScores.push(gameResult);
        currentScores.sort(function(a,b) { 
            return (b.score - a.score) });

            localStorage.setItem("scores", JSON.stringify(currentScores))

        console.log(currentScores)
    } else {
        currentScores = []
        currentScores.push({player:playerName, score:100})

        localStorage.setItem("scores", JSON.stringify(currentScores))
    }

    gameContainer.innerHTML=""

    var listHs = document.createElement("ol")

    for (let i = 0; i < currentScores.length; i++) {
      var listEl = document.createElement("li")
      listEl.textContent = currentScores[i].player + ":" + currentScores[i].score

      listHs.appendChild(listEl)
        
    }
    
    gameContainer.appendChild(listHs)
}
}


