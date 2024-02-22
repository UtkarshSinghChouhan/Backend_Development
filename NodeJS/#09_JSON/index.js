// JSON stand stands for Javascript Object Notation.
// JSON is a Lightweight format for storing and transporting Data.
// JSON is often used when data is sent from a server to a web-page.

const fs = require("fs");

const myBio = {
  name: "Utkarsh",
  age: 23,
  status: "unemployed",
};

// Challenge
// 1. Convert to JSON.
const jsonString = JSON.stringify(myBio);

// 2. Adding data to file.
// fs.writeFile("./file.txt", jsonString, (err) => console.log(err));

// 3. Reading the File.
// 4. Again convert back to object.
// 5. console.log the object.
fs.readFile("./file.txt", "utf-8", (err, data) =>
  err ? console.log(err) : console.log(JSON.parse(data))
);
