const quizStarter = document.getElementById('begin')
const quizContainer = document.getElementById('quiz');
quizContainer.style.display="none";
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
submitButton.addEventListener("click", submitHighScore);
const startQuiz = document.getElementById('start-quiz');
const timerEl = document.getElementById('timer');
const button0 = document.getElementById('btn-0')
const button1 = document.getElementById('btn-1')
const button2 = document.getElementById('btn-2')
const button3 = document.getElementById('btn-3')
const button4 = document.getElementById('btn-4')
let questionsIndex = -1;
var quizTimer = 100;
var keepScore = 0;
var timeout = null;
timer = 0;
const myQuestions = [
    {
      question: "What language is spoken in France?",
      answers: {
        a: "German",
        b: "French",
        c: "Swiss",
        d: "Urdu",
        e: "Jamaican Patois"
      },
      correctAnswer: "French"
    },
    {
      question: "Convert from Metric to English: How many feet are in 0.0 meters?",
      answers: {
        a: "0",
        b: "1",
        c: "2",
        d: "3",
        e: "3.1415926535"
      },
      correctAnswer: "0"
    },
    {
      question: "Give the correct spelling for these three nouns: CAT, DOG, PIG.",
      answers: {
        a: "Carpet, Grass, Mud",
        b: "Feline, Canine, Swine",
        c: "Tom, Goofy, Porky",
        d: "Cat, Dog, Pig",
        e: "Meow, Woof, Oink"
      },
      correctAnswer: "Cat, Dog, Pig"
    },
    {
        question: "Which religious organization is the Pope in charge of?",
        answers: {
          a: "The Westboro Baptist Church",
          b: "The Church of Scientology",
          c: "The Roman Catholic Church",
          d: "The People's Temple",
          e: "Heaven's Gate"
        },
        correctAnswer: "The Roman Catholic Church"
    },
    {
        question: "Plants need sunlight and _____ in order to grow.",
        answers: {
          a: "Milk",
          b: "Red Bull",
          c: "Gatorade",
          d: "Hennessy",
          e: "Water"
        },
        correctAnswer: "Water"
      }
    ]

var setTimer = function() {
  quizTimer-- 
}

function timedCount() {
  timerEl.innerHTML=timer
  timer--
  if (timer <= 0) {
    showResults()
  }
  else {
    timeout = setTimeout (timedCount, 1000) 
  }
  
}

function stopCount() {
  if(timeout!=null) {
  clearTimeout(timeout)
  timer = 0;
  timeout = null;
  }
}

function displayQuiz() {
        console.log(questionsIndex)
        ++questionsIndex;
        console.log(questionsIndex)
        var question = document.getElementById("question");
        console.log("questionsIndex is now" + questionsIndex + "number of questions is" + myQuestions.length)
        var questionObject = myQuestions[questionsIndex].question;
        question.innerHTML = questionObject;
        document.getElementById("btn-0").innerHTML=myQuestions[questionsIndex].answers.a;
        document.getElementById("btn-1").innerHTML=myQuestions[questionsIndex].answers.b;
        document.getElementById("btn-2").innerHTML=myQuestions[questionsIndex].answers.c;
        document.getElementById("btn-3").innerHTML=myQuestions[questionsIndex].answers.d;
        document.getElementById("btn-4").innerHTML=myQuestions[questionsIndex].answers.e;
};
startQuiz.addEventListener('click', resetQuiz)

function resetQuiz() {
  stopCount()
  timer = 60;
  timedCount()
  questionsIndex=-1;
  keepScore=0;
  quizContainer.style.display="block";
  displayQuiz()
}

function checkAnswer() {
  console.log(this.textContent)
  if(myQuestions[questionsIndex].correctAnswer == this.textContent) {
    console.log("Answer is correct")
    keepScore +=1
  }
  else {
    console.log("Answer is incorrect")
    timer -= 5
    keepScore +=0 
  }

  if (questionsIndex >=4) {
    showResults()
  }
  else {
    displayQuiz()
  }
}

function submitHighScore() {
  console.log("Submitting High Score")
  var initials = document.getElementById("initials").value
  saveToLocalStorage(initials, keepScore)
  console.log("initials")
}

button0.addEventListener('click', checkAnswer)
button1.addEventListener('click', checkAnswer)
button2.addEventListener('click', checkAnswer)
button3.addEventListener('click', checkAnswer)
button4.addEventListener('click', checkAnswer)

function showResults() {
  stopCount()
  quizContainer.style.display="none";
  var highScore = 0;
  if (window.localStorage.getItem("high-score")!=null) {
    highScore = window.localStorage.getItem("high-score");
  }
    document.getElementById("high-score").innerHTML=highScore;  
    document.getElementById("player-score").innerHTML=keepScore;
}

function saveToLocalStorage(initials, score) {
  var previousScore = window.localStorage.getItem("high-score")
  if (score >previousScore) {
  window.localStorage.setItem("high-score", score)
  }
  window.localStorage.setItem(initials+"-score", score)
}

// displayQuiz();

// submitButton.addEventListener('click', displayQuiz);




// GIVEN I am taking a code quiz

// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and score