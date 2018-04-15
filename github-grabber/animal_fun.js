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

// Eventually we'll be parsing input from HTTP requests, but to start let's explore how to pass information into our script from the command line. Node provides a global process object which will allow us to pass arbitrary arguments from our terminal.
// console.log(process);

// Wow, that's a lot of stuff! process contains loads of information, so we'll narrow it down by accessing the argv key. console.log(process.argv). We should see an array with two arguments: the absolute paths of the Node executable and the file.
console.log(process.argv);

// Try adding some additional words after node animal_fun.js and see how it comes through. For example node animal_fun.js argv_index_2 argv_index_3 potato. We'll have access to those additional arguments in our script by bracketing into the process.argv array starting at process.argv[2].
