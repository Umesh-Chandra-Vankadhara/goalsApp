const asyncHandler = require("express-async-handler");

// @desc Get Goals
// @route GET api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

// @desc Set Goals
// @route SET api/goal
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    // res.status(400).json({ message: "Please add a text field" });
    res.status(400);
    // Default express error handler
    //by default error handler give html page so inorder to chage default behavior of express error handler we need to add a middler
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set Goal" });
});

// @desc Update Goals
// @route UPDATE api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goal ${req?.params?.id}` });
});

// @desc Delete Goals
// @route DELETE api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req?.params?.id}` });
});

module.exports = {
  setGoal,
  updateGoal,
  getGoals,
  deleteGoal,
};
