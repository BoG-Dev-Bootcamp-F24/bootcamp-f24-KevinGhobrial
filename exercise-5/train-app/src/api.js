// src/api.js
const API_URL = "http://localhost:4006/api"; // Adjust the URL if your server runs on a different port

export const fetchStationData = async () => {
  try {
    const response = await fetch(`${API_URL}/stations`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error("Failed to fetch station data:", error);
    return { data: [] }; // Return an empty array on error
  }
};

export const fetchTrainData = async () => {
  try {
    const response = await fetch(`${API_URL}/trains`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error("Failed to fetch train data:", error);
    return { data: [] }; // Return an empty array on error
  }
};
