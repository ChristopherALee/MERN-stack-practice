// Starting a server
// Express is a Node module, so in order to use it, we will need to import it into our program file. To create a server, the imported 'express' function must be invoked.
const express = require("express");
const app = express();

const {
  getElementById,
  getIndexById,
  updateElement,
  seedElements,
  createElement
} = require("./utils");

const expressionsRouter = require("./expressions.js");
app.use("/expressions", expressionsRouter);

const animalsRouter = require("./animals.js");
app.use("/animals", animalsRouter);

const PORT = process.env.PORT || 4001;

// This is used to make sure that once the server is started, you can reload the browser and see the Express Yourself machine.
app.use(express.static("public"));

app.app // 'PORT' is where the server is listening from and the callback in the 2nd argument is invoked when the server is running and ready to receive responses.
  .listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
