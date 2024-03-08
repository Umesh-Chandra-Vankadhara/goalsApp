const path = require("path");
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();

app.use(express.json()); //request body parser;
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", require("./routes/goalsRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

// // serve frontend
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static.apply(path.join(__dirname, "../frontend/dist")));

//   app.get("*", (req, res) =>
//     res.sendFile(
//       path.resolve(__dirname, "../", "frontend", "dist", "index.html")
//     )
//   );
// } else {
//   app.get("/", (req, res) => res.send("Please set to production"));
// }
app.get("/health", (res) => {
  return res.json({ ok: "ok" });
});
app.listen(port, () => console.log(`Server started on port ${port}`));
