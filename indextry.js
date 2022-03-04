const inquirer = require('inquirer');
// const Manager = require('../lib/Manager');
const fs = require("fs");
const path = require("path");
const Manager = require(path.join(__dirname, "/lib/Manager.js"))

class Team {
  constructor() {
    this.teamNum = 0;
    this.isAddingMember = false;
    this.teamMenber = [];
    this.currentTeamMenber;
    this.manager;
  }

   managerQuestions (){
    inquirer.prompt(
      [
        {
          type: "input",
          message: "What is your office number",
          name: "officeNumber",
        }
      ]
    )
  }

  initializeTeam() {
    this.teamMenber.push(new Employee('goblin', 'sword'));
    this.teamMenber.push(new Employee('orc', 'baseball bat'));
    this.teamMenber.push(new Employee('skeleton', 'axe'));

    this.currentTeamMenber = this.teamMenber[0];

    inquirer
      .prompt( {
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
      })
      .then(({ role }) => {
        if(role === "Manager")
        return managerQuestions()
        // this.manager = new Manager(name,);

        // this.startNewBattle();
      });


  }

  // startNewBattle() {
  //   if (this.player.agility > this.currentEnemy.agility) {
  //     this.isPlayerTurn = true;
  //   } else {
  //     this.isPlayerTurn = false;
  //   }
  //   console.log('Your stats are as follows:');
  //   console.table(this.player.getStats());

  //   console.log(this.currentEnemy.getDescription());

  //   this.battle();
  // }

  // battle() {
  //   if (this.isPlayerTurn) {
  //     inquirer
  //       .prompt({
  //         type: 'list',
  //         message: 'What would you like to do?',
  //         name: 'action',
  //         choices: ['Attack', 'Use potion']
  //       })
  //       .then(({ action }) => {
  //         if (action === 'Use potion') {
  //           if (!this.player.getInventory()) {
  //             console.log("You don't have any potions!");
  //             return this.checkEndOfBattle();
  //           }

  //           inquirer
  //             .prompt({
  //               type: 'list',
  //               message: 'Which potion would you like to use?',
  //               name: 'action',
  //               choices: this.player
  //                 .getInventory()
  //                 .map((item, index) => `${index + 1}: ${item.name}`)
  //             })
  //             .then(({ action }) => {
  //               const potionDetails = action.split(': ');

  //               this.player.usePotion(potionDetails[0] - 1);
  //               console.log(`You used a ${potionDetails[1]} potion.`);
  //               this.checkEndOfBattle();
  //             });
  //         } else {
  //           const damage = this.player.getAttackValue();
  //           this.currentEnemy.reduceHealth(damage);

  //           console.log(`You attacked the ${this.currentEnemy.name}`);
  //           console.log(this.currentEnemy.getHealth());

  //           this.checkEndOfBattle();
  //         }
  //       });
  //   } else {
  //     const damage = this.currentEnemy.getAttackValue();
  //     this.player.reduceHealth(damage);

  //     console.log(`You were attacked by the ${this.currentEnemy.name}`);
  //     console.log(this.player.getHealth());

  //     this.checkEndOfBattle();
  //   }
  // }

  // checkEndOfBattle() {
  //   if (this.player.isAlive() && this.currentEnemy.isAlive()) {
  //     this.isPlayerTurn = !this.isPlayerTurn;
  //     this.battle();
  //   } else if (this.player.isAlive() && !this.currentEnemy.isAlive()) {
  //     console.log(`You've defeated the ${this.currentEnemy.name}`);

  //     this.player.addPotion(this.currentEnemy.potion);
  //     console.log(`${this.player.name} found a ${this.currentEnemy.potion.name} potion`);

  //     this.roundNumber++;

  //     if (this.roundNumber < this.teamMenber.length) {
  //       this.currentEnemy = this.teamMenber[this.roundNumber];
  //       this.startNewBattle();
  //     } else {
  //       console.log('You win!');
  //     }
  //   } else {
  //     console.log("You've been defeated!");
  //   }
  // }
}

// module.exports = Game;
