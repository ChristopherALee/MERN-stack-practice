// Starting a server
// Express is a Node module, so in order to use it, we will need to import it into our program file. To create a server, the imported 'express' function must be invoked.
const express = require("express");
const app = express();
const expressionsRouter = require("./expressions.js");

app.use("/expressions", expressionsRouter);

const PORT = process.env.PORT || 4001;

// This is used to make sure that once the server is started, you can reload the browser and see the Express Yourself machine.
app.use(express.static("public"));

// Animal routes
const animals = [];

app.get("/animals", (req, res, next) => {
  res.send(animals);
});

app.get("/animals/:id", (req, res, next) => {
  const foundAnimal = getElementById(req.params.id, animals);

  if (foundAnimal !== -1) {
    res.send(foundAnimal);
  } else {
    res.status(404).send("Animal not found");
  }
});

app.put("/animals/:id", (req, res, next) => {
  const animalIndex = getIndexById(req.params.id, animals);

  if (animalIndex !== -1) {
    updateElement(req.params.id, req.query, animals);
    res.send(animals[animalIndex]);
  } else {
    res.status(404).send();
  }
});

app.post("/animals", (req, res, next) => {
  const receivedAnimal = createElement("animals", req.query);

  if (receivedAnimal) {
    animals.push(receivedAnimal);
    res.status(201).send(receivedAnimal);
  } else {
    res.status(400).send();
  }
});

app.delete("/animals/:id", (req, res, next) => {
  const foundAnimal = getIndexById(req.params.id, animals);

  if (foundAnimal !== -1) {
    animals.splice(foundAnimal, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

app.app // 'PORT' is where the server is listening from and the callback in the 2nd argument is invoked when the server is running and ready to receive responses.
  .listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
