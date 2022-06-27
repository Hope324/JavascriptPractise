const questions = [
  {
      question: 'What is the capital of India?',
      options: [
          {value: 'Delhi'},
          {value: 'Mumbai'},
          {value: 'Chennai'},
          {value: 'kolkata'},
      ],
      correctAnswer: 'Delhi'
  },
  {
      question: 'Which is the largest state in area?',
      options: [
          {value: 'Maharashtra'},
          {value: 'Uttar Pradesh'},
          {value: 'Rajasthan'},
          {value: 'Gujarat'},
      ],
      correctAnswer: 'Rajasthan'
  },
  {
      question: 'What is the capital of Maharashtra?',
      options: [
          {value: 'Pune'},
          {value: 'Mumbai'},
          {value: 'Chennai'},
          {value: 'Patna'},
      ],
      correctAnswer: 'Mumbai'
  },
  {
      question: 'How many states are in India?',
      options: [
          {value: '27'},
          {value: '28'},
          {value: '29'},
          {value: '30'},
      ],
      correctAnswer: '28'
  },

];

var answerSheet = {};
var selectedQuestion = 0;
var questionsAttempted = 0;



function createQuestion(question){
  var questionDiv = document.querySelector('.question-viewer');
  var questionText = document.createElement('p');
  questionText.className = 'question';
  questionText.textContent = (selectedQuestion+1) + '. ' + question.question;
  questionDiv.appendChild(questionText);
  createQuestionOptions(question.options, questionDiv);
  if(selectedQuestion == 0){
      document.getElementById('previous').disabled = true;
      document.getElementById('previous').style.cursor = 'not-allowed';
  }
  else{
      document.getElementById('previous').disabled = false;
      document.getElementById('previous').style.cursor = 'pointer';
  }
  if(selectedQuestion == (questions.length -1)){
      document.getElementById('next').disabled = true;
      document.getElementById('next').style.cursor = 'not-allowed';
  }
  else{
      document.getElementById('next').disabled = false;
      document.getElementById('next').style.cursor = 'pointer';
  }
  // return questionText
}

function createQuestionPointer(index){
  var questionPointer = document.createElement('button');
  questionPointer.className = 'explorer-btn';
  questionPointer.id = 'btn-'+index;
  questionPointer.textContent = index + 1;
  questionPointer.addEventListener('click', function(){
      selectedQuestion = index;
      document.querySelector('#btn-'+selectedQuestion).classList.add('visited');
      document.querySelector('.question-viewer').textContent = '';
      createQuestion(questions[selectedQuestion]);
  });
  document.querySelector('.question-explorer').appendChild(questionPointer)
  // return questionPointer
}

function createQuestionOptions(options, questionDiv) {
  for (var i = 0; i < options.length; i++) {
      var option = options[i];
      var optionElement = document.createElement('div');
      optionElement.className = 'option';
      var optionRadio = document.createElement('input');
      optionRadio.type = 'radio';
      optionRadio.name = 'question-option';
      optionRadio.value = option.value;
      
      optionRadio.addEventListener('change', function () {
          answerSheet[selectedQuestion] = document.querySelector('input[name="question-option"]:checked').value;
          document.getElementById('btn-'+selectedQuestion).className = 'explorer-btn attempted';
          questionsAttempted += 1;
      });
  
      var optionLabel = document.createElement('label');
      optionLabel.textContent = option.value;

      optionElement.appendChild(optionRadio);
      optionElement.appendChild(optionLabel);
      questionDiv.appendChild(optionElement);
  }
}

function questionExplorer(){
  for (let i = 0; i < questions.length; i++) {
      createQuestionPointer(i);
  }
  document.getElementById('btn-'+selectedQuestion).className = 'explorer-btn visited';
  createQuestion(questions[selectedQuestion]);
}

function changeQuestion(factor) {
  if(selectedQuestion + factor < 0 || selectedQuestion + factor > questions.length - 1){
      return;
  } 
  else{
      selectedQuestion += factor;
  }
  document.querySelector('#btn-'+selectedQuestion).classList.add('visited');
  document.querySelector('.question-viewer').textContent = '';
  createQuestion(questions[selectedQuestion])
}

function submitTest(){
  var totalScore = 0;
  var attemptedCorrect = 0;
  var attemptedWrong = 0;
  for (var i = 0; i < questions.length; i++) {
      var question = questions[i];
      var correctAnswer = question.correctAnswer;
      if (answerSheet[i]) {
          if (answerSheet[i] === correctAnswer) {
              totalScore += 4;
              attemptedCorrect += 1;
          }
          else{
              attemptedWrong += 1;
          }
      }
  }
  document.querySelector('#attempted').textContent = 'No. of Questions Attempted : ' + questionsAttempted;
  document.querySelector('#attemptedCorrect').textContent = 'No. of Correct Answers : ' + attemptedCorrect;
  document.querySelector('#attemptedWrong').textContent = 'No. of Wrong Answers : ' + attemptedWrong;
  document.querySelector('#score').textContent = 'Your Score out of : ' + totalScore + '/' + questions.length*4;
  // alert("Your total score is " + totalScore);
  document.querySelector('.test-window').style.display = 'none';
  document.querySelector('.score-window').style.display = 'block';
}

document.querySelector("#submit-test").addEventListener("click", function () {
  submitTest();
});

document.querySelector("#previous").addEventListener("click", function () {
  changeQuestion(-1);
});

document.querySelector("#next").addEventListener("click", function () {
  changeQuestion(1);
});



function setTimer(){
  var startMinutes = 5;
  var startTime = startMinutes*60;
  var time = startTime;
  
  var timerElement = document.querySelector('#timer')
  setInterval(function (){
      let minutes = Math.floor(startTime / 60);
      let seconds = startTime % 60;
  
      seconds = (seconds < 10) ? ('0' + seconds) : (seconds);
      minutes = (minutes < 10) ? ('0' + minutes) : (minutes);
  
      timerElement.textContent = `Time Left - ${minutes}:${seconds}`;
      startTime--;
      if(startTime < 0){
          submitTest();
      }
      if(startTime < time/2){
          document.querySelector('#timer').style.color = 'rgb(255, 189, 91)';
      }
      if(startTime < time/4){
          document.querySelector('#timer').style.color = 'rgb(255, 91, 91)';
      }
  }, 1000);
}


document.querySelector("#review").addEventListener("click", function (){
  document.querySelector('#btn-'+selectedQuestion).classList.add('review');
  document.querySelector('#btn-'+selectedQuestion).classList.remove('visited');
});





document.querySelector('#close-test').addEventListener('click', function(){
  window.close();
})

document.getElementById('instructions-list').firstElementChild.textContent = 'You will have ' + questions.length + ' questions to attempt.';