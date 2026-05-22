console.log("1. Start of script");
Promise.resolve().then(() => console.log("2. MicroTask"));
setTimeout(() => console.log("3.timer"), 0);
const fs = require("fs");
fs.readFile("user-details.txt", () => console.log("4. I/O operations"));
setImmediate(() => console.log("5. Immediate"));

process.on("exit", (code) => {
  console.log("6. Exit event");
});

console.log("7. End of Script");
