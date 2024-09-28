const dbConfig = require("../config/db.config.js"); // indica el fichero que contiene la configuracion del gestor de base de datos (creado anteriormente)
const Sequelize = require("sequelize"); // todo lo require es para importar librerias o ficheros, esta constante importa el sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,

  pool: {
    max: dbConfig.max,
    min: dbConfig.min,
    acquire: dbConfig.acquire,
    idle: dbConfig.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.shops= require("./shop.model.js")(sequelize, Sequelize);

module.exports = db;