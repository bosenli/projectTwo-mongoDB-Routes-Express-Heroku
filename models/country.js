const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Country = new Schema(
  {
    country_id: {type:String, required: true},
    country_name: { type: String, required: true },
    //geolocation: { type: String, required: true }
  },
  {timestamps: true}
)

//first argument is collection , second is the schema 
module.exports = mongoose.model('countries', Country)