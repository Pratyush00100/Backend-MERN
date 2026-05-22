const fs = require("fs");
console.log("1. Start of script");

//sync / blocking operation
console.log("2. reading file synchronously");
const dataSync = fs.readFileSync("user-details.txt", "utf-8");
console.log("3. Sysnchrounous read completed");

//async operation
console.log("4. reding file asynchronously");
fs.readFile("user-details.txt", "utf-8", (err, dataSync) => {
  if (err) throw err;
  console.log("6. Asynchronous read completed.");
});

console.log("5. End of Script");


