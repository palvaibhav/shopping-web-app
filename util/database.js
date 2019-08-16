const Sequelize = require("sequelize");

const sequelize = new Sequelize("shop", "root", "lenovob490", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequelize;
