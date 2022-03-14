const app = require('./app.js')  //using app
const db = require('./db')
const routes = require('./routes')


const PORT = process.env.PORT || 3000

app.use('/', routes);


db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})