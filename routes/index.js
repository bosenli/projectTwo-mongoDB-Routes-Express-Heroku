const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('welcome to bank info'))

//banks
router.post('/banks', controllers.createBank)
router.get('/banks', controllers.getAllBanks)
router.get('/banks/:id', controllers.getBanksById)
router.put('/banks/:id', controllers.updateBank)
router.delete('/banks/:id', controllers.deleteBank)

//cities
router.post('/cities', controllers.createCity)
router.get('/cities', controllers.getAllCities)
router.get('/cities/:id', controllers.getCityById)
router.put('/cities/:id', controllers.updateCity)
router.delete('/cities/:id', controllers.deleteCity)

//country
router.post('/countries', controllers.createCountry)
router.get('/countries', controllers.getAllCountries)
router.get('/countries/:id', controllers.getCountriesById)
router.put('/countries/:id', controllers.updateCountry)
router.delete('/countries/:id', controllers.deleteCountry)

//loan officer
router.post('/loanofficers', controllers.createLoanofficer)
router.get('/loanofficers', controllers.getAllLoanofficer)
router.get('/loanofficers/:id', controllers.getLoanofficerssById)
router.put('/loanofficers/:id', controllers.updateLoanofficers)
router.delete('/loanofficers/:id', controllers.deleteLoanofficer)

module.exports = router;

