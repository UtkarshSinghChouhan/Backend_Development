// API is Application Programming Interface, which is a software intermediary
// that allows two applications to talk to each other. Each time you use an
// app like Facebook, send a message or check the weather on the phone,
// you're are using an API.

const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync("./data.json", "utf-8");
  const val = JSON.parse(data);

  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/HTML" });
    res.write(`<h1>This is the response data of the HOME page</h1>`);
    res.end();
  } else if (req.url == "/about") {
    res.writeHead(200, { "Content-Type": "text/HTML" });
    res.write(`<h1>This is the response data of the ABOUT page</h1>`);
    res.end();
  } else if (req.url == "/contact") {
    res.writeHead(200, { "Content-Type": "text/HTML" });
    res.write(`<h1>This is the response data of the CONTACT page</h1>`);
    res.end();
  } else if (req.url == "/data") {
    //This way we are calling the json file again and again every time we visite the specified URL
    // this can be avoided in the next method
    // fs.readFile("./data.json", "utf-8", (err, data) => {
    //   if (err) {
    //     res.writeHead(500, { "Content-Type": "JSON" });
    //     res.write(`<h1>Internal Server Error</h1>`);
    //     res.end();
    //   } else {
    //     res.writeHead(200, { "Content-Type": "JSON" });
    //     res.write(data);
    //     res.end();
    //   }
    // });

    res.end(data);
  } else {
    res.writeHead(404, { "Content-Type": "text/HTML" });
    res.write(`<h1>404 Error Page</h1>`);
    res.end();
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("listening to port 5000");
});
