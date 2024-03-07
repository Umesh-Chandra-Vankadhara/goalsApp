import axios from "axios";

const GOAL_API_URL = "/api/goals/";

//Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(GOAL_API_URL, goalData, config);

  return response.data;
};

// getGoals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(GOAL_API_URL, config);
  return response.data;
};

//Delete new goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(GOAL_API_URL + goalId, config);

  return response.data;
};

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
};

export default goalService;
