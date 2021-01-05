const STORE = {
  questions: [
    {
      question: 'What is the best selling video game console of all time?',
      answers: [
        'Playstation 4',
        'Xbox',
        'Nintendo Wii',
        'Playstation 2'
      ],
      correctAnswer: 'Playstation 2'
    },
    {
      question: 'Who was ranked as the best video game character of all time on IGN in 2020?',
      answers: [
        'Mario',
        'Link',
        'Master Chief',
        'Cloud Strife'
      ],
      correctAnswer: 'Mario'
    },
    {
      question: 'What is the most profitable video game of all time to date?',
      answers: [
        'Honor of Kings',
        'Monster Strike',
        'Fortnite',
        'Pokemon Go'
      ],
      correctAnswer: 'Monster Strike'
    },
    {
      question: 'What is the average age of a gamer in the USA according to Wikipedia?',
      answers: [
        '9',
        '16',
        '35',
        '45'
      ],
      correctAnswer: '35'
    },
    {
      question: 'How much was first place grand prize money at the 2019 Fortnite World Cup?',
      answers: [
        '$1 million',
        '$3 million',
        '$5 million',
        '$10 million'
      ],
      correctAnswer: '$3 million'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  index: 0,
  score: 0,
};

function generateQuizInitialStateInterfaceString() {
  return `
    <div id="start-quiz-container">
      <div class="border text-centered red-container background">
        <p>Click the Start button if you are ready to take the ultimate video game quiz!</p>
      </div>
      <div class="controls text-centered">
      <button id="start-btn" class="start-btn btn button1">Start</button>
    </div>
  </div>`
}

function generateTemplateQuestionInterfaceString() {
  return `
  <div id="question-container">
    <h2 id="question-number">Question <span>1</span></h2>
    <h2 id="quiz-score">Score: <span>0</span> out of 5</h2>
    <div id="question" class="border2 red-containerbackground hide">What is the best selling video game console of all time?</div>
    <form class="hide" id="form">
      <div id="dynamic">
      </div>
      <input id="submit-btn" type="submit" class="submit-btn btn button1" value="Submit Answer">
    </form>
  </div>
  `;
}

function generateTemplatePossibleAnswersInterfaceString(index) {
  return `
    <ul>
      <li><input type="radio" name="choice" value="a"><span id="first_answer">${STORE.questions[index].answers[0]}</span></li>
      <li><input type="radio" name="choice" value="b"><span id="second_answer">${STORE.questions[index].answers[1]}</span></li>
      <li><input type="radio" name="choice" value="c"><span id="third_answer">${STORE.questions[index].answers[2]}</span></li>
      <li><input type="radio" name="choice" value="d"><span id="fourth_answer">${STORE.questions[index].answers[3]}</span></li>
    </ul>
    <div id="isCorrect">
  </div>
  `
}

function renderTemplateQuestionInterfaceString() {
  let templateQuestionInterfaceString = generateTemplateQuestionInterfaceString();
    templatePossibleAnswersInterfaceString = generateTemplatePossibleAnswersInterfaceString(0);
  $('main').html(templateQuestionInterfaceString);
  $('form div#dynamic').html(templatePossibleAnswersInterfaceString);
}

function renderNextQuestion(index) {
  let questionNumber = index + 1;
  renderQuestionNumber(questionNumber);
  renderQuestionText(index);
  renderPossibleAnswers(index);
}

function renderQuestionNumber(questionNumber) {
  $('#question-number span').text(questionNumber);
}

function renderQuestionText(index) {
  $('#question').text(STORE.questions[index].question);
}

function renderPossibleAnswers(index) {
  let possibleAnswersInterfaceString = generateTemplatePossibleAnswersInterfaceString(index);
  $('form div#dynamic').html(possibleAnswersInterfaceString);
}

function renderScore() {
  $('#quiz-score span').text(STORE.score);
}

function renderFinalScore(finalScore) {
  $('form div#dynamic').html('<br>');
  $('#question-number').text('');
  $('#quiz-score').text('');
  $('#question').addClass('final-score');
  $('#question').text(`FINAL SCORE: ${finalScore} out of 5`);
  $('#submit-btn').val('Restart Quiz');
}

function isCorrectAnswer() {
  let isCorrectAnswer = false;
  if ($('input[type=radio]:checked').siblings().text() == STORE.questions[STORE.index].correctAnswer) {
    isCorrectAnswer = true;
  }
  return isCorrectAnswer;
}

function handleSubmitAnswer() {
  $('form').submit(function(event) {
    event.preventDefault();
    if (STORE.index < STORE.questions.length) {
      $('#submit-btn').prop('disabled', 'true');
      if (isCorrectAnswer()) {
        STORE.score++;
        $('#isCorrect').text('CORRECT');
      } else {
        $('#isCorrect').text(`INCORRECT! The correct answer is "${STORE.questions[STORE.index].correctAnswer}"`);
      }
      setTimeout(function(){
        renderScore();
        clearCheckedRadioButton();
        STORE.index++;
        if (STORE.index < STORE.questions.length) {
          renderNextQuestion(STORE.index);
        } else {
          renderFinalScore(STORE.score);
        }
        $('#submit-btn').removeAttr('disabled');
      }, 2000);
    } else {
      resetQuizData();
      renderNextQuestion(STORE.index);
      return;
    }
  });
}

function resetQuizData() {
  STORE.index = 0;
  STORE.score = 0;
  $('#submit-btn').val('Submit Answer');
  $('#question').removeClass('final-score');
  $('#quiz-score').html('Score: <span>0</span> out of 5');
  $('#question-number').html('Question <span>1</span>');
  renderScore();
}

function clearCheckedRadioButton() {
  $('input[type=radio]:checked').prop('checked', false);
}

function handleStartQuiz() {
  $('#start-btn').click(function (event) {
    renderTemplateQuestionInterfaceString();
    handleSubmitAnswer();
  });
}

function init() {
  let quizInitialStateInterfaceString = generateQuizInitialStateInterfaceString();
  $('main').html(quizInitialStateInterfaceString);
  handleStartQuiz();
}

$(init);