var fs = require("fs");

// creates file if it does not exist

// fs.writeFile("log.txt", "Hello world???", function (error) {
//   if (error) {
//     return console.log(error);
//   }

//   console.log("file saved");
// });

// overwrites current info in file

// fs.writeFile("log.txt", "Hello world again???", function (error) {
//   if (error) {
//     return console.log(error);
//   }

//   console.log("file saved");
// });

var userInput = process.argv[2];

// console.log(userInput);

fs.writeFile("log.txt", userInput, function (error) {
  if (error) {
    return console.log(error);
  }

  console.log("file saved");
});
