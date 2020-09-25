const express = require("express");
const router = express.Router();

const users = [
  {
    name: "John",
    age: 11,
  },
  {
    name: "json",
    age: 13,
  },
];

router.get("/", (req, res) => {
  res.json(users);
});

module.exports = router;
