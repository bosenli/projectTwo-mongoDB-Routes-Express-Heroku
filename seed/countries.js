const db = require('../db')
const Country = require('../models/country')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const countries = [
      {country_id: 'C1', country_name: "United States"},
      {country_id: 'C2',country_name: "China"},
      {country_id: 'C3',country_name: "Japan"},
  ]

  await Country.insertMany(countries)
  console.log("Created Countries!")
}
const run = async () => {
  await main()
  db.close()
}

run()