
function generateTeam(data) {
  return JSON.stringify(data)
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