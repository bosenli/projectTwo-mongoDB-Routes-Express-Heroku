const mongoose = require('mongoose')
const Schema = mongoose.Schema

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

module.exports = mongoose.model('banks', Bank) //(collection, schema)