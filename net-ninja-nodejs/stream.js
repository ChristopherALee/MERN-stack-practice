const http = require("http");
const fs = require("fs");

// will send chunk package numbers
const myReadStream = fs.createReadStream(`${__dirname}/readMe.txt`);

// will send chunks with actual file contents
// const myReadStream = fs.createReadStream(`${__dirname}/readMe.txt`, "utf8");

myReadStream.on("data", chunk => {
  console.log(`new chunk received:`);
  console.log(chunk);
});
