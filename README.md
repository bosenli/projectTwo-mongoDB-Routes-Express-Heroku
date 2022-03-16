# projectTwo-mongoDB-Routes-Express-Heroku

### Installation
First, clone my repo. To do that open your terminal and type git clone followed by the repo link.

git clone # https://github.com/bosenli/projectTwo-mongoDB-Routes-Express-Heroku.git #
make sure to replace # https://github.com/bosenli/projectTwo-mongoDB-Routes-Express-Heroku.git # with the actual repo link.

Then open VisualStudioCode Bash terminal.

Populating seed file
cd into the file and run the following command on your terminal

## Must be ran in the order below ##
```
node seed/countries.js
node seed/cities.js
node seed/loanofficer.js
node seed/banks.js
```

## Running on Postman ##
I am going to assume that you have postman downloaded, if not download it. then start the server in your terminal using the command below

npm start
You should be able to run it locally on postman

Endpoints for CRUD
//banks
```
router.post('/banks', controllers.createBank)
router.get('/banks', controllers.getAllBanks)
router.get('/banks/:id', controllers.getBanksById)
router.put('/banks/:id', controllers.updateBank)
router.delete('/banks/:id', controllers.deleteBank)
```

//cities
```
router.post('/cities', controllers.createCity)
router.get('/cities', controllers.getAllCities)
router.get('/cities/:id', controllers.getCityById)
router.put('/cities/:id', controllers.updateCity)
router.delete('/cities/:id', controllers.deleteCity)
```

//country
```
router.post('/countries', controllers.createCountry)
router.get('/countries', controllers.getAllCountries)
router.get('/countries/:id', controllers.getCountriesById)
router.put('/countries/:id', controllers.updateCountry)
router.delete('/countries/:id', controllers.deleteCountry)
```

//loan officer
```
router.post('/loanofficers', controllers.createLoanofficer)
router.get('/loanofficers', controllers.getAllLoanofficer)
router.get('/loanofficers/:id', controllers.getLoanofficerssById)
router.put('/loanofficers/:id', controllers.updateLoanofficers)
router.delete('/loanofficers/:id', controllers.deleteLoanofficer)
```

Country Schema
```
const Country = new Schema(
  {
    country_id: {type:String, required: true},
    country_name: { type: String, required: true },
    //geolocation: { type: String, required: true }
  },
  {timestamps: true}
)
```

City Schema
```
const City = new Schema(
  {
    country: {type:Schema.Types.ObjectId, ref: 'country_id'},
    city_name: { type: String, required: true }
   
  },
  {timestamps: true}
)
```

Loan officer Schema
```
const LoanOfficer = new Schema(
  { 
    name: {type: String, required: true },
    //username: { type: String, required: true },
    email: { type: String, required: true },
    //password_digest: {type: String, required: true}
    country: {type: Schema.Types.ObjectId, ref: 'country_id'}
  },
  {timestamps: true}
)
```

Bank Schema

```
const Bank = new Schema(
  {
    bank_Name: { type: String, required: true },
    loan_amount: {type: String, required: true},
    loan_officer_id: {type: Schema.Types.ObjectId, ref: 'loanofficers'},  //collection name
    city_id: {type: Schema.Types.ObjectId, ref: 'cities'},
    country_id: {type: Schema.Types.ObjectId, ref: 'countries'}, 
  },
  {timestamps: true}
)
```
## Hosted on Heroku

Heroku set up instruction: https://devcenter.heroku.com/articles/heroku-cli
Need MongoDB atlas as well: 
https://www.mongodb.com/developer/how-to/use-atlas-on-heroku/

App link example below:

https://powerful-mesa-04468.herokuapp.com/banks
