// Napoleon's team

var inquirer = require("inquirer");
var fs = require("fs");
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "userInput",
    },
    {
      type: "input",
      message: "What languages do you know?",
      name: "userInput2",
    },
    {
      type: "input",
      message: "What is your preferred method of communication?",
      name: "userInput3",
    },
  ])
  .then(function (response) {
    console.log(response.userInput);
    console.log(response.userInput2);
    console.log(response.userInput3);
    fs.writeFile(
      "userInput.json",
      `${response.userInput}, ${response.userInput2}, ${response.userInput3}`,
      function (err) {
        if (err) {
          return console.log(err);
        } else {
          console.log("fileSaved!");
        }
      }
    );
  });
