const express = require("express");
const expressionsRouter = express.Router();

const expressions = [];

// GET request for /expressions path
expressionsRouter.get("/", (req, res, next) => {
  // console.log(res);

  // Express servers use .send() or .json() to send responses from HTTP requests.
  // .send() will take any input and put it in the response body.
  // .json() sends any JS object passed into it.
  res.send(expressions);
  res.json(expressions);
});

// GET request with a single expression path
expressionsRouter.get("/:id", (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);

  if (foundExpression) {
    res.send(foundExpression);
  } else {
    // Can set status code
    res.status(404).send("Expression not found.");
  }
});

// PUT request (updating entity)
expressionsRouter.put("/:id", (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);

  if (expressionIndex !== -1) {
    updateElement(req.params.id, req.query, expressions);
    res.send(expressions[expressionIndex]);
  } else {
    res.status(404).send();
  }
});

// POST request
expressionsRouter.post("/", (req, res, next) => {
  const receivedExpression = createElement("expressions", req.query);

  if (receivedExpression) {
    expressions.push(receivedExpression);
    res.status(201).send(receivedExpression);
  } else {
    res.status(400).send();
  }
});

// DELETE request
expressionsRouter.delete(":id", (req, res, next) => {
  const foundExpression = getIndexById(req.params.id, expressions);

  if (foundExpression !== -1) {
    expressions.splice(foundExpression, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

module.exports = expressionsRouter;
