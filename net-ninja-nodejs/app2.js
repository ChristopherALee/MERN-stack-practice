const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.send("this is the homepage");

  res.sendFile(`${__dirname}/index.html`);
});

app.get("/contact", (req, res) => {
  // res.send("this is the contact page");

  res.sendFile(`${__dirname}/contact.html`);
});

app.get("/profile/:name", (req, res) => {
  // res.send(`You requested to see a profile with the id of ${req.params.id}`);

  res.render("profile", { person: req.params.name });
});

app.listen(3000);
