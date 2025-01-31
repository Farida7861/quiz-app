import React from 'react';

function ResultsPage({ score, totalQuestions, restartQuiz }) {
  let message = '';

  if (score === totalQuestions) {
    message = 'Perfect score! 🎉';
  } else if (score >= totalQuestions * 0.7) {
    message = 'Great job! 👍';
  } else {
    message = 'Good effort, try again! 💪';
  }

  return (
    <div>
      <h1>Quiz Completed!</h1>
      <p>Your Score: {score} / {totalQuestions}</p>
      <p>{message}</p>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default ResultsPage;
