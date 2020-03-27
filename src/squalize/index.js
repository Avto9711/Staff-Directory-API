const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect:  'mssql',
  port:1433,
  dialectOptions: {
    options: {
        encrypt: true,
    }
  },
  define:{
    freezeTableName: true,
    timestamps: false

  },
});

module.exports.db = sequelize;