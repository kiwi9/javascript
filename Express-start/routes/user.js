const express = require('express');
const router = express.Router()

const users = [{
    name: 'tony',
    age: 11
  },
  {
    name: 'jay',
    age: 22
  },
]

router.get('/', async (req, res) => {
  res.json(users)
})

module.exports = router