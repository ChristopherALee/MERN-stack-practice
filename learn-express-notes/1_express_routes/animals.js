const express = require("express");

const {
  seedElements,
  getElementById,
  createElement,
  updateElement,
  getIndexById
} = require("./utils");

const animalsRouter = express.Router();

// Animal routes
const animals = [];

animalsRouter.get("/", (req, res, next) => {
  res.send(animals);
});

animalsRouter.get("/:id", (req, res, next) => {
  const foundAnimal = getElementById(req.params.id, animals);

  if (foundAnimal !== -1) {
    res.send(foundAnimal);
  } else {
    res.status(404).send("Animal not found");
  }
});

animalsRouter.put("/:id", (req, res, next) => {
  const animalIndex = getIndexById(req.params.id, animals);

  if (animalIndex !== -1) {
    updateElement(req.params.id, req.query, animals);
    res.send(animals[animalIndex]);
  } else {
    res.status(404).send();
  }
});

animalsRouter.post("/", (req, res, next) => {
  const receivedAnimal = createElement("animals", req.query);

  if (receivedAnimal) {
    animals.push(receivedAnimal);
    res.status(201).send(receivedAnimal);
  } else {
    res.status(400).send();
  }
});

animalsRouter.delete("/:id", (req, res, next) => {
  const foundAnimal = getIndexById(req.params.id, animals);

  if (foundAnimal !== -1) {
    animals.splice(foundAnimal, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

module.exports = animalsRouter;
