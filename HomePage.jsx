import React from 'react';

function HomePage({ startQuiz }) {
  return (
    <div>
      <h1>Welcome to the Quiz App!</h1>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
}

export default HomePage;
