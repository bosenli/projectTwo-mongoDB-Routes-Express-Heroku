const db = require('../db')
const Bank = require('../models/bank')
const Country = require('../models/country')
const City = require('../models/city')
const loanofficer = require('../models/loanofficer')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const USA = await Country.find({country_name:'United States'})
  const CHN = await Country.find({country_name:'China'})
  const JP = await Country.find({country_name:'Japan'})

  const NYC = await City.find({city_name: "New York City"})
  const SH = await City.find({city_name: "Shang Hai"})
  const Tokyo = await City.find({city_name: "Tokyo"})

  const LO1 = await loanofficer.find({Name: "Navin"})
  const LO2 = await loanofficer.find({Name: "Keith"})
  const LO3 = await loanofficer.find({Name: "Sam"})

  const banks = [
    {bank_Name: 'JP Morgan', loan_amount:'1,000,000', loan_officer_id: LO1[0]._id , city_id: NYC[0]._id
    ,country_id: USA[0]._id },
    {bank_Name: 'Wells Fargo', loan_amount: '30,000,000', loan_officer_id: LO2[0]._id, city_id: SH[0]._id , country_id: CHN[0]._id},
    {bank_Name: 'Godman Sachs' , loan_amount: '900,000,000', loan_officer_id: LO3[0]._id , city_id: Tokyo[0]._id, country_id: JP[0]._id },
  ]

  await Bank.insertMany(banks)
  console.log("Created banks!")
}
const run = async () => {
  await main()
  db.close()
}

run()