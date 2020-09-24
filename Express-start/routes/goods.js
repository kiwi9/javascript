const express = require('express');
const router = express.Router()

const goods = [{
    name: 'tomcat',
    age: 11
  },
  {
    name: 'apache',
    age: 22
  },
]

router.get('/', async (req, res) => {
  res.json(goods)
})

module.exports = router