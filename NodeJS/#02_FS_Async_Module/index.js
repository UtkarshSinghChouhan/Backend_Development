const fs = require("fs");

// fs.writeFile("./read.txt", "This is the Data added to the file", (err) =>
//   console.log(err)
// );

// fs.appendFile("./read.txt", "\n New data added to the File", (err) =>
//   console.log(err)
// );

fs.readFile("./read.txt", "utf-8", (err, data) =>
  err ? console.log(err) : console.log(data)
);
console.log("After reading the file");
