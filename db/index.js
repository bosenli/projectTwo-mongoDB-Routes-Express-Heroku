const mongoose = require('mongoose')

// let MONGODB_URI = process.env.PROD_MONGODB || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/banksDatabase'
//mongodb+srv://bosen123:Signin2022$@clusterbs.1gxnv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//for mongodb URI connection first
const dotenv = require("dotenv")
dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
  console.log('Successfully connected to MongoDB')
}).catch(e => {
  console.error('Connection error', e.message)
})


const db = mongoose.connection 

module.exports = db

