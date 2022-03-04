const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generatorMarkdown = require(path.join(__dirname, "/src/page-template.js"))
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const allEmplyee =[]

const questions = async () => {
  const answers = await inquirer
  .prompt([
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
])
if(answers.role === "Manager"){
  await addManger(answers)
}

if(answers.role === "Engineer"){
  await addEngineer(answers)
}

if(answers.role === "Intern"){
  await addIntern(answers)
}

}

const addManger = async (answers) => {
  const mangerAnswers = await inquirer
  .prompt([
    {
      type: "input",
      message: "please enter the office number of this Manager?",
      name: "officeNumber"
    }
  ])
  const newManager = new Manager(
    answers.name,
    answers.id,
    answers.email,
    mangerAnswers.officeNumber
  );
  allEmplyee.push(newManager)
    console.log(allEmplyee)
return
}

const addEngineer = async (answers) => {
  const enginnerAnswers = await inquirer
  .prompt([
    {
      type: "input",
      message: "please enter the GitHub user name for this Engineer?",
      name: "github"
    }
  ])
  const newEngineer = new Engineer(
    answers.name,
    answers.id,
    answers.email,
    enginnerAnswers.github
  );
  allEmplyee.push(newEngineer)
    console.log(allEmplyee)
return
}

const addIntern = async (answers) => {
  const internAnswers = await inquirer
  .prompt([
    {
      type: "input",
      message: "Please enter the school of this intern attend?",
      name: "school",
    }
  ])
  const newIntern = new Intern(
    answers.name,
    answers.id,
    answers.email,
    internAnswers.school
  );
  allEmplyee.push(newIntern)
    console.log(allEmplyee)
return
}


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


async function init() {
  await questions()

  await questions()

  await questions()

}

init();
