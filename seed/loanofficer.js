const db = require('../db')
const Country = require('../models/country')
const LoanOfficer = require('../models/loanofficer')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const USA = await Country.find({country_name:'United States'})
    const CHN = await Country.find({country_name:'China'})
    const JP = await Country.find({country_name:'Japan'})

    const loanofficers = [
        {name: 'Navin', email: 'Navin@jpmorgan.com', country: USA[0]._id},
        {name: 'Keith', email: 'Keith@wellsfargo.com', country: CHN[0]._id},
        {name: 'Sam', email: 'Sam@goldmansachs.com', country: JP[0]._id},
    ]
  await LoanOfficer.insertMany(loanofficers)
  console.log("Created loan officers!")
}
const run = async () => {
  await main()
  db.close()
}

run()