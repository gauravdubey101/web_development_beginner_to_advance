const fs = require("fs");
let text = fs.readFileSync("readf.txt","utf-8");
text = text.replace("modules", "Gaurav");

console.log("The content of the file is :")
console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("read2.txt", text);