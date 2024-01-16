// A start button that when clicked a timer starts and the first question appears.
var startButton = document.getElementById("start")
var startScreenEl = document.getElementById("start-screen")
var questionsEl = document.getElementById("questions")
var endScreenEl = document.getElementById("end-screen")
var questionTitleEl = document.getElementById("question-title")
var choicesEL = document.getElementById("choices")
var correctSound = new Audio('../assets/sfx/correct.wav');
var incorrectSound = new Audio('../assets/sfx/incorrect.wav')
var feedbackEL = document.getElementById("feedback")
var questionIndex = 0;


function startQuiz(event) {
startScreenEl.setAttribute("class", "hide")
questionsEl.setAttribute("class", "start")

renderQuestion();
}

function renderQuestion() {
var currentQ = questions[questionIndex];
console.log(currentQ);
questionTitleEl.textContent = currentQ.title;
choicesEL.innerHTML="" 
    for (let i = 0; i < currentQ.choices.length; i++) {
        const choice = currentQ.choices[i];
        var btn = document.createElement("button")
    btn.textContent = choice;
    btn.addEventListener("click", onChoiceClick)
    choicesEL.append(btn) 

    }
}

function onChoiceClick(event) {
    var userInput = event.target.textContent
    var currentQ = questions[questionIndex];
    var correctAnswer = (currentQ.answer);
    if (userInput == correctAnswer) {
        correctSound.play()
    }
else incorrectSound.play() 
    
    nextQuestion();
}





function nextQuestion(event) {
    questionIndex = questionIndex + 1;
    renderQuestion()
if (questionIndex > 2) {
    endScreenEl.setAttribute("class", "start")
        questionsTitleEl.setAttribute("class", "hide")
}
}

function endQuiz() {
        
        
}
startButton.addEventListener("click", startQuiz)
// * Questions contain buttons for each answer.
// * 
// * When answer is clicked, the next question appears
// * 
// * If the answer clicked was incorrect then subtract time from the clock

// * The quiz should end when all questions are answered or the timer reaches 0.

// * When the game ends, it should display their score and give the user the ability to save their initials and their score
