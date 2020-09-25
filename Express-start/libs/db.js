const { Sequelize } = require("sequelize");
const {
  database,
  user,
  password,
  host,
  dialect,
} = require("../config/config_default");

const db = new Sequelize(database, user, password, {
  host,
  dialect,
});

module.exports = db;
