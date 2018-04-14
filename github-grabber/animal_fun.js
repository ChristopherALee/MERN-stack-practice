const fs = require("fs");

// async function
fs.readFile("./animals.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});
