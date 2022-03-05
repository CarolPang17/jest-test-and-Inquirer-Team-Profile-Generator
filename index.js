const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generatorMarkdown = require(path.join(__dirname, "/src/page-template.js"))
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

var allEmplyee ={}
var teamNum = -1;
var engMenber;
var internMenber;

const questions = async () => {
  const answers = await inquirer
  .prompt([
  {
    type: "input",
    message: "What the name of this emplyee?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the ID number of this emplyee?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the email of this emplyee?",
    name: "email",
  },
  {
    type: "list",
    message: "What is the role of this emplyee?",
    name: "role",
    choices: ["Engineer", "Intern", "Manager"],
  }
])
if(answers.role === "Manager"){
  teamNum = teamNum + 1;
  console.log(`teamNum : ${teamNum}`)
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

  allEmplyee[teamNum] = {};
  allEmplyee[teamNum].manager = newManager
  engMenber = [];
  internMenber = [];

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
  allEmplyee[teamNum].engineer = engMenber
  engMenber.push(newEngineer)
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

  allEmplyee[teamNum].intern = internMenber
  internMenber.push(newIntern)
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
 await questions()
 await questions()
 await questions()
 await questions()


  writeToFile("newWeb.html", generatorMarkdown(allEmplyee))
}

init();
