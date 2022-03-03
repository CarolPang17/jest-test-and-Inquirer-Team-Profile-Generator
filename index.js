const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generatorMarkdown = require(path.join(__dirname, "/src/page-template.js"))

const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "list",
    message: "What is your role?",
    name: "role",
    choices: ["Engineer", "Intern", "Manager"],
  }
]


function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      console.log(fileName);
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
}


function init() {
  inquirer.prompt(questions)
  .then((allAnswers) => {
    writeToFile("newWeb.html", generatorMarkdown(allAnswers))
  })
}

init();