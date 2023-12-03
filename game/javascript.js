// javascript.js
  const allQuestionsAndAnswers = [
    { question: "What is your age?", answer: ["20", "twenty"] },
    { question: "What is your favorite color?", answer: ["blue"] },
	{ question: "What is your favorite color?1", answer: ["blue"] },
	{ question: "What is your favorite color?2", answer: ["blue"] },
	{ question: "What is your favorite color?3", answer: ["blue"] },
	{ question: "What is your favorite color?4", answer: ["blue"] },
	{ question: "What is your favorite color?5", answer: ["blue"] },
	
	
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
      const scoreMessage = `Game Over! Thank you for playing. Your score: ${correctAnswers} out of 5.`;
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
      document.getElementById("feedback").textContent = "Incorrect. The correct answer is: " + correctAnswerArray;
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
