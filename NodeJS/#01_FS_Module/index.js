const fs = require("fs");

fs.writeFileSync(
  "./read.txt",
  "The is the Data to be added the uncreated text file"
);

fs.appendFileSync("./read.txt", "\nThis is the appended data");
fs.appendFileSync("./read.txt", "This is the appended data");

// Nodejs includes an additional data type called Buffer
// (not available in the browser's Javascript)
// Buffer is mainly used to store Binary Data,
// while reading from a file or receiving packets over to the network
const buf_data = fs.readFileSync("./read.txt");
console.log(buf_data);
console.log(buf_data.toString());

// To rename the file
// fs.renameSync("read.txt", "file.txt")
