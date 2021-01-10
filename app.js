require("dotenv").config();

const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/user.routes");
const passwordRouter = require("./routes/password.routes");
const errorHandling = require("./middleware/error-handling.middleware");

const app = express();
// Automatically parses the body and makes it into a javascript object, if JSON.
app.use(express.json());

app.use(cors());

// welcome message
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Inu Health API" });
});

app.use(userRouter);
app.use(passwordRouter);

app.use("*", (req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use(errorHandling);

module.exports = app;