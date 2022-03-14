//CRUD functions
//const Item = require('../models/item')
const db = require('../db')
const Bank = require('../models/bank')
const City = require('../models/city')
const Country = require('../models/country')
const LoanOfficer = require('../models/loanofficer')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//CRUD for cities Schema
async function createBank (req, res) {
    try {
        const bank = await new Bank(req.body)
        await bank.save()
        return res.status(201).json({
            bank,
        })

    } catch (error) {
        return res.status(500).json({error: error.message})
    }

}

async function getAllBanks(req, res) {
    try {
        const banks = await Bank.find().populate("loan_officer_id", "name email country -_id").populate("city_id", "city_name -_id").populate("country_id")
        return res.status(200).json({banks})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
async function getBanksById(req, res) {
    try {
        const { id } = req.params;
        const bank = await Bank.findById(id);
        if (bank) {
            return res.status(200).json({bank})
        }
        return res.status(404).send('Bank with the specified ID does not exist');

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//updating
const updateBank = async (req, res) => {
    try {
      const { id } = req.params
     Bank.findByIdAndUpdate(id, req.body, { new: true }, function (err, bank) {
       
        if (err !== null) {
          console.log(err, 'error')
          res.status(404).send(err.message)
        } else {
          console.log(bank)
          res.json(bank)
        }
      })
    } catch (error) {
     return  res.status(500).send(error.message)
    }
  }

//deleting

async function deleteBank(req, res) {
    try {
        const {id} = req.params;
        const deleted = await Bank.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Bank deleted')
        }
        throw new Error("Bank not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//CRUD for City Schema
async function createCity (req, res) {
    try {
        const city = await new City(req.body)
        await city.save()
        return res.status(201).json({
            city,
        })

    } catch (error) {
        return res.status(500).json({error: error.message})
    }

}

async function getAllCities(req, res) {
    try {
        const cities = await City.find()
        return res.status(200).json({cities})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getCityById(req, res) {
    try {
        const {id} = req.params;
        const city = await City.findById(id);
        if (city) {
            return res.status(200).json({city})
        }
        return res.status(404).send('city with the specified ID does not exist');

    } catch (error) {
        return response.status(500).send(error.message);
    }
}

//updating
const updateCity =  async (req, res) => {
    try {
      const { id } = req.params
      City.findByIdAndUpdate(id, req.body, { new: true }, function(err, city) {
       
        if (err !== null) {
          console.log(err, 'error')
          res.status(404).send(err.message)
        } else {
          console.log(city)
          res.json(city)
        }
      })
    } catch (error) {
     return  res.status(500).send(error.message)
    }
  }

//deleting

async function deleteCity(req, res) {
    try {
        const {id} = req.params;
        const deleted = await City.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('City deleted')
        }
        throw new Error("Citynot found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//CRUD for Country Schema
async function createCountry (req, res) {
    try {
        const country = await new Country(req.body)
        await country.save()
        return res.status(201).json({
            country,
        })

    } catch (error) {
        return res.status(500).json({error: error.message})
    }

}

async function getAllCountries(req, res) {
    try {
        const countries = await Country.find()
        return res.status(200).json({countries})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
async function getCountriesById(req, res) {
    try {
        const {id} = req.params;
        const country = await Country.findById(id);
        if (country) {
            return res.status(200).json({cafe})
        }
        return res.status(404).send('country with the specified ID does not exist');

    } catch (error) {
        return response.status(500).send(error.message);
    }
}

//updating
const updateCountry =  async (req, res) => {
    try {
      const { id } = req.params
      Country.findByIdAndUpdate(id, req.body, { new: true }, function (err, country) {
       
        if (err !== null) {
          console.log(err, 'error')
          res.status(404).send(err.message)
        } else {
          console.log(country)
          res.json(country)
        }
      })
    } catch (error) {
     return  res.status(500).send(error.message)
    }
  }

//deleting

async function deleteCountry(req, res) {
    try {
        const {id} = req.params;
        const deleted = await Cafe.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('country deleted')
        }
        throw new Error("country not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



//CRUD for loanofficer Schema
async function createLoanofficer (req, res) {
    try {
        const loanofficer = await new LoanOfficer(req.body)
        await loanofficer.save()
        return res.status(201).json({
            loanofficer,
        })

    } catch (error) {
        return res.status(500).json({error: error.message})
    }

}

async function getAllLoanofficer(req, res) {
    try {
        const loanofficers = await LoanOfficer.find()
        return res.status(200).json({loanofficers})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getLoanofficerssById(req, res) {
    try {
        const {id} = req.params;
        const loanofficers = await LoanOfficer.findById(id);
        if (loanofficers) {
            return res.status(200).json({loanofficers})
        }
        return res.status(404).send('loanofficers with the specified ID does not exist');

    } catch (error) {
        return response.status(500).send(error.message);
    }
}

//updating
const updateLoanofficers =  async (req, res) => {
    try {
      const { id } = req.params
      Loanofficer.findByIdAndUpdate(id, req.body, { new: true }, function (err, loanofficer) {
       
        if (err !== null) {
          console.log(err, 'error')
          res.status(404).send(err.message)
        } else {
          console.log(loanofficer)
          res.json(loanofficer)
        }
      })
    } catch (error) {
     return  res.status(500).send(error.message)
    }
  }

//deleting

async function deleteLoanofficer(req, res) {
    try {
        const {id} = req.params;
        const loanofficer = await LoanOfficer.findByIdAndDelete(id)
        if (loanofficer) {
            return res.status(200).send('Loan Officer deleted')
        }
        throw new Error("LoanOfficer not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    createBank,
    getAllBanks,
    getBanksById,
    updateBank,
    deleteBank,
    createCity,
    getAllCities,
    getCityById,
    updateCity,
    deleteCity,
    createCountry,
    getAllCountries,
    getCountriesById,
    updateCountry,
    deleteCountry,
    createLoanofficer,
    getAllLoanofficer,
    getLoanofficerssById,
    updateLoanofficers,
    deleteLoanofficer

    
}