import React, { useState, useEffect } from 'react';

// Mocking the fetchQuizData function (you can replace it with your actual API call)
const fetchQuizData = async () => {
  return [
    {
      question: "Which country is famous for Sushi?",
      answers: ["China", "Japan", "India"],
      correct: "Japan"
    },
    {
      question: "What is the main ingredient in guacamole?",
      answers: ["Avocado", "Tomato", "Potato"],
      correct: "Avocado"
    },
    {
      question: "Which country is famous for Tacos?",
      answers: ["Mexico", "Italy", "USA"],
      correct: "Mexico"
    },
    {
      question: "What is the most common cheese used in pizza?",
      answers: ["Mozzarella", "Cheddar", "Parmesan"],
      correct: "Mozzarella"
    },
    {
      question: "Which food is known as 'The King of Fruits'?",
      answers: ["Mango", "Durian", "Banana"],
      correct: "Durian"
    }
  ];
};

function App() {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);  // Track current question
  const [score, setScore] = useState(0);  // Track the user's score

  useEffect(() => {
    const getQuizData = async () => {
      try {
        const data = await fetchQuizData();  // Fetch data from API
        setQuizData(data);  // Update state with the fetched data
      } catch (err) {
        setError('Failed to load quiz data');  // Update error state if there's an error
      } finally {
        setLoading(false);  // Set loading to false after the request completes
      }
    };

    getQuizData();  // Call the function to fetch quiz data when the component mounts
  }, []);  // Empty dependency array ensures it runs only once

  // Handle answer selection and update score
  const handleAnswerSelection = (answer) => {
    if (answer === quizData[currentQuestionIndex].correct) {
      setScore(score + 1);  // Increment score if the answer is correct
    }
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);  // Move to next question
    }
  };

  return (
    <div>
      <h1>Food Famous Quiz</h1>
      {loading && <p>Loading...</p>}  {/* Show loading message */}
      {error && <p>{error}</p>}       {/* Show error message if the fetch fails */}
      {!loading && !error && quizData.length > 0 && (
        <div>
          <h2>{quizData[currentQuestionIndex].question}</h2> {/* Display question */}
          <div>
            {quizData[currentQuestionIndex].answers.map((answer, index) => (
              <button key={index} onClick={() => handleAnswerSelection(answer)}>
                {answer}
              </button>
            ))}
          </div>
          <div>
            <p>Score: {score}</p> {/* Display current score */}
            {currentQuestionIndex === quizData.length - 1 && <p>Quiz Complete! Final Score: {score}</p>} {/* Show final score */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
