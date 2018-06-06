var fs = require('fs')

var jsonData = ''

fs.readFile('./boulder.json', 'utf8', (err, data) => {
  if(err) throw err
  jsonData = data.split('\n')
  console.log(jsonData[0])
})

// revenue / 100000 | Math.floor | create graph based on count of each org within interval
