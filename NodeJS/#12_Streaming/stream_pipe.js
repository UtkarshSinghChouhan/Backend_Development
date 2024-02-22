// Reading from a Stream
// Create a Readable Stream
// Handle Stream Events -> data, end and error.

const fs = require("fs");

const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  //   This is the Streaming way
  const rstream = fs.createReadStream("./input.txt");
  rstream.pipe(res);
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Listening to the port 5000");
});
