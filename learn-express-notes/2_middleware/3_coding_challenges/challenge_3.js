// Complete the timeMiddleware function to DRY the current application by attaching the currentTime to the request body as date. Use this in all routes and eliminate the duplicate code.

const express = require("express");
const app = express();

const database = {
  snacks: ["chips", "apple", "cookies"],
  sides: ["beans and rice", "cole slaw", "broccoli"],
  appetizers: ["oysters", "dumplings", "smoked almonds"]
};

// Add your code here:
const timeMiddleware = (req, res, next) => {
  const currentTime = Date.now();
  req.date = currentTime;
  next();
};

app.get("/snacks", timeMiddleware, (req, res, next) => {
  res.send(`Snacks as of ${req.date}: ${database.snacks}`);
});

app.get("/sides", timeMiddleware, (req, res, next) => {
  res.send(`Sides as of ${req.date}: ${database.sides}`);
});

app.get("/appetizers", timeMiddleware, (req, res, next) => {
  res.send(`Appetizers as of ${req.date}: ${database.appetizers}`);
});
