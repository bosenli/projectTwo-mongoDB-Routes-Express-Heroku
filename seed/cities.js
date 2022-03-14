const db = require('../db')
const Country = require('../models/country')
const City = require('../models/city')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const USA = await Country.find({country_name:'United States'})
    const CHN = await Country.find({country_name:'China'})
    const JP = await Country.find({country_name:'Japan'})

    const cities = [
        {country: USA[0]._id, city_name: "New York City"},
        {country: CHN[0]._id, city_name: "Shang Hai"},
        {country: JP[0]._id, city_name: "Tokyo"},
    ]
  await City.insertMany(cities) //City from models
  console.log("Created cities!")
}
const run = async () => {
  await main()
  db.close()
}

run()