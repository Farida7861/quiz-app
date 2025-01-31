import React from 'react';

function QuizPage({ quizData, submitAnswer, currentQuestionIndex }) {
  const question = quizData[currentQuestionIndex];

  return (
    <div>
      <h2>{question.question}</h2>
      <div>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => submitAnswer(index === question.correctOptionIndex)} // Check if the answer is correct
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizPage;
