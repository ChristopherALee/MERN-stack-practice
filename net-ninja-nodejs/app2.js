const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

app.get("/", (req, res) => {
  // res.send("this is the homepage");

  // res.sendFile(`${__dirname}/index.html`);

  res.render("index");
});

app.get("/contact", (req, res) => {
  // res.send("this is the contact page");

  // res.sendFile(`${__dirname}/contact.html`);

  res.render("contact");
});

app.get("/profile/:name", (req, res) => {
  // res.send(`You requested to see a profile with the id of ${req.params.id}`);

  const data = {
    age: 29,
    job: "ninja"
  };
  res.render("profile", { person: req.params.name, data });
});

app.listen(3000);
