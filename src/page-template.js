var htmlContent = ``;

function generatehtml(data) {
  var numOfTeams = Object.keys(data);
  console.log(`numOfTeams : ${numOfTeams}`);
  for (var i = 0; i < numOfTeams.length; i++) {
    var newTeamContainer =
    `<div class="aTeam team${i}">
        <p>hi this is team ${i}</p>
        <div>${generateTeam(data,i)}</div>
    </div>`;
    htmlContent += newTeamContainer;
  }

  function generateTeam(data, i) {
    var allTeamMenberinThisTeam = ``

    if(data[i].manager){
      var allManagerDivinThisTeam = generateManagerDiv(data, i);
       allTeamMenberinThisTeam += allManagerDivinThisTeam;
    }
    if(data[i].engineer){
      var allEnginnerDivinThisTeam = generateEngineerDiv(data, i);
       allTeamMenberinThisTeam += allEnginnerDivinThisTeam;
    }
    if(data[i].intern){
      var allInternDivinThisTeam = generateInternDiv(data, i);
       allTeamMenberinThisTeam += allInternDivinThisTeam;
    }


    return allTeamMenberinThisTeam;
  }

  function generateManagerDiv(data, i) {
    var numOfManager = data[i].manager.length;
    var managerDiv = ``;

    for (var j = 0; j < numOfManager; j++) {
      var manageRole = `<p class="oneRow"> Role : Manager </p>`;
      var managername = `<p class="oneRow"> Name :${JSON.stringify(
        data[i].manager[j].name
      )}</p>`;
      var manageId = `<p class="oneRow"> ID :${JSON.stringify(
        data[i].manager[j].id
      )}</p>`;
      var manageEmail = `<p class="oneRow"> Email :${JSON.stringify(
        data[i].manager[j].email
      )}</p>`;
      var manageOfficeNumber = `<p class="oneRow"> Office Number :${JSON.stringify(
        data[i].manager[j].officeNumber
      )}</p>`;

      var managerdata =
         managername + manageRole + manageId + manageEmail + manageOfficeNumber;

      var singleMangerDiv = `<div class="managerDiv team${i}manger${j} singleEmplyoee">${managerdata}</div>`;
      managerDiv += singleMangerDiv;
    }
    return managerDiv;
  }

  function generateEngineerDiv(data, i) {
    var numOfEngineer = data[i].engineer.length;
    var engineerDiv = ``;

    for (var j = 0; j < numOfEngineer; j++) {
      var engineerRole = `<p class="oneRow"> Role : Engineer </p>`;
      var engineername = `<p class="oneRow"> Name :${JSON.stringify(
        data[i].engineer[j].name
      )}</p>`;
      var engineerId = `<p class="oneRow"> ID :${JSON.stringify(
        data[i].engineer[j].id
      )}</p>`;
      var engineerEmail = `<p class="oneRow"> Email :${JSON.stringify(
        data[i].engineer[j].email
      )}</p>`;
      var engineerGithub = `<p class="oneRow"> Github :${JSON.stringify(
        data[i].engineer[j].github
      )}</p>`;

      var engineerdata =

        engineername +engineerRole +
        engineerId +
        engineerEmail +
        engineerGithub;

      var singleEngineerDiv = `<div class="engineerDiv team${i}enginer${j} singleEmployee">${engineerdata}</div>`;
      engineerDiv += singleEngineerDiv;
    }
    return engineerDiv;
  }

  function generateInternDiv(data, i) {
    var numOfIntern = data[i].intern.length;
    var internDiv = ``;

    for (var j = 0; j < numOfIntern; j++) {
      var internRole = `<p class="oneRow"> Role : Intern </p>`;
      var internName = `<p class="oneRow employeeNAme"> Name :${JSON.stringify(
        data[i].intern[j].name
      )}</p>`;
      var internId = `<p class="oneRow"> ID :${JSON.stringify(
        data[i].intern[j].id
      )}</p>`;
      var internEmail = `<p class="oneRow"> Email :${JSON.stringify(
        data[i].intern[j].email
      )}</p>`;
      var internSchool = `<p class="oneRow"> Github :${JSON.stringify(
        data[i].intern[j].school
      )}</p>`;

      var internData =
        internName + internRole + internId + internEmail + internSchool;

      var singleInternDiv = `<div class="internDiv team${i}enginer${j} singleEmployee">${internData}</div>`;

      internDiv += singleInternDiv;
    }
    return internDiv;
  }

  return htmlContent;
}

function generateMarkdown(data) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./src/style.css">
    <title>Document</title>
  </head>
  <body>
  ${generatehtml(data)}
  </body>
  </html>
    `;
}

module.exports = generateMarkdown;
