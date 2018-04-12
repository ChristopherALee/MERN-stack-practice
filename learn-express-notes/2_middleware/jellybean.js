const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const errorHandler = require("errorhandler");
app.use(errorHandler());

app.use(express.static("public"));

const PORT = process.env.PORT || 4001;

const jellybeanBag = {
  mystery: {
    number: 4
  },
  lemon: {
    number: 5
  },
  rootBeer: {
    number: 25
  },
  cherry: {
    number: 3
  },
  licorice: {
    number: 1
  }
};

// Logging Middleware
app.use((req, res, next) => {
  console.log(`${req.method} Request Received`);
  next();
});
// refactored middleware with morgan
// makes the console.log('Response Sent') code obsolete
app.use(morgan("dev"));

// requiring body-parser replaces having to have a rolled out bodyParser and can remove that middleware from all PUT and POST routes
app.use(bodyParser.json());

app.use("/beans/:beanName", (req, res, next) => {
  const beanName = req.params.beanName;
  if (!jellybeanBag[beanName]) {
    // console.log("Response Sent");
    return res.status(404).send("Bean with that name does not exist");

    // don't have to use if have npm express middleware errorhandler
    // const error = new Error("Bean with that name does not exist");
    // error.status = 404;
    // return next(error);
  }
  req.bean = jellybeanBag[beanName];
  req.beanName = beanName;
  next();
});

const bodyParser = (req, res, next) => {
  let bodyData = "";
  req.on("data", data => {
    bodyData += data;
  });
  req.on("end", () => {
    if (bodyData) {
      req.body = JSON.parse(bodyData);
    }
    next();
  });
};

app.get("/beans/", (req, res, next) => {
  res.send(jellybeanBag);
  // console.log("Response Sent");
});

app.post("/beans/", (req, res, next) => {
  const body = req.body;
  const beanName = body.name;
  if (jellybeanBag[beanName] || jellybeanBag[beanName] === 0) {
    return res.status(400).send("Bag with that name already exists!");

    // don't have to use if have npm express middleware errorhandler
    // const error = new Error("Bean with that name does not exist");
    // error.status = 400;
    // return next(error);
  }
  const numberOfBeans = Number(body.number) || 0;
  jellybeanBag[beanName] = {
    number: numberOfBeans
  };
  res.send(jellybeanBag[beanName]);
  // console.log("Response Sent");
});

app.get("/beans/:beanName", (req, res, next) => {
  res.send(req.bean);
  // console.log("Response Sent");
});

app.post("/beans/:beanName/add", (req, res, next) => {
  const numberOfBeans = Number(req.body.number) || 0;
  req.bean.number += numberOfBeans;
  res.send(req.bean);
  // console.log("Response Sent");
});

app.post("/beans/:beanName/remove", (req, res, next) => {
  const numberOfBeans = Number(req.body.number) || 0;
  if (req.bean.number < numberOfBeans) {
    return res.status(400).send("Not enough beans in the jar to remove!");

    // don't have to use if have npm express middleware errorhandler
    // const error = new Error("Not enough beans in the jar to remove!");
    // error.status = 400;
    // return next(error);
  }
  req.bean.number -= numberOfBeans;
  res.send(req.bean);
  // console.log("Response Sent");
});

app.delete("/beans/:beanName", (req, res, next) => {
  const beanName = req.beanName;
  jellybeanBag[beanName] = null;
  res.status(204).send();
  // console.log("Response Sent");
});

app.put("/beans/:beanName/name", (req, res, next) => {
  const beanName = req.beanName;
  const newName = req.body.name;
  jellybeanBag[newName] = req.bean;
  jellybeanBag[beanName] = null;
  res.send(jellybeanBag[newName]);
  // console.log("Response Sent");
});

app.use((err, req, res, next) => {
  const status = err.status;
  res.status(status).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
