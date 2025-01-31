import axios from 'axios';

export const fetchQuizData = async () => {
  try {
    // Use CORS proxy if needed
    const response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.jsonserve.com/Uw5CrX');
    return response.data; // Return the data from the API
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;  // Throw error so it can be handled in the component
  }
};
