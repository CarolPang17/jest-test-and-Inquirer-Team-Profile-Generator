const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generatorMarkdown = require(path.join(
  __dirname,
  "/page-template.js"
));
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

testingAllEmplyee = {};
var managerMenber = [];
var engMenber = [];
var internMenber = [];

testingAllEmplyee[0] = {}
testingAllEmplyee[0].manager = managerMenber;
const newManager1 = new Manager(
  'Ava',
  'AvaID',
  'Ava@manager.com',
  'Ava123456'
);

const newManager2 = new Manager(
  'Bille',
  'BilleID',
  'BilleTeam0@manager.com',
  'BilleofficeNumber'
);
managerMenber.push(newManager1);
managerMenber.push(newManager2);
testingAllEmplyee[0].engineer = engMenber;

const newEngineer1 = new Engineer(
  'Cathy',
  'CathyID',
  'Cathy@engineer.com',
  'CathyGithub'
);

engMenber.push(newEngineer1);

testingAllEmplyee[0].intern = internMenber;

const newIntern1 = new Intern(
  'David',
  'DavidID',
  'David@eintern.com',
  'DavidSchool'
);

internMenber.push(newIntern1);

///////////////////////////////////////////////////

var managerMenber1 = [];
var engMenber1 = [];
var internMenber1 = [];

testingAllEmplyee[1] = {}
testingAllEmplyee[1].manager = managerMenber1;

const newManager3 = new Manager(
  'Eva',
  'EvaTeam1ID',
  'EvaTeam1@manager.com',
  'EvaTeam1123456'
);

const newManager4 = new Manager(
  'Frank',
  'FrankTeam1ID',
  'FrankTeam1@manager.com',
  'FrankTeam1123456'
);

const newManager5 = new Manager(
  'Fiona',
  'FionaTeam1ID',
  'FionaTeam1@manager.com',
  'FionaTeam1officeNumber'
);
managerMenber1.push(newManager3);
managerMenber1.push(newManager4);
managerMenber1.push(newManager5);

testingAllEmplyee[1].engineer = engMenber1;

const newEngineer2 = new Engineer(
  'Harri',
  'Harrie1234',
  'Harrie1234@engineer.com',
  'Harrie1Github'
);

engMenber1.push(newEngineer2);

testingAllEmplyee[1].intern = internMenber1;

const newIntern2 = new Intern(
  'Ivy',
  'Ivy1234',
  'Ivy1234@eintern.com',
  'IvySchool'
);

const newIntern3 = new Intern(
  'Jacky',
  'Jacky1234',
  'Jacky1234@eintern.com',
  'JackySchool'
);

internMenber1.push(newIntern2);
internMenber1.push(newIntern3);

// console.log(testingAllEmplyee)
//////////////////////////////////////////////////
var managerMenber2 = [];
var engMenber2 = [];
var internMenber2 = [];

testingAllEmplyee[2] = {}
testingAllEmplyee[2].manager = managerMenber2;
testingAllEmplyee[2].intern = internMenber2;

testingAllEmplyee[2].engineer = engMenber2;

const newEngineer3 = new Engineer(
  'Katie',
  'Katie1234',
  'Katie1234@engineer.com',
  'KatieGithub'
);

const newEngineer4 = new Engineer(
  'Lily',
  'Lily1234',
  'Lily1234@engineer.com',
  'LilyGithub'
);

engMenber2.push(newEngineer3);
engMenber2.push(newEngineer4);




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
// console.log(JSON.stringify(testingAllEmplyee))
writeToFile("../sample.html", generatorMarkdown(testingAllEmplyee))

