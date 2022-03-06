var htmlContent = ``;

function generatehtml(data) {
  var numOfTeams = Object.keys(data);
  console.log(`numOfTeams : ${numOfTeams}`);
  for (var i = 0; i < numOfTeams.length; i++) {
    var newTeamContainer = `<div class="aTeam team${i}">
        <p class="printTeamNum" > ${generateTeamNumber(i)}</p>
        <div class="teamInnerContainer">${generateTeam(data, i)}</div>
    </div>`;
    htmlContent += newTeamContainer;
  }

  function generateTeam(data, i) {
    var allTeamMenberinThisTeam = ``;

    if (data[i].manager) {
      var allManagerDivinThisTeam = generateManagersDivs(data, i);
      allTeamMenberinThisTeam += allManagerDivinThisTeam;
    }
    if (data[i].engineer) {
      var allEnginnerDivinThisTeam = generateEngineersDivs(data, i);
      allTeamMenberinThisTeam += allEnginnerDivinThisTeam;
    }
    if (data[i].intern) {
      var allInternDivinThisTeam = generateInternsDivs(data, i);
      allTeamMenberinThisTeam += allInternDivinThisTeam;
    }

    return allTeamMenberinThisTeam;
  }

  function generateTeamNumber(i) {
    if(i === 0){
      return 'My Team'
    } else {
      return ` Other Team ${i}`
    }
  }

  function generateManagersDivs(data, i) {
    var numOfManager = data[i].manager.length;
    var managerDiv = ``;

    for (var j = 0; j < numOfManager; j++) {

      var manageRole = `<p class="oneRow bigRow"> Role : ${
        data[i].manager[j].getRole()} </p>`;
      var managername = `<p class="oneRow bigRow"> Name : ${
        data[i].manager[j].getName()
      }</p>`;
      var manageId = `<p class="oneRow smallRow"> ID : ${ data[i].manager[j].getId()
      }</p>`;
      var manageEmail = `<p class="oneRow smallRow"> Email : <a href="mailto:${data[i].manager[j].getEmail()}">${ data[i].manager[j].getEmail()
      } </a></p>`;
      var manageOfficeNumber = `<p class="oneRow smallRow"> Office Number : ${ data[i].manager[j].getOfficeNumber()}</p>`;

      var managerdata =
        managername + manageRole + manageId + manageEmail + manageOfficeNumber;

      var singleMangerDiv = `<div class="managerDiv team${i}manger${j} singleEmployee">${managerdata}</div>`;
      managerDiv += singleMangerDiv;
    }
    return managerDiv;
  }

  function generateEngineersDivs(data, i) {
    var numOfEngineer = data[i].engineer.length;
    var engineerDiv = ``;

    for (var j = 0; j < numOfEngineer; j++) {
      var engineerRole = `<p class="oneRow bigRow"> Role : ${data[i].engineer[j].getRole()} </p>`;
      var engineername = `<p class="oneRow bigRow"> Name : ${data[i].engineer[j].getName()}</p>`;
      var engineerId = `<p class="oneRow smallRow"> ID : ${data[i].engineer[j].getId()}</p>`;
      var engineerEmail = `<p class="oneRow smallRow"> Email : <a href="mailto:${data[i].engineer[j].getEmail()}">${data[i].engineer[j].getEmail()}</a></p>`;
      var engineerGithub = `<p class="oneRow smallRow"> Github : <a href="https://github.com/${data[i].engineer[j].getGithub()}">${data[i].engineer[j].getGithub()}</a></p>`;

      var engineerdata =
        engineername +
        engineerRole +
        engineerId +
        engineerEmail +
        engineerGithub;

      var singleEngineerDiv = `<div class="engineerDiv team${i}enginer${j} singleEmployee">${engineerdata}</div>`;
      engineerDiv += singleEngineerDiv;
    }
    return engineerDiv;
  }

  function generateInternsDivs(data, i) {
    var numOfIntern = data[i].intern.length;
    var internDiv = ``;

    for (var j = 0; j < numOfIntern; j++) {
      var internRole = `<p class="oneRow bigRow"> Role : ${data[i].intern[j].getRole()} </p>`;
      var internName = `<p class="oneRow bigRow"> Name : ${data[i].intern[j].getName()}</p>`;
      var internId = `<p class="oneRow smallRow"> ID : ${data[i].intern[j].getId()}</p>`;
      var internEmail = `<p class="oneRow smallRow"> Email : <a href="mailto:${data[i].intern[j].getEmail()}">${data[i].intern[j].getEmail()} </a></p>`;
      var internSchool = `<p class="oneRow smallRow"> School :${data[i].intern[j].getSchool()}</p>`;

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
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <title> Team menber info </title>
  </head>
  <body>
  ${generatehtml(data)}
  </body>
  </html>
    `;
}

module.exports = generateMarkdown;
