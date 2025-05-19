import express from 'express'
import mongoose from 'mongoose'
import bodyparser from 'body-parser'

const app = express()
const PORT = 3000

mongoose.Promise = global.Promise // mongo
mongoose.connect('mongodb://localhost/soccerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(bodyparser.urlencoded({ extended: true })) // bodyparser
app.use(bodyparser.json())

app.get('/', (req, res) =>
  res.send(`Our Soccer app running on port ${PORT}`)
)

app.listen(PORT, () =>
  console.log(`Your soccer server is running: port ${PORT}`)
)
