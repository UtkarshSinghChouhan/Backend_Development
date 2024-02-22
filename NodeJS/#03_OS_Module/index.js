const os = require("os");

console.log(os.arch());
console.log(os.platform());
console.log(os.hostname());
// console.log(os.tempdir());
console.log(os.type());

console.log(os.freemem()); // it will return the available free memory in the Bytes
console.log(os.freemem() / 1024 / 1024 / 1024); // we are converting the Bytes into GigaBytes

console.log(os.totalmem()); // it will return the available free memory in the Bytes
console.log(os.totalmem() / 1024 / 1024 / 1024); // we are converting the Bytes into GigaBytes
