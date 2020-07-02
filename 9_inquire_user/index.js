var inquirer = require("inquirer");
var fs = require("fs");
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "checkbox",
      name: "stack",
      message: "What Languages do you know?",
      choices: ["JavaScript", "CSS", "HTML", "MySQL"],
    },
    {
      type: "list",
      name: "contact",
      message: "What is the best way to reach you???",
      choices: ["LinkedIn", "Email", "Phone"],
    },
  ])
  .then(function (response) {
    console.log(response);
    fs.writeFile(response.name + ".json", JSON.stringify(response), function (
      error
    ) {
      if (error) {
        console.log(error);
      } else {
        console.log("success");
      }
    });
  });
