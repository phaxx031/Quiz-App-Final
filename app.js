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
  score: 0,
};

function renderQuiz() {
  console.log('`renderQuiz` ran');
  generateQuizInterface();
}

function generateQuizInitialState() {
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

function handleStartQuiz() {
  $('#start-btn').click(function(event) {
    $('main').html('<h2 id="question-number">Question <span></span> </h2>');
    $('main').append('<h2 id="quiz-score">Score: <span>0</span> out of 5</h2>');
    $('main').append('<div id="question" class="border2 red-containerbackground hide"></div>')
    $('main').append('<form class="hide" id="form"> <ul> <li><input type="radio" name="choice" value="a"><span id="first_answer"></span></li> <li><input type="radio" name="choice" value="b"><span id="second_answer"></span></li> <li><input type="radio" name="choice" value="c"><span id="third_answer"></span></li> <li><input type="radio" name="choice" value="d"><span id="fourth_answer"></span></li> </ul> <input id="submit-btn" type="submit" class="submit-btn btn button1" value="Submit"> </form>')
  });
  generateQuizInterface();
}

function generateQuizInterface() {
  
}

function IsCorrectQuestion() {

}
// this function above is whether question is correct or not

function handleSubmitAnswer() {

}

function init() {
  let startingQuizInterfaceString = generateQuizInitialState();
  $('main').html(startingQuizInterfaceString);
  handleStartQuiz();

}

$(init);

//submit button event and click for the start button

// final is the init function that we previously have

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

/*
  $('main').append('<div id="question" class="border2 red-containerbackground hide"></div>')
  $('main').append('<form class="hide" id="form"> <ul> <li><input type="radio" name="choice" value="a"><span id="first_answer"></span></li> <li><input type="radio" name="choice" value="b"><span id="second_answer"></span></li> <li><input type="radio" name="choice" value="c"><span id="third_answer"></span></li> <li><input type="radio" name="choice" value="d"><span id="fourth_answer"></span></li> </ul> <input id="submit-btn" type="submit" class="submit-btn btn button1" value="Submit"> </form>')
*/