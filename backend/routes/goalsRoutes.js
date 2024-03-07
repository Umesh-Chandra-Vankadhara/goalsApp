const express = require("express");
const {
  getGoals,
  deleteGoal,
  updateGoal,
  setGoal,
} = require("../controllers/goalsController");
const router = express.Router();

// router.post("/", (req, res) => {
//   res.status(200).json({ message: "Set Goals" });
// });
// router.put("/:id", (req, res) => {
//   res.status(200).json({ message: `Update Goal ${req?.params?.id}` });
// });
// router.get("/", (req, res) => {
//   res.status(200).json({ message: "GET Goals" });
// });
// router.delete("/:id", (req, res) => {
//   res.status(200).json({ message: `Delete Goal ${req?.params?.id}` });
// });

// router.post("/", setGoal);
// router.update("/:id", updateGoal);
// router.get("/", getGoals);
// router.delete("/:id", deleteGoal);

const { protect } = require('../middleware/authMiddleware');

router.route("/").post(protect,setGoal).get(protect,getGoals);
router.route("/:id").put(protect,updateGoal).delete(protect,deleteGoal);

module.exports = router;
