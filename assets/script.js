var startBtn = document.querySelector(".btn btn-primary");
var timer = document.querySelector(".timer");
var secondsRemaining 
var questions = document.querySelector("#questions");
var choices = document.querySelector("#choices");
var container = document.querySelector("#container");
var viewHighScore = document.querySelector(".nav-link active scores");
var submitBtn = document.querySelector("#submitInitials")
var submitInt = document.querySelector("#nickname")

var questions = [  {
    question: "How old is my puppy?",
    answers: ["10", "200", "I don't have a puppy"],
    correctAnswer: ["I don't have a puppy"],

    question: "What color is my cat?",
    answers: ["brown", "blue", "black & white"],
    correctAnswer: ["black & white"],

    question: "who is the best NBA team?",
    answers: ["Warriors", "Clippers", "Lakers"],
    correctAnswer: ["Clippers"],

    question: "What color is a banana?",
    answers: ["red", "blue", "yellow"],
    correctAnswer: ["yellow"],

}

    ]
var secondsDown = 0;


startBtn.addEventListener("click", function(){
    container.innerHTML= ""
    renderQuestions()
})

function startTimer(){ 
    var timeIntervalUp = setInterval(function(){
        secondsDown--;
        document.getElementById("clock").innerHTML = "Time Remaining: " + secondsDown;
        if (secondsDown == 0) {
            clearInterval(timeIntervalUp);
            endTimer = 0;
            reload();
        }
     }, 1000);

   
function endTimer() {   
   document.getElementById("timer").innerHTML = "Time ran out";
}


function renderQuestions(){
    var currentQuestions = questionArr[counter]

    var newQuestionH1 = document.createElement("h1")
    newQuestionH1.textContent= currentQuestions.q
    container.appendChild(ulEl)

    var ulEl = document.createElement("ul")
    container.appendChild(ulEl)

for (var i = 0; i < currentQuestions.a.length; i++) {
    var newAnswer = document.createElement("button")
    var spacer = document.createElement("br")
    newAnswer.setAttribute("class", "btn btn-primary") 
    newAnswer.setAttribute("nav-link active scores", currentQuestions.a[i])
    newAnswer.textContent = currentQuestions.a[i]
    newAnswer.addEventListener("click", answeringQuestion)
    ulEl.appendChild(newAnswer)
    ulEl.appendChild(spacer)
}


function answeringQuestion(event){
    var currentQuestions = questionsArr[counter]
    var currentPressedButton = event.target
    var valueOfButton =currentPressedButton.getAttribute
    ("nav-link active scores")
    console.log(valueOfButton)

    if(valueOfButton == currentQuestions.correctAnswer){
        console.log("you're right")
        score ++
    } else {
        timer = timer -20
        console.log("you're wrong")
    }


    secondsDown++
    renderQuestions()
