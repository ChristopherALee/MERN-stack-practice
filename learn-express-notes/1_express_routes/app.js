// Starting a server
// Express is a Node module, so in order to use it, we will need to import it into our program file. To create a server, the imported 'express' function must be invoked.
const express = require("express");
const app = express();

const PORT = process.env.PORT || 4001;

// 'PORT' is where the server is listening from and the callback in the 2nd argument is invoked when the server is running and ready to receive responses.
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
