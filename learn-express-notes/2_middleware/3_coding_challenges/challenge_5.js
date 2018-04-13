// Import the morgan logging middleware to log all requests. Use the predefined format 'short' instead of 'tiny'.

const express = require("express");
const app = express();
const morgan = require("morgan");

// Add your code below:
app.use(morgan("short"));

// Add your code above

app.get("/say-hi", (req, res, next) => {
  res.send("Hi!");
});

app.get("/say-bye", (req, res, next) => {
  res.send("Bye!");
});
