var fs = require("fs");

// fs.readFile("data.csv", "utf-8", function (error, data) {
//   if (error) {
//     return console.log(error);
//   } else {
//     console.log(data);
//   }
// });

fs.readFile("./hello.txt", "utf-8", function (error, data) {
  if (error) {
    return console.log(error);
  } else {
    console.log(data);
  }
});
