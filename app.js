//Created by Jose Renteria for Lyft

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/test', (req, res) => {
  var response = {},
      firstNum = parseInt(req.body.x)||0,
      secondNum = parseInt(req.body.y)||0

  response.sum = firstNum + secondNum

  res.send(response)
})

app.listen(process.env || 3000, () => console.log('listening on port 3000'))
