const http = require("http");

// request object can be used ot get information about the current http request
// eg. url, request header and dat

// response object can be used to send a response for the current HTTP request

// The responese from the HTTP server is supposed to be displayed as HTML

const server = http.createServer((req, res) => {
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
  } else {
    res.writeHead(404, { "Content-Type": "text/HTML" });
    res.write(`<h1>404 Error Page</h1>`);
    res.end();
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("listening to port 5000");
});
