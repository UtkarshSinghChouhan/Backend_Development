const fs = require("fs");

// Create a Folder named thapa
// fs.mkdir("./thapa", (err) => console.log(err));

// Create a file in it named bio.txt and add data into it
// fs.writeFile("./thapa/bio.txt", "This is Utkarsh Singh Chouhan", (err) =>
//   console.log(err)
// );

// Add more data into the file after the existing data
// fs.appendFile(
//   "./thapa/bio.txt",
//   "\n This is the data appended to the file",
//   (err) => console.log(err)
// );

// Read tha data from the file woothout getting the buffer data using the file encoding
// fs.readFile("./thapa/bio.txt", "utf-8", (err, data) =>
//   err ? console.log(err) : console.log(data)
// );

// Rename the file name to myBio.txt
// fs.rename("./thapa/bio.txt", "./thapa/myBio.txt", (err) => console.log(err));

// Deleting the file
// fs.unlink("./thapa/myBio.txt", (err) =>
//   err ? console.log(err) : console.log("File deleted Successfully")
// );

// Deleting the Folder
// fs.rmdir("thapa", (err) =>
//   err ? console.log(err) : console.log("Folder deleted successfully")
// );
