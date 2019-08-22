const Sequelize = require("sequelize");

const sequelize = new Sequelize("shopdb", "root", "password", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequelize;
