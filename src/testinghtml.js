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
  'Apple',
  'AppleID',
  'Apple111@manager.com',
  'AppleofficeNumber'
);

const newManager2 = new Manager(
  'Bille',
  'BilleID',
  'Bille111@manager.com',
  'BilleofficeNumber'
);
managerMenber.push(newManager1);
managerMenber.push(newManager2);
testingAllEmplyee[0].engineer = engMenber;

const newEngineer1 = new Engineer(
  'Cathy',
  'CathyID',
  'Cathy@engineer.com',
  'CathyfficeNumber'
);

engMenber.push(newEngineer1);

testingAllEmplyee[0].intern = internMenber;

const newIntern1 = new Intern(
  'Davie',
  'DavieID',
  'Davie@eintern.com',
  'DavieoficeNumber'
);

internMenber.push(newIntern1);

///////////////////////////////////////////////////

var managerMenber1 = [];
var engMenber1 = [];
var internMenber1 = [];

testingAllEmplyee[1] = {}
testingAllEmplyee[1].manager = managerMenber1;

const newManager3 = new Manager(
  'EvaTeam1',
  'EvaTeam1ID',
  'EvaTeam1@manager.com',
  'EvaTeam1officeNumber'
);

const newManager4 = new Manager(
  'FishTeam1',
  'FishTeam1ID',
  'FishTeam1@manager.com',
  'FishTeam1officeNumber'
);

const newManager5 = new Manager(
  'FHTeam1',
  'FHTeam1ID',
  'FHTeam1@manager.com',
  'FHTeam1officeNumber'
);
managerMenber1.push(newManager3);
managerMenber1.push(newManager4);
managerMenber1.push(newManager5);

testingAllEmplyee[1].engineer = engMenber1;

const newEngineer2 = new Engineer(
  'HarrieTeam1',
  'HarrieTeam1ID',
  'HarrieyTeam1@engineer.com',
  'HarrieTeam1oficeNumber'
);

engMenber1.push(newEngineer2);

testingAllEmplyee[1].intern = internMenber1;

const newIntern2 = new Intern(
  'IvyTeam1',
  'IvyTeam1ID',
  'IvyTeam1@eintern.com',
  'IvyTeam1oficeNumber'
);

const newIntern3 = new Intern(
  'JackyTeam1',
  'JackyTeam1ID',
  'JackyTeam1@eintern.com',
  'JackyTeam1oficeNumber'
);

internMenber1.push(newIntern2);
internMenber1.push(newIntern3);

// console.log(testingAllEmplyee)

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

writeToFile("newtestingWeb.html", generatorMarkdown(testingAllEmplyee))

