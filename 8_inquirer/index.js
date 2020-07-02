var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter name",
      name: "Name",
    },
    {
      type: "input",
      message: "Enter user ID",
      name: "UserID",
    },
    {
      type: "password",
      message: "Enter password",
      name: "Password",
    },
  ])
  .then(function (response) {
    console.log(response.Name);
    console.log(response.UserID);
    console.log(response.Password);
  });
