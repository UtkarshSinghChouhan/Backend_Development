const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1>welcome to my Home Page</h1>");
});
app.get("/about", (req, res) => {
  res.status(200).send("<h1>welcome to my About Page</h1>");
});
app.get("/contact", (req, res) => {
  res.status(200).send("<h1>welcome to my Contact Page</h1>");
});
app.get("/temp", (req, res) => {
  res.status(200).send("<h1>welcome to my Temp Page</h1>");
});
app.get("/temp", (req, res) => {
  res.status(200).send("<h1>welcome to my Temp Page</h1>");
});

app.get("/json", (req, res) => {
  console.log("i am sending the json data here");
  res.status(200).json({
    id: "1",
    name: "Utkarsh",
    ocuupation: "Software Developer",
  });
});

// For the error page
app.get("*", (req, res) => {
  res.status(404).send("<h1>Page does not exists</h1>");
});

app.listen(8000, () => {
  console.log("Listening to the port 8000");
});
