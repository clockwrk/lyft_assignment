const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/test', (req, res) => {
  var response = {}

  response.sum = 5;
  console.log('response',res)
  res.send(response)

})

app.listen(3000, () => console.log('listening on port 3000'))
