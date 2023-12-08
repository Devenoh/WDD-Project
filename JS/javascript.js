const allQuestionsAndAnswers = [
    { question: "What are hydroelectric plants powered by?", answer: ["water", "moving water", "tides", "resevoirs"] },
    { question: "Hydroelectric plants store and control water with structures called...", answer: ["dams", "dam"] },
	{ question: "The type of energy in the moving water is called _______ energy.", answer: ["kinetic"] },
	{ question: "When water flows through a hydroelectric plant, it passes through a _______.", answer: ["turbine"] },
	{ question: "In what country is the largest hydroelectric plant located?", answer: ["china"] },
	{ question: "A ______ _______ system uses extra electricity to move used water back into the resevoir.", answer: ["pumped storage"] },
	{ question: "What is the biggest hydroelectric plant in the world?", answer: ["three gorges", "three gorges dam"] },
	{ question: "How many hydroelectric plants are in Ireland?", answer: ["26", "twenty-six", "twenty six"] },
	{ question: "In what year was the Ardnacrusha hydroelectric plant completed?", answer: ["1929"] },
	{ question: "What is the biggest hydroelectric plant in Ireland?", answer: ["ardnacrusha", "ardnacrusha power plant"] }
];

  let remainingQuestions = [];
  let currentQuestionIndex = 0;
  let correctAnswers = 0;

  function getRandomQuestions() {
    const allQuestions = [...allQuestionsAndAnswers];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * allQuestions.length);
      remainingQuestions.push(allQuestions.splice(randomIndex, 1)[0]);
    }
  }

  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const questionObject = remainingQuestions[currentQuestionIndex];
    if (questionObject !== undefined) {
      questionElement.textContent = questionObject.question;
      document.getElementById("answer").value = ""; // Clear previous answer
      document.getElementById("feedback").textContent = ""; // Clear previous feedback
    } else {
      const scoreMessage = `Game Over! Thank you for playing. You scored ${correctAnswers} out of 5 questions. Would you like to play again?`;
      questionElement.textContent = scoreMessage;
    }
  }

  function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.toLowerCase();
    const correctAnswerArray = remainingQuestions[currentQuestionIndex].answer;

    if (correctAnswerArray.includes(userAnswer)) {
      document.getElementById("feedback").textContent = "Correct!";
      correctAnswers++;
    } else {
      document.getElementById("feedback").textContent = "Incorrect. The correct answer is " + correctAnswerArray;
    }

    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < 5) {
        displayQuestion();
      } else {
        displayQuestion(); // Call it one more time to display the score message
      }
    }, 2000); // 2000 milliseconds (2 seconds) delay before displaying the next question
  }


  // Listen for Enter key press
  document.getElementById("answer").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      checkAnswer();
    } 
  });


  // Initial setup
  getRandomQuestions();
  displayQuestion();
