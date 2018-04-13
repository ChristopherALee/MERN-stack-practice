// The current API has public data that should be accessible to anybody, and private data that should be only accessed by admin users. Currently, users can access any data, but the isAdmin middleware function should be able to help. Use this function in any route that accesses the secretData object.

const express = require("express");
const app = express();

const secretData = {
  adminUsers: ["1", "2", "51"],
  coolPhoneNumbers: ["555-555-CODE", "555-EXP-RESS", "MID-DLE-WARE"],
  favSites: ["codecademy.com", "expressjs.com"]
};

const publicData = {
  colors: ["green", "orange"],
  numbers: [1, 2, 3, 4, 5]
};

const isAdmin = (req, res, next) => {
  const id = req.params.userId;
  if (!secretData.adminUsers.includes(id)) {
    res.status(401).send(); // Unauthorized
  } else {
    next();
  }
};

app.get("/:userId/colors", (req, res, next) => {
  res.send(publicData.colors);
});

app.get("/:userId/numbers", (req, res, next) => {
  res.send(publicData.numbers);
});

app.get("/:userId/phone-numbers", isAdmin, (req, res, next) => {
  res.send(secretData.coolPhoneNumbers);
});

app.get("/:userId/fav-sites", isAdmin, (req, res, next) => {
  res.send(secretData.favSites);
});
