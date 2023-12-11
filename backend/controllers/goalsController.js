const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

// @desc Get Goals
// @route GET api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
  // res.status(200).json({ message: "Get Goals" });
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
  const goal = await Goal.create({
    text: req.body.text,
  });
  // res.status(200).json({ message: "Set Goal" });
  res.status(200).json(goal);
});

// @desc Update Goals
// @route UPDATE api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  const goalToBeUpdated = await Goal.findById(req.params.id);
  if (!goalToBeUpdated) throw new Error("Goal not found");
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // create if not exist
  });
  // res.status(200).json({ message: `Update Goal ${req?.params?.id}` });
  res.status(200).json(updatedGoal);
});

// @desc Delete Goals
// @route DELETE api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goalToBeDeleted = await Goal.findById(req.params.id);
  if (!goalToBeDeleted) throw new Error("Goal not found");
  // await goalToBeDeleted.remove();
  // res.status(200).json({ id: req.params.id });
  await Goal.findByIdAndDelete(req.params.id);
  res.status(200).json({ id: req.params.id });
  // res.status(200).json({ message: `Delete Goal ${req?.params?.id}` });
});

module.exports = {
  setGoal,
  updateGoal,
  getGoals,
  deleteGoal,
};
