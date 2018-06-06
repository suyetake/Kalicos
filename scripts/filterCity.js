var fs = require('fs'),
    csv = require('csv')

var fileStream = fs.createReadStream('all_nonprofits.csv'),
    parser = csv.parse({columns: true})

fileStream.setEncoding('utf8')

fileStream.on('data', chunk => {
  parser.write(chunk)
})

fileStream.on('end', () => console.log('Finished\n'))

parser.on('readable', () => {
  while(data = parser.read()) {
    if(data['CITY_1'] == 'BOULDER') {
      fs.appendFile('boulder.json', JSON.stringify(data) + '\n', (err) => {
        if (err) throw err
      })
    }
  }
})
