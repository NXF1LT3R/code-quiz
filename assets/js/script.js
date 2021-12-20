const quizStarter = document.getElementById('begin')
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const answer = document.getElementById('answer');
let questionsIndex = 0;
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
      correctAnswer: "b"
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
      correctAnswer: "a"
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
      correctAnswer: "d"
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
        correctAnswer: "c"
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
        correctAnswer: "e"
      }
    ]


function displayQuiz(event){event.preventDefault
        console.log(myQuestions[questionsIndex])
        ++questionsIndex;
};
answer.addEventListener('click', displayQuiz())

function showResults(){
    
}

displayQuiz();

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