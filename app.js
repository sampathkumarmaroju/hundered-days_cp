const express = require('express')
const addDays = require('date-fns/addDays')
const app = express()

app.get('/', (request, response) => {
  let todaydate = new Date()
  let res = addDays(
    new Date(
      todaydate.getFullYear(),
      todaydate.getMonth(),
      todaydate.getDate(),
    ),
    100,
  )

  response.send(
    `${res.getDate()} / ${res.getMonth() + 1} / ${res.getFullYear()}`,
  )
})
module.exports = app
