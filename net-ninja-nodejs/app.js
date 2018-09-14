const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request was made: " + req.url);

  // serving plain-text
  // res.writeHead(200, { "Content-Type": "plain" });
  // res.end("feed me popcorn");

  // serving html
  // res.writeHead(200, { "Content-Type": "text/html" });

  // const myReadStream = fs.createReadStream(`${__dirname}/index.html`, "utf8");

  // myReadStream.pipe(res);

  // serving JSON data
  // res.writeHead(200, { "Content-Type": "application/json" });

  // const myObj = {
  //   name: "Ryu",
  //   job: "Ninja",
  //   age: 29
  // };

  // res.end(JSON.stringify(myObj));

  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });

    fs.createReadStream(`${__dirname}/index.html`).pipe(res);
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });

    fs.createReadStream(`${__dirname}/contact.html`).pipe(res);
  } else if (req.url === "/api/ninjas") {
    const ninjas = [
      {
        name: "Ryu",
        age: 29
      },
      {
        name: "Yoshi",
        age: 32
      }
    ];

    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(JSON.stringify(ninjas));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.createReadStream(`${__dirname}/404.html`).pipe(res);
  }
});

server.listen(3000, "127.0.0.1");
console.log("now listening to port 3000");
