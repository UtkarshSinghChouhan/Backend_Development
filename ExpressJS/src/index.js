const path = require("path");

const express = require("express");
const app = express();

const staticPath = path.join(__dirname, "../public");

// express.static(rootPAth) is a a built-in middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8000, () => {
  console.log("Listeneing to the port 8000");
});
console.log(__dirname);
console.log(path.join(__dirname, ".."));
console.log(path.join(__dirname, "../public"));
console.log(__filename);
