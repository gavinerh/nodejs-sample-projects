// Define and use a function in a new file
// 1. Create a new file called notes.js
// 2. create getnotes function that returns your notes...
// 3. Export getNotes function
// 4. From app.js, load in and call the function printing message to console

const notes = require("./notes");

log = notes()
console.log(log.toString('utf-8'));