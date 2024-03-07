const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    user: {
      //for each goal we need to know which user has created it so we are creating a relation between goal and user model
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Goal", goalSchema);
