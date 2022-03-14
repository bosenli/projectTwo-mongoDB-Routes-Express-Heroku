const mongoose = require('mongoose')
const Schema = mongoose.Schema

const City = new Schema(
  {
    country: {type:Schema.Types.ObjectId, ref: 'country_id'},
    city_name: { type: String, required: true }
   
  },
  {timestamps: true}
)

//first argument is collection , second is the schema 
module.exports = mongoose.model('cities', City)