// Reading from a Stream
// Create a Readable Stream
// Handle Stream Events -> data, end and error.

const fs = require("fs");

const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  // THis is the usual way in which we read data
  //   fs.readFile("./input.txt", "utf-8", (err, data) => {
  //     res.end(data);
  //   });

  //   This is the Streaming way
  const rstream = fs.createReadStream("./input.txt");

  rstream.on("data", (chunkData) => {
    res.write(chunkData);
  });

  rstream.on("end", () => {
    res.end();
  });

  rstream.on("error", (err) => {
    console.log(err);
    res.end("file not found");
  });
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Listening to the port 5000");
});
