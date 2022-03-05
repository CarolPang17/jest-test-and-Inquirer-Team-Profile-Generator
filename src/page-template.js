
var htmlContent = [];


function generateTeam(data) {
   var numOfTeams = Object.keys(data)
   console.log(`numOfTeams : ${numOfTeams}`)
   for (var i = 0; i < numOfTeams.length ;i++){
     var numOfManger = data[i].manager.length
     console.log(`curret Team  : team ${i}`)
     console.log(`curret numOfManger  : ${numOfManger}`)
     for(var j = 0l j < numOfManger ; j++){
       
     }
    htmlContent.push(JSON.stringify(data[i].manager))
   }
  //  numOfManger = data[i].manager.length
  // //  htmlContent.push(JSON.stringify(data[i].manager)
  // //  for(var j = 0; j < numOfManger ;j++){
  // //   htmlContent.push(JSON.stringify(data[i].manager) )
  // //  }
  // }
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
    <title>Document</title>
  </head>
  <body>
  ${generateTeam(data)}
  </body>
  </html>
    `;
};


module.exports = generateMarkdown;