const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request was made: " + req.url);

  // serving html
  // res.writeHead(200, { "Content-Type": "text/html" });

  // const myReadStream = fs.createReadStream(`${__dirname}/index.html`, "utf8");

  // myReadStream.pipe(res);

  // serving JSON data
  res.writeHead(200, { "Content-Type": "application/json" });

  const myObj = {
    name: "Ryu",
    job: "Ninja",
    age: 29
  };

  res.end(JSON.stringify(myObj));
});

server.listen(3000, "127.0.0.1");
console.log("now listening to port 3000");
