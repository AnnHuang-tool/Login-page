const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

function userCheck(userInput) {
  let userInfo = {}
  for (i = 0; i < users.length; i++) {
    if (users[i].email === userInput.email & users[i].password === userInput.password)
      userInfo = users[i]
  }
}


// export userCheck function for other files to use
module.exports = userCheck