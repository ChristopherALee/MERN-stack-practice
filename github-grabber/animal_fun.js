const fs = require("fs");

// async function
fs.readFile("./animals.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});

// Run this code and you'll see the new file example.txt written in the same directory as our animal_fun.js file. If a file already exists as the first argument, it will be overwritten so be careful.
fs.writeFile("./example.txt", "I will be written to example.txt", err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("file successfully written");
});
