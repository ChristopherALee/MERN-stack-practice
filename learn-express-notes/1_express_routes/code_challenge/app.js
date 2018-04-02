const express = require("express");
const app = express();

const PORT = process.env.PORT || 4001;

const sausageTypes = [
  "bratwurst",
  "andouille",
  "chorizo",
  "boudin",
  "kielbasa"
];

app.get("/sausages", (req, res, next) => {
  res.send(sausageTypes);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Metals version
const express = require("express");
const app = express();

const PORT = process.env.PORT || 4001;

const buildingMaterials = {
  wood: ["plywood", "2x4s", "cedar shingles"],
  metal: ["steel girders", "wall studs", "rebar"]
};

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get("/metals", (req, res, next) => {
  res.send(buildingMaterials.metal);
});

// Battlefields version
const express = require("express");
const app = express();

const PORT = process.env.PORT || 4001;

const battlefields = {
  fortSumter: {
    state: "SC"
  },
  manassas: {
    state: "VA"
  },
  gettysburg: {
    state: "PA"
  },
  antietam: {
    state: "MD"
  }
};

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get("/battlefields/:name", (req, res, next) => {
  const battlefieldName = req.params.name;

  if (battlefields[battlefieldName]) {
    res.send(battlefields[battlefieldName]);
  } else {
    res.status(404).send();
  }
});

// Currencies countries version
const express = require("express");
const app = express();

const PORT = process.env.PORT || 4001;

const currencies = {
  diram: {
    countries: ["UAE", "Morocco"]
  },
  real: {
    countries: ["Brazil"]
  },
  dinar: {
    countries: ["Algeria", "Bahrain", "Jordan", "Kuwait"]
  },
  vatu: {
    countries: ["Vanuatu"]
  },
  shilling: {
    countries: ["Tanzania", "Uganda", "Somalia", "Kenya"]
  }
};

app.put("/currencies/:name/countries", (req, res, next) => {
  const foundCurrency = currencies[req.params.name];
  const changes = req.query;

  if (foundCurrency) {
    currencies[req.params.name] = changes;
    res.send(currencies[req.params.name]);
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Soups version
const express = require("express");
const app = express();

const PORT = process.env.PORT || 4001;

const soups = ["gazpacho", "borscht", "primordial", "avgolemono", "laksa"];

app.post("/soups", (req, res, next) => {
  const receivedSoup = req.query.name;

  if (receivedSoup) {
    soups.push(receivedSoup);
    res.status(201).send(receivedSoup);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Pudding version
const express = require("express");
const app = express();

const PORT = process.env.PORT || 4001;

const puddingFlavors = ["chocolate", "banana", "butterscotch", "pistachio"];

const findPuddingIndex = name => {
  return puddingFlavors.indexOf(name);
};

const deletePuddingAtIndex = index => {
  puddingFlavors.splice(index, 1);
};

app.delete("/puddings/:flavor", (req, res, next) => {
  const puddingName = req.params.flavor;
  const puddingIdx = findPuddingIndex(puddingName);

  if (puddingIdx !== -1) {
    deletePuddingAtIndex(puddingIdx);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// sauceRouter
const express = require("express");
const app = express();

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const pastas = ["agnolotti", "cavatelli", "gemelli", "tortellini"];

app.get("/pastas", (req, res, next) => {
  res.send(pastas);
});

const sauceRouter = express.Router();
// Add your code here:
app.use("/sauces", sauceRouter);

const sauces = [
  "carbonara",
  "primavera",
  "bolognese",
  "puttanesca",
  "fra diavolo"
];

sauceRouter.get("/", (req, res, next) => {
  res.send(sauces);
});

// mountainsRouter
const express = require("express");
const app = express();

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const mountains = ["denali", "olympus", "kilimanjaro", "matterhorn"];
const mountainRanges = ["alps", "andes", "himalayas", "rockies"];

const mountainsRouter = express.Router();
app.use("/mountains", mountainsRouter);

mountainsRouter.get("/", (req, res, next) => {
  res.send(mountains);
});

const mountainRangesRouter = express.Router();
app.use("/mountain-ranges", mountainRangesRouter);

mountainRangesRouter.get("/", (req, res, next) => {
  res.send(mountainRanges);
});
