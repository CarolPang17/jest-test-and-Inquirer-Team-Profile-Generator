
var htmlContent = [];


function generatehtml(data) {
   var numOfTeams = Object.keys(data)
   console.log(`numOfTeams : ${numOfTeams}`)
   for (var i = 0; i < numOfTeams.length ;i++){
    var newTeamContainer = `<div class="aTeam team${i}"> <p>hi this is team ${i}</p> <div>${generateTeam(data,i)}</div></div>`
    htmlContent.push(newTeamContainer)

    //  var numOfManger = data[i].manager.length
    //  console.log(`curret Team  : team ${i}`)
    //  console.log(`curret numOfManger  : ${numOfManger}`)
    //  for(var j = 0; j < numOfManger ; j++){
    //   htmlContent.push(JSON.stringify(data[i].manager[j]))
    //  }
   }


   function generateTeam(data,i){
    //  var numOfManger = data[i].manager.length
    //  console.log(`curret Team  : team ${i}`)
    //  console.log(`curret numOfManger  : ${numOfManger}`)
    //  for(var j = 0; j < numOfManger ; j++){
    //   htmlContent.push(JSON.stringify(data[i].manager[j]))
    //  }

    return 'try this work???'
   }

  return htmlContent ;

  // return JSON.stringify(data)
}



function generateMarkdown(data) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
  </head>
  <body>
  ${generatehtml(data)}
  </body>
  </html>
    `;
};


module.exports = generateMarkdown;