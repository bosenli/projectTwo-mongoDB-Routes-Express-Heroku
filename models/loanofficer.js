const mongoose = require('mongoose')
const Schema = mongoose.Schema

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

module.exports = mongoose.model('loanofficers', LoanOfficer)