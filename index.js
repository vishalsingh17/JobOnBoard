const connectToMongo = require('./db');
const express = require('express')
const bodyParser = require('body-parser');

connectToMongo();
const app = express()
const port = 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// //Available routes 
app.use('/api/collect', require('./routes/collect'))

// app.use('/form', formRoutes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
