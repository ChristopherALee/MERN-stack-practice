// The current moodleware middleware function should attach a mood property to the request object on every request and then continue on with the rest of the route matching. Something is missing! Fix it so that it moves on after attaching the req.mood.

const express = require("express");
const app = express();

const moods = ["happy", "exuberant", "fanatical about middleware"];

const moodleware = (req, res, next) => {
  const randomMoodIndex = Math.floor(Math.random() * moods.length);
  req.mood = moods[randomMoodIndex];
  next();
};

app.use(moodleware);

app.get("/randomMood", (req, res, next) => {
  res.send(req.mood);
});
