// require packages used in the project
const express = require('express')
const app = express()

// require express-handlebars here
const exhbs = require('express-handlebars')
// setting template engine(麻煩幫我把樣板引擎交給 express-handlebars)
const bodyParser = require('body-parser')
const login = require('./login')

app.engine('handlebars', exhbs({ defultLayout: 'main' }))
app.set('view engine', 'handlebars')

// routes setting
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  // console.log(req.body)
  const userInfo = login(req.body)
  const fault = 'Incorrect username or password.'
  const userInput = (req.body)

  if (userInfo.firstname !== undefined) {
    res.render('welcome', { userInfo: userInfo })
  } else {
    res.render('index', { userInput: userInput, fault: fault })
  }
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})